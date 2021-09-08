const mongoose = require('mongoose')
const supertest = require('supertest')
const fs = require('fs')
const app = require('../app')
const Unit = require("../models/units")

const api = supertest(app)

const sampleData = (fileName) => {
    const rawData = fs.readFileSync(fileName)
    const data = JSON.parse(rawData)

    data.units.map(async record => {
        const l = new Unit(record)
        await l.save()
    })
}

describe('api', () => {

    beforeEach(async () => {
        sampleData("server/units.json")
    })

    test('get request returns JSON', async () => {
        await api.get('/api/units')
            .expect(200)
            .expect('Content-Type', /application\/json/)
    })

    test('there are seven units records', async () => {
        const response = await api.get('/api/units')
        expect(response.body).toHaveLength(7)
    })

    test('a specific unit is within the returned units', async () => {
        const response = await api.get('/api/units')
        const title = response.body.map(u => u.title)
        expect(title).toContain('Web Technology')
    })

    test('get request a specific unit', async () => {
        const initialUnit = await api.get('/api/units')
        const original = initialUnit.body[0]

        const result = await api.get('/api/units/' + original.id)
            .expect(200)
            .expect('Content-Type', /application\/json/)

        const processedUnitToView = JSON.parse(JSON.stringify(original))
        expect(result.body).toEqual(processedUnitToView)
    })

    test('get request a specific unit does not exist', async () => {
        // const initialUnit = await api.get('/api/units')
        // console.log(initialUnit.body)
        // const original = initialUnit.body[9]

        await api.get('/api/units/' + 22)
            .expect(404)
            .expect('Content-Type', /application\/json/)
    })
    
    test('post request adds a new unit', async () => {
        const newUnit = {
            code: "PICT3011",
            title: "Cyber Security in Practice",
            offering: ["S2"]
        }

        await api.post('/api/units')
            .send(newUnit)
            .expect(200)
            .expect('Content-Type', /application\/json/)

        const response = await api.get('/api/units')
        expect(response.body).toHaveLength(8)
    })

    test('post request fails when title is not added', async () => {
        const newUnit = {
            code: "PICT3011",
            offering: ["S2"]
        }

        await api.post('/api/units')
            .send(newUnit)
            .expect(400)

        const response = await api.get('/api/units')
        expect(response.body).toHaveLength(7)
    })

    afterEach(async () => {
        await Unit.deleteMany({})
    })

    afterAll(() => {
        mongoose.connection.close()
    })
})