const express = require('express')
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const fs = require("fs")
const Unit = require("../models/units")

const SECRET = process.env.SECRET

const rawData = fs.readFileSync("server/units.json")
const data = JSON.parse(rawData)

const getUser = (username) => {
    return data.users.filter(u => u.username === username)[0]
}

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

apiRouter.get('/api/units/:id', (req, res) => {
    Unit.findById(req.params.id)
        .then(result => {
            res.json(result)
        })
        .catch(error => {
            res.status(404).json({error: "Not Found"})
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

    if (!body.code || !body.title) {
        res.status(400).json({
            error: 'code or title missing'
        })
    } else {
        newUnit.save().then(result => {
            res.json(result)
        })
    }
    // .catch(error => {
    //     res.status(400).json({error: 'code or title missing'})
    // })
    // data.units.push(newUnit)
    // res.json(newUnit)
})

apiRouter.delete('/api/units/:id', (req, res) => {
    Unit.findByIdAndRemove(req.params.id)
        .then(result => {
            res.status(204).end()
        })
})

apiRouter.post('/api/login', async (req, res) => {
    const {username, password} = req.body

    const user = getUser(username)
    console.log(user)

    if (!user) {
        return res.status(401).json({error: "invalid username or password"})
    }

    if (await bcrypt.compare(password, user.password)) {
        console.log("password good")

        const userForToken = {
            id: user.id,
            username: user.username
        }
        const token = jwt.sign(userForToken, SECRET)

        return res.status(200).json({token, username: user.username, name: user.name})
    } else {
        return res.status(401).json({error: "invalid username or password"})
    }
})

module.exports = apiRouter