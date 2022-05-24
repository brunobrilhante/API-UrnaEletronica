const candidatoModel = require("../schema/candidato.schema");

const candidatoService = {
    create: (dados) => {
        return candidatoModel.create(dados);
    },

    getCandidato: (numero) => {
        return candidatoModel.findOne(numero);
    },

    getAll: () => {
        return candidatoModel.find();
    },

    update: (numero, dados) => {
        return candidatoModel.findOneAndUpdate(numero, dados, { new: true });
    },

    delete: (numero) => {
        return candidatoModel.deleteOne(numero);
    },
};

module.exports = candidatoService;
