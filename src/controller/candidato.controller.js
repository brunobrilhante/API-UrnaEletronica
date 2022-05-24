const express = require("express");
const controller = express.Router();
const candidatoService = require("../service/candidato.service");

controller.post("/createCandidato", (request, response) => {
    // #swagger.tags = ['Candidatos']
    // #swagger.summary = 'Cadastra um novo candidato no banco de dados.'
    // #swagger.description = 'Essa rota é responsável por cadastrar um novo candidato.'
    /* #swagger.parameters['dados do candidato'] = {
        in: 'body',
        description: 'Informações do candidato.',
        required: true,
        schema: { $ref: "#/definitions/Candidato"}
    }*/
    response.send(candidatoService.create(request.body));
});

controller.get("/getCandidato", async (request, response) => {
    // #swagger.tags = ['Candidatos']
    // #swagger.parameters['numero'] = { description: 'Número do candidato.' }
    // #swagger.summary = 'Retorna um candidato cadastrado, pelo seu número.'
    // #swagger.description = 'Retorna todos os candidatos cadastrados.'
    response.send(await candidatoService.getCandidato(request.query));
});

controller.get("/getAllCandidatos", async (request, response) => {
    // #swagger.tags = ['Candidatos']
    // #swagger.summary = 'Retorna todos os candidatos cadastrados.'
    // #swagger.description = 'Retorna todos os candidatos cadastrados.'
    response.send(await candidatoService.getAll());
});

controller.put("/updateCandidatos/:numero", async (request, response) => {
    // #swagger.tags = ['Candidatos']
    // #swagger.summary = 'Atualiza informações de um candidato.'
    // #swagger.description = 'Atualiza as informações do candidato, localizando-o através de seu número, repassando os dados necessários. '
    // #swagger.parameters['numero'] = { description: 'Número do candidato.' }
    /* #swagger.parameters['dados atualizados'] = {
        in: 'body',
        description: 'candidato atualizado.',
        required: true,
        schema: { $ref: "#/definitions/Candidato"}
    }*/
    response.send(await candidatoService.update(request.params, request.body));
});

controller.delete("/deleteCandidato", async (request, response) => {
    // #swagger.tags = ['Candidatos']
    // #swagger.parameters['numero'] = { description: 'Número do candidato.' }
    // #swagger.summary = 'Deleta o candidato cadastrado com o número passado como parâmetro.'
    // #swagger.description = 'Deleta o candidato cadastrado com o número passado como parâmetro.'
    response.send(await candidatoService.delete(request.query));
});

module.exports = controller;
