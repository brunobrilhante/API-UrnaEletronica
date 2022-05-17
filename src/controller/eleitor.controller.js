const express = require('express');
const controller = express.Router();
const eleitorService = require('../service/eleitor.service');

controller.post('/createEleitor', (request, response) => {
    response.send(eleitorService.create(request.body));
});

controller.get('/getEleitor', async (request, response) => {
    response.send(await eleitorService.getEleitor(request.query));
});

controller.get('/getAllEleitores', async (request, response) => {
    response.send(await eleitorService.getAll());
});

controller.put('/updateEleitor', async (request, response) => {
    response.send(await eleitorService.update(request.params, request.body));
});

controller.delete('/deleteEleitor', async (request, response) => {
    response.send(await eleitorService.delete(request.query));
});

module.exports = controller;