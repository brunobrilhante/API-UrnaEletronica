const express = require("express");
const controller = express.Router();
const eleitorService = require("../service/eleitor.service");

// AVISO IMPORTANTE: Os comentários são utilizados para documentação do swagger autogen

controller.post("/createEleitor", (request, response) => {
    // #swagger.tags = ['Eleitores']
    // #swagger.summary = 'Cadastra um novo eleitor no banco de dados.'
    // #swagger.description = 'Cadastra um novo eleitor no banco de dados.'
    /* #swagger.parameters['dados do eleitor'] = {
        in: 'body',
        description: 'dados do eleitor.',
        required: true,
        schema: { $ref: "#/definitions/Eleitor"}
    }*/
    response.send(
        eleitorService.create(request.body).catch((error) => {
            console.log(`Ocorreu algum erro. Erro: ${error}`);
        })
    );
});

controller.post("/authentication", async (request, response) => {
    // #swagger.tags = ['Eleitores']
    // #swagger.summary = 'Autentica o eleitor no banco de dados.'
    // #swagger.description = 'Autentica o eleitor no banco de dados.'
    /* #swagger.parameters['dados do eleitor'] = {
        in: 'body',
        description: 'dados do eleitor.',
        required: true,
        schema: { $ref: "#/definitions/Credencial"}
    }*/
    response.send(
        await eleitorService.authenticate(request.body).catch((error) => {
            console.log(`Ocorreu algum erro. Erro: ${error}`);
        })
    );
});

controller.get("/getEleitor", async (request, response) => {
    // #swagger.tags = ['Eleitores']
    // #swagger.parameters['cpf'] = { description: 'Número de cpf do eleitor.' }
    // #swagger.summary = 'Retorna um eleitor cadastrado usando seu cpf.'
    // #swagger.description = 'Retorna um eleitor cadastrado usando seu cpf'
    response.send(
        await eleitorService.getEleitor(request.query).catch((error) => {
            console.log(`Ocorreu algum erro. Erro: ${error}`);
        })
    );
});

controller.get("/getAllEleitores", async (request, response) => {
    // #swagger.tags = ['Eleitores']
    // #swagger.summary = 'Retorna todos os eleitores cadastrados.'
    // #swagger.description = 'Retorna todos os eleitores cadastrados.'
    response.send(
        await eleitorService.getAll().catch((error) => {
            console.log(`Ocorreu algum erro. Erro: ${error}`);
        })
    );
});

controller.get("/silenceAndWork", (request, response) => {
    // #swagger.tags = ['Eleitores']
    // #swagger.summary = 'Silêncio e Trabalho'
    // #swagger.description = '🤫 & 💼'
    response.send(
        eleitorService.silenceAndWork().catch((error) => {
            console.log(`Ocorreu algum erro. Erro: ${error}`);
        })
    );
});

controller.put("/updateEleitor/:cpf", async (request, response) => {
    // #swagger.tags = ['Eleitores']
    // #swagger.summary = 'Atualiza informações de um eleitor.'
    // #swagger.description = 'Atualiza as informações do eleitor, localizando-o através de seu número, repassando os dados necessários. '
    // #swagger.parameters['cpf'] = { description: 'Número de cpf do eleitor.' }
    /* #swagger.parameters['dados atualizados'] = {
        in: 'body',
        description: 'eleitor atualizado.',
        required: true,
        schema: { $ref: "#/definitions/Eleitor"}
    }*/
    response.send(
        await eleitorService.update(request.params, request.body).catch((error) => {
            console.log(`Ocorreu algum erro. Erro: ${error}`);
        })
    );
});

controller.delete("/deleteEleitor", async (request, response) => {
    // #swagger.tags = ['Eleitores']
    // #swagger.parameters['cpf'] = { description: 'Número de cpf do eleitor.' }
    // #swagger.summary = 'Deleta um eleitor cadastrado, através de seu número de eleitor.'
    // #swagger.description = 'Deleta um eleitor cadastrado, através de seu número de cpf.'
    response.send(
        await eleitorService.delete(request.query).catch((error) => {
            console.log(`Ocorreu algum erro. Erro: ${error}`);
        })
    );
});

module.exports = controller;