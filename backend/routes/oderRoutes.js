import express from'express'
import { placeOrderRazorpay, placeOrderStripe, updateStatus,placeOrder,allOrders , userOrder ,verifyStripe, verifyRazorpay} from '../controllers/orderController.js'
import {adminAuth }from '../middleware/adminAuth.js'
import { authUser } from '../middleware/auth.js'

 export const orderRouter = express.Router()

// admin feature
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

//payment feature

orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/stripe',authUser,placeOrderStripe)
orderRouter.post('/razorpay',authUser,placeOrderRazorpay)

// user featuure

orderRouter.post('/userorder',authUser,userOrder)

// verify payment
orderRouter.post('/verifyStripe',authUser,verifyStripe)
orderRouter.post('/verifyRazorpay',authUser,verifyRazorpay)


