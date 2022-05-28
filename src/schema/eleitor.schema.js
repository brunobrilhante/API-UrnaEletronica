const mongoose = require("mongoose");

const eleitorSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    cpf: { type: String, required: true },
    estado: { type: String, required: true },
    cidade: { type: String, required: true },
    bairro: { type: String, required: true },
    email: { type: String, required: true },
    dataNascimento: { type: String, required: true },
    zona: { type: String, required: true },
    secao: { type: String, required: true },
    numeroInscricao: { type: String, required: true },
    counter: { type: String, required: true },
    nice: { type: String, required: true },
});

const eleitorModel = mongoose.model("Eleitor", eleitorSchema);

module.exports = eleitorModel;
