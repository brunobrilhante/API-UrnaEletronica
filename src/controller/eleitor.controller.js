const express = require('express');
const controller = express.Router();
const eleitorService = require('../service/eleitor.service');

controller.post('/createEleitor', (request, response) => {
    // #swagger.tags = ['Eleitores']
    // #swagger.parameters['numero'] = { description: 'Número do eleitor.' }
    // #swagger.summary = 'Retorna todos os eleitores cadastrados'
    // #swagger.description = 'Retorna todos os eleitores cadastrados'
    response.send(eleitorService.create(request.body));
});

controller.get('/getEleitor', async (request, response) => {
    // #swagger.tags = ['Eleitores']
    // #swagger.parameters['numero'] = { description: 'Número do eleitor.' }
    // #swagger.summary = 'Retorna todos os eleitores cadastrados'
    // #swagger.description = 'Retorna todos os eleitores cadastrados'
    response.send(await eleitorService.getEleitor(request.query));
});

controller.get('/getAllEleitores', async (request, response) => {
    // #swagger.tags = ['Eleitores']
    // #swagger.summary = 'Retorna todos os eleitores cadastrados'
    // #swagger.description = 'Retorna todos os eleitores cadastrados'
    response.send(await eleitorService.getAll());
});

controller.put('/updateEleitor', async (request, response) => {
    // #swagger.tags = ['Eleitores']
    // #swagger.summary = 'Atualiza informações de um eleitor.'
    // #swagger.description = 'Atualiza as informações do eleitor, localizando-o através de seu número, repassando os dados necessários. '
    // #swagger.parameters['matricula'] = { description: 'Número do eleitor.' }
    /* #swagger.parameters['dados atualizados'] = {
        in: 'body',
        description: 'eleitor atualizado.',
        required: true,
        schema: { $ref: "#/definitions/Eleitor"}
    }*/
    response.send(await eleitorService.update(request.params, request.body));
});

controller.delete('/deleteEleitor', async (request, response) => {
    // #swagger.tags = ['Eleitores']
    // #swagger.parameters['numero'] = { description: 'Número do eleitor.' }
    // #swagger.summary = 'Retorna todos os eleitores cadastrados'
    // #swagger.description = 'Retorna todos os eleitores cadastrados'
    response.send(await eleitorService.delete(request.query));
});

module.exports = controller;