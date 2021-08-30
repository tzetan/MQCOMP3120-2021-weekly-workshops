require("dotenv").config()
const mongoose = require("mongoose")
const Unit = require("./models/units")
const fs = require("fs")

const rawData = fs.readFileSync("server/units.json")
const data = JSON.parse(rawData)

data.units.map(record => {
    console.log(record)
    const newUnit = new Unit({
        code: record.code,
        title: record.title,
        offering: record.offering
    })
    newUnit.save().then(result => {
        console.log("unit record saved")
    })
})

// const PORT = process.env.PORT
// app.listen(PORT, () => {

// })