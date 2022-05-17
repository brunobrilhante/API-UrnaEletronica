const mongoose = require('mongoose');

function mongoConnection() {
    mongoose.connect(process.env.url)
        .then(() => {
            console.log('Conectado com sucesso!');
        })
        .catch((error) => {
            console.error('Houve um erro: ' + error);
        });
}

module.exports = mongoConnection;