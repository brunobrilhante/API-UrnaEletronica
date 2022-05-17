const eleitorModel = require("../schema/eleitor.schema");

const eleitorService = {

    create: (dados) => {
        return eleitorModel.create(dados);
    },

    getEleitor: (cpf) => {
        return eleitorModel.findOne(cpf);
    },

    getAll: () => {
        return eleitorModel.find();
    },

    update: (cpf, dados) => {
        return eleitorModel.findOneAndUpdate(cpf, dados, { new: true });
    },

    delete: (cpf) => {
        return eleitorModel.deleteOne(cpf);
    }
};

module.exports = eleitorService;