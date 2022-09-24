import express from 'express'
import colors from 'colors'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import productRoutes from './routes/productRoute.js'
dotenv.config()
connectDB()
const app = express()

app.get('/',(req, res) =>{
    res.send('api is running')
})

app.use('/api/products',productRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`SERVER IS RUNNING IN ${process.env.NODE_ENV} ON PORT ${PORT}`.red.underline))
