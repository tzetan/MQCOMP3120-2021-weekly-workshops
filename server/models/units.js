/*
  Setting up the database and defining the schema
*/
const mongoose = require('mongoose')
// const mongoSetup = require('@shelf/jest-mongodb'); 
// const {MongoClient} = require('mongodb');

// const url = process.env.MONGO_URL
const url = process.env.MONGODB_URI

// console.log('connecting to', url)
// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(result => {
//     console.log('connected to MongoDB')
//   })
//   .catch((error) => {
//     console.log('error connecting to MongoDB:', error.message)
//    })

// we want the database connection to happen synchronously so we define
// this async function and use await on the connect call
const doConnect = async () => {
  // await mongoSetup();
  await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch((error) => {
      console.log('error connecting to MongoDB', error.message)
    })
}

// call the connection function
doConnect()

const unitSchema = new mongoose.Schema({
    code: String,
    title: String,
    offering: [String]
    // offering: [{
    //   type: String
    // }]
})

unitSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Unit = mongoose.model("Unit", unitSchema)

module.exports = Unit