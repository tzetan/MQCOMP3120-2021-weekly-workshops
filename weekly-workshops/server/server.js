const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors()) 


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

const PORT = 3001
    app.listen(PORT, () => {
        console.log(`server running on port ${PORT}`)
})