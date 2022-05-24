const mongoose = require("mongoose");

const eleitorSchema = new mongoose.Schema({
    nome: String,
    cpf: String,
    estado: String,
    cidade: String,
    bairro: String,
    email: String,
    dataNascimento: String,
    zona: String,
    secao: String,
    numeroInscricao: String,
    counter: String,
    nice: String,
});

const eleitorModel = mongoose.model("Eleitor", eleitorSchema);

module.exports = eleitorModel;
