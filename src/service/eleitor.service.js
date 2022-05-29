const eleitorModel = require("../schema/eleitor.schema");
const crypto = require("crypto");

const eleitorService = {
    create: (dados) => {
        const salt = crypto.randomBytes(16).toString("hex");
        const senha = crypto.pbkdf2Sync(dados.senha, salt, 5, 16, "sha512").toString("hex");
        return eleitorModel.create({ ...dados, salt, senha });
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

    authenticate: async (senhaPassada) => {
        const credencial = await eleitorModel.findOne({ cpf: senhaPassada.cpf }).lean();
        let senhaHasheada = crypto.pbkdf2Sync(senhaPassada.senha, credencial.salt, 5, 16, "sha512").toString("hex");
        if (credencial.senha === senhaHasheada) {
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
