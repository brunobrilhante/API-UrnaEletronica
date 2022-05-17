const express = require('express');
const controller = express.Router();
const candidatoService = require('../service/candidato.service');

controller.post('/createCandidato', (request, response) => {
    response.send(candidatoService.create(request.body));
});

controller.get('/getCandidato', async (request, response) => {
    response.send(await candidatoService.getCandidato(request.query));
});

controller.get('/getAllCandidatos', async (request, response) => {
    response.send(await candidatoService.getAll());
});

controller.put('/updateCandidatos', async (request, response) => {
    response.send(await candidatoService.update(request.params, request.body));
});

controller.delete('/deleteCandidato', async (request, response) => {
    response.send(await candidatoService.delete(request.query));
});

module.exports = controller;