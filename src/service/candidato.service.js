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

    getVoto: async (numero) => {
        let candidato = await candidatoModel.findOne(numero);
        return {votos: candidato.votos};
    },

    getAllVotos: async () => {
        let todosOsVotos = 0;
        candidatos = await candidatoModel.find().then((candidatos) => candidatos.map((votos) => (todosOsVotos += votos.votos)));
        return { todosOsVotos };
    },

    atualizarVoto: async (numero) => {
        let candidato = await candidatoModel.findOne(numero).then((dados) => dados);
        candidato.votos += 1;
        return candidatoModel.findOneAndUpdate(numero, candidato);
    },
};

module.exports = candidatoService;
