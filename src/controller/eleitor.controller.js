const express = require('express');
const controller = express.Router();
const eleitorService = require('../service/eleitor.service');

controller.post('/createEleitor', (request, response) => {
    // #swagger.tags = ['Eleitores']
    // #swagger.summary = 'Cadastra um novo eleitor no banco de dados.'
    // #swagger.description = 'Cadastra um novo eleitor no banco de dados.'
    /* #swagger.parameters['dados do eleitor'] = {
        in: 'body',
        description: 'dados do eleitor.',
        required: true,
        schema: { $ref: "#/definitions/Eleitor"}
    }*/
    response.send(eleitorService.create(request.body));
});

controller.get('/getEleitor', async (request, response) => {
    // #swagger.tags = ['Eleitores']
    // #swagger.parameters['numeroInscricao'] = { description: 'Número de inscrição do eleitor.' }
    // #swagger.summary = 'Retorna um eleitor cadastrado usando sua inscrição.'
    // #swagger.description = 'Retorna um eleitor cadastrado usando sua inscrição'
    response.send(await eleitorService.getEleitor(request.query));
});

controller.get('/getAllEleitores', async (request, response) => {
    // #swagger.tags = ['Eleitores']
    // #swagger.summary = 'Retorna todos os eleitores cadastrados.'
    // #swagger.description = 'Retorna todos os eleitores cadastrados.'
    response.send(await eleitorService.getAll());
});

controller.put('/updateEleitor/:numeroInscricao', async (request, response) => {
    // #swagger.tags = ['Eleitores']
    // #swagger.summary = 'Atualiza informações de um eleitor.'
    // #swagger.description = 'Atualiza as informações do eleitor, localizando-o através de seu número, repassando os dados necessários. '
    // #swagger.parameters['numeroInscricao'] = { description: 'Número de inscrição do eleitor.' }
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
    // #swagger.parameters['numeroInscricao'] = { description: 'Número de inscrição do eleitor.' }
    // #swagger.summary = 'Deleta um eleitor cadastrado, através de seu número de eleitor.'
    // #swagger.description = 'Deleta um eleitor cadastrado, através de seu número de eleitor.'
    response.send(await eleitorService.delete(request.query));
});

module.exports = controller;