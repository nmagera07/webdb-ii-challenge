const express = require('express');


const carsRouter = require('./cars/carsRouter');

const server = express();


server.use(express.json());

server.use('/', carsRouter);

module.exports = server;