require("dotenv").config()
const mongoose = require('mongoose')

const url = process.env.MONGODB_URI
// const url = "mongodb+srv://reallybro:qazsedc@cluster0.iy6dp.mongodb.net/units?retryWrites=true&w=majority"

console.log('connecting to', url)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const unitSchema = new mongoose.Schema({
    code: String,
    title: String,
    offering: [{
      type: String
    }]
})

unitSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model("Unit", unitSchema)