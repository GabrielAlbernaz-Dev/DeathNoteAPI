const request = require('supertest')
const express = require('express')
const app = express()
const animeRouter = require('../routes/anime')
app.use('/anime', animeRouter);

describe('Testing anime routes', () => {

    test('Get method: Should be a JSON and return http status code 200 and the key animeName', async () => {
        const res = await request(app).get('/anime');
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200);
        expect(res._body.animeName !== undefined).toBe(true)
    })

    test('Post method: Should be a JSON and return http status code 200', async () => { 
         request(app)
            .post('/anime')
            .type('json')
            .set('Accept', 'application/json')
            .send({test:'I am testing'})
            .expect(200)
            .expect('Content-Type', /json/)
     })

     test('Put method: Should be a JSON and return http status code 200', async () => { 
        request(app)
            .put('/anime/:id')
            .type('json')
            .set('Accept', 'application/json')
            .send({animeName:'Naruto'})
            .expect(200)
            .expect('Content-Type', /json/)
     })

     test('Deleted method: Should be a JSON and return http status code 200', async () => { 
        request(app)
            .delete('/anime/:id')
            .type('json')
            .set('Accept', 'application/json')
            .send({animeName:true,description:true})
            .expect(200)
            .expect('Content-Type', /json/)
     })
})
