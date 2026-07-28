require('dotenv').config()

const express = require('express')
const cors = require('cors')

const connectDB = require('./config/db')
const productRoutes = require('./routes/productRoutes')
const bot = require('./bot/bot')

const app = express()

app.use(cors())
app.use(express.json())

connectDB()

app.use('/products', productRoutes)

app.get('/', (req, res) => {
  res.send('API ishlayapti')
})

bot.launch()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log('Server ishlayapti')
})
