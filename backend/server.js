import express from 'express'
import cors from 'cors'
import "dotenv/config";
import connectDB from "./config/db.js";
import connectCloudinary from "./config/cloudinary.js"
import dotenv from 'dotenv'
import userRouter from './routes/userRoutes.js';
import productRouter from './routes/productRoutes.js'
import cartRouter from './routes/cartRoutes.js';
import { orderRouter } from './routes/oderRoutes.js';

const app = express()
const port = process.env.PORT || 4000
await connectDB()
 connectCloudinary()


app.use(express.json())
app.use(cors())

app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)



app.get('/',(req,res)=>{
    res.send("API Working")
})

app.listen(port, ()=> console.log("server is runnning on port :" +port))