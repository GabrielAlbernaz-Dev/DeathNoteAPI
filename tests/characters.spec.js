const request = require('supertest')
const express = require('express')
const app = express()
const charactersRouter = require('../routes/characters')
app.use('/characters', charactersRouter);

describe('Testing anime routes', () => {

    test('Get method: Should be a JSON and return http status code 200 and verify if the characters exists', async () => {
        const res = await request(app).get('/characters');
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200);
        expect(res._body.results.length > 0).toBe(true)
    })

    test('Post method: Should be a JSON and return http status code 200', async () => { 
         request(app)
            .post('/characters')
            .type('json')
            .set('Accept', 'application/json')
            .send({test:'I am testing'})
            .expect(200)
            .expect('Content-Type', /json/)
     })

     test('Put method: Should be a JSON and return http status code 200', async () => { 
        request(app)
            .put('/characters')
            .type('json')
            .set('Accept', 'application/json')
            .send({animeName:'Naruto'})
            .expect(200)
            .expect('Content-Type', /json/)
     })
})
