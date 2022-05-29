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

    getAllVotos: async () => {
        let todosOsVotos = 0;
        candidatos = await candidatoModel.find().then((candidatos) => candidatos.map((votos) => (todosOsVotos += votos.votos)));
        return { todosOsVotos };
    },

    atualizarVoto: async (numero) => {
        let candidato = await this.getCandidato(numero).then((dados) => (dados.votos += 1));
        return this.update(numero, candidato);
    },
};

module.exports = candidatoService;
