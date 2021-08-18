const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors()) 
app.use(express.json())


// const units = [
//     {id: 0, code: 'COMP1010', title:'Fundamentals of Computer Science', offering: ['S1', 'S2']},
//     {id: 1, code: 'COMP1750', title:'Introduction to Business Information Systems', offering: ['S1']},
//     {id: 2, code: 'COMP2110', title:'Web Technology', offering: ['S1', 'S2']},
//     {id: 3, code: 'COMP2750', title:'Applications Modelling and Development', offering: ['S1']},
//     {id: 4, code: 'MMCC2045', title:'Interactive Web Design', offering: ['S2']},
//     {id: 5, code: 'COMP3120', title:'Advanced Web Development', offering: ['S2']},
//     {id: 6, code: 'COMP3130', title:'Mobile Application Development', offering: ['S1']}
// ]
const fs = require('fs')
const json = fs.readFileSync('server/units.json')
const units = JSON.parse(json)

// const units = require('./units.json')
// console.log(units)
app.get('/', (request, response) => {
    response.send('<h1> this is a web server </h1>')
})

app.get('/api/units', (request, response) => {
    console.log('get units request')
    response.json(units.units)
})

app.get('/api/units/:id', (request, response) => {
    const id = Number(request.params.id)
    const unit = units.units.find(unit => unit.id === id)
    if (unit) {
        response.json(unit)
    }
    else {
        response.status(404).end()
    }
})

app.delete('/api/units/:id', (request, response) => {
    const id = Number(request.params.id)
    units.units = units.units.filter(unit => unit.id !== id)
    response.status(204).end()
})

const generateID = () => {
    const maxID = units.units.length > 0 
    ? Math.max(...units.units.map(u => u.id))
    : 0
    return maxID + 1
}

app.post('/api/units', (request, response) => {
    const body = request.body

    if (!body.code || !body.title) {
        return response.status(400).json({
            error: 'code or title missing'
        })
    }

    const unit = {
        id: generateID(),
        code: body.code,
        title: body.title,
        offering: body.offering
    }

    units.units = units.units.concat(unit)
    response.json(unit)
})

const PORT = 3001
    app.listen(PORT, () => {
        console.log(`server running on port ${PORT}`)
})