const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('MongoDB ulandi')
  } catch (err) {
    console.error('MongoDB xato:', err)
    process.exit(1) // 💥 serverni
  }
}
console.log('MONGO_URI:', process.env.MONGO_URI)

module.exports = connectDB
