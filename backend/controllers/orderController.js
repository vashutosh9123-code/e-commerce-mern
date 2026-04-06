
import Order from "../models/Order.js"
import User from "../models/userModel.js"
import Stripe from 'stripe'
import razorpay from 'razorpay'


const stripe= new Stripe(process.env.STRIPE_SECRET_KEY)
const currency='inr'
const deliveryCharges=100


// Razorpay Key Diagnostics
const key_id = process.env.RAZORPAY_KEY_ID?.trim()
const key_secret = process.env.RAZORPAY_KEY_SECRET?.trim()

if (!key_id || !key_secret) {
    console.error("WARNING: Razorpay API keys are missing in backend/.env!");
} else {
    console.log("Razorpay Key ID Length:", key_id.length, `(Starts with ${key_id.substring(0, 8)})`);
    console.log("Razorpay Key Secret Length:", key_secret.length);
}

const razorpayInstance= new razorpay({
    key_id: key_id,
    key_secret: key_secret
})
// order using COD method

export const placeOrder = async(req ,res)=>{

    try {
        const {userId,items,amount,address}=req.body

        const orderData={
            userId,
            items,
            amount,
            address,
            paymentMethod:"COD",
            payment:false,
            Date:Date.now()
        }

        const newOrder= new Order(orderData)
        await newOrder.save()

        await User.findByIdAndUpdate(userId,{cartData:{}})
        res.json({success:true,message:"Order Placed"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }

}


export const placeOrderStripe = async(req,res)=>{
    try {
        const {userId,items,amount,address}=req.body
        const {origin} = req.headers

        const orderData={
            userId,
            items,
            amount,
            address,
            paymentMethod:"Stripe",
            payment:false,
            Date:Date.now()
        }

        const newOrder= new Order(orderData)
        await newOrder.save()

        const line_items= items.map((item)=>({
            price_data:{
                currency:currency,
                product_data:{
                    name:item.name
                },
                unit_amount:item.price* 100
            },
            quantity:item.quantity
        }))

        line_items.push({
            price_data:{
                currency:currency,
                product_data:{
                    name:"Delivery Charges"
                },
                unit_amount:deliveryCharges* 100
            },
            quantity:1
        })

        const session = await stripe.checkout.sessions.create({
            success_url:`${origin}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url:`${origin}/verify?success=false&orderId=${newOrder._id}`,
            line_items,
            mode:'payment'
        })

        res.json({success:true , session_url:session.url})
    } catch (error) {
         console.log(error)
        res.json({success:false,message:error.message})
    }

}
//verify stripe

export const verifyStripe = async (req,res)=>{
    const {orderId , success , userId} = req.body
    try {
        if(success === 'true' || success === true){
            await Order.findByIdAndUpdate(orderId,{payment:true})
            await User.findByIdAndUpdate(userId,{cartData:{}})
            res.json({success:true});
        }else{
            await Order.findByIdAndDelete(orderId)
            res.json({success:false})
        }
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}


export const placeOrderRazorpay=async(req,res)=>{

    try {
        const {userId,items,amount,address}=req.body
       
        const orderData={
            userId,
            items,
            amount,
            address,
            paymentMethod:"Razorpay",
            payment:false,
            Date:Date.now()
        }

        const newOrder= new Order(orderData)
        await newOrder.save()

        const option={
            amount:amount*100,
            currency:currency.toUpperCase(),
            receipt:newOrder._id.toString()
        }

        const order = await razorpayInstance.orders.create(option)
        res.json({success:true,order})
    } catch (error) {
         console.log(error)
         // Razorpay SDK error handling
         const message = error.error ? error.error.description : error.message
         res.json({success:false,message:message})
    }
}


// verify razorpay
export const verifyRazorpay = async (req,res)=>{
    const {userId , razorpay_order_id } = req.body
    try {
        const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id)
        if(orderInfo.status === 'paid'){
             await Order.findByIdAndUpdate(orderInfo.receipt,{payment:true})
             await User.findByIdAndUpdate(userId,{cartData:{}})
             res.json({success:true,message:"Payment Successful"})
        }else{
             res.json({success:false,message:"Payment Failed"})
        }
    } catch (error) {
         console.log(error)
        res.json({success:false,message:error.message})
    }
}


// All order for admin panel
 export const allOrders = async(req,res)=>{
    try {
        const orders= await Order.find({})
        res.json({success:true, orders})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}


//user order data for frontend
export const userOrder = async(req,res)=>{
    try {
        const {userId}= req.body
    const orders=await Order.find({userId})
    res.json({success:true,orders})
    } catch (error) {
         console.log(error)
        res.json({success:false,message:error.message})
    }
}


// update status from admin panel
export const updateStatus = async(req,res)=>{
    try {
        const {orderId,status}=req.body
        await Order.findByIdAndUpdate(orderId,{status})
        res.json({success:true,message:"Status Updated"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }

}