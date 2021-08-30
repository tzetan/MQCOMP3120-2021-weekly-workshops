const express = require('express')
// const bcrypt = require("bcrypt")
// const jwt = require("jsonwebtoken")
const fs = require("fs")
const Unit = require("../models/units")

// const SECRET = process.env.SECRET

const rawData = fs.readFileSync("server/units.json")
const data = JSON.parse(rawData)

// const getUser = (username) => {
//     return data.users.filter(u => u.username === username)[0]
// }

// const getTokenFrom = request => {
//     const authorization = request.get('authorization')
//     if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
//         return authorization.substring(7)
//     }
//     return null
// }


const apiRouter = express.Router()

apiRouter.get('/api/units', (req, res) => {
    Unit.find({}).then(result => {
        console.log(result)
        res.json(result)
    })
})

apiRouter.post('/api/units', (req, res) => {
    // const token = getTokenFrom(req)
    // const decodedToken = jwt.verify(token, SECRET)

    // if(!token || !decodedToken.id) {
    //     return res.status(401).json({error: "invalid token"})
    // }

    const body = req.body
    const newUnit = new Unit({
        code: body.code,
        title: body.title,
        offering: body.offering,
        // user: decodedToken.id,
        // id: data.units.length
    })

    newUnit.save().then(result => {
        res.json(result)
    })
    // data.units.push(newUnit)
    // res.json(newUnit)
})


module.exports = apiRouter