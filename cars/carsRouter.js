const express = require('express');
const knex = require('knex');

const knexConfig = require('../knexfile.js')

const db = knex(knexConfig.development)

// const db = knex({
//   // driver to use
//   client: 'sqlite3',
//   // how to find the database
//   connection: {
//     // from the root folder
//     filename: './data/car-dealer.db3'
//   },
//   // required for sqlite
//   useNullAsDefault: true
// });

const router = express.Router()

router.get('/cars', async (req, res) => {
    try {
        const cars = await db('cars')
        res.status(200).json(cars)
    } catch (error) {
        res.status(500).json({ error: 'Could not display list of cars.'})
    }
})

router.post('/cars', async (req, res) => {
    try {
        const carData = req.body
        const [ id ] = await db('cars').insert(carData)
        const newCarEntry = await db('cars').where({ id })

        res.status(201).json(newCarEntry)
    } catch (error) {
        res.status(500).json({ error: 'Could not add to list of cars.'})
    }
})

router.delete('/cars/:id', async (req, res) => {
    try {
        const { id } = req.params
        const deletedData = await db('cars').where('id', '=', id).del()
        res.status(200).json(deletedData)
    } catch (error) {
        res.status(500).json({ error: 'Could not delete car.'})
    }
})

router.put('/cars/:id', async (req,res) => {
    try {
        const { id } = req.params
        const carData = req.body
        const editCar = await db('cars').where('id', '=', id).update(carData)

        res.status(200).json(editCar)
    } catch (error) {
        res.status(400).json({ error: 'Could not edit car.'})
    }
})



module.exports = router;