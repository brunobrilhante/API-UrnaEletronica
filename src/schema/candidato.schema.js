const mongoose = require("mongoose");

const candidatoSchema = new mongoose.Schema({
    nome: String,
    vice: String,
    partido: String,
    numero: String,
    votos: Number,
});

const candidatoModel = mongoose.model("Candidato", candidatoSchema);

module.exports = candidatoModel;
