const mongoose = require("mongoose");

const candidatoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    vice: { type: String, required: true },
    partido: { type: String, required: true },
    numero: { type: String, required: true },
    votos: { type: Number, required: true },
});

const candidatoModel = mongoose.model("Candidato", candidatoSchema);

module.exports = candidatoModel;
