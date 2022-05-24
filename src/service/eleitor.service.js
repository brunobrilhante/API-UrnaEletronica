const eleitorModel = require("../schema/eleitor.schema");
const crypto = require("crypto");

const eleitorService = {
    create: (dados) => {
        const nice = crypto.randomBytes(16).toString("hex");
        const counter = crypto.pbkdf2Sync(dados.counter, nice, 5, 16, "sha512").toString("hex");
        return eleitorModel.create({ ...dados, nice, counter });
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
    },

    authenticate: async (senha) => {
        const credencial = await eleitorModel.findOne({ cpf: senha.cpf }).lean();
        let senhaHasheada = crypto.pbkdf2Sync(senha.counter, credencial.nice, 5, 16, "sha512").toString("hex");

        if (credencial.counter === senhaHasheada) {
            return { valido: true };
        } else {
            return { valido: false };
        }
    },

    silenceAndWork: () => {
        return "🤫 & 💼";
    },
};

module.exports = eleitorService;
