const swaggerAutogen = require('swagger-autogen')();

const outputFile = './doc/swagger_output.json';
const controllerFile = ['./src/controller/candidato.controller.js', './src/controller/eleitor.controller.js'];
const doc = {
    info: {
        version: '2.0.0',
        title: 'Urna 2022 API',
        description: 'Urna eletrônica - #SeuVotoFazOPais',
        contact: {
            email: 'storeexodia@gmail.com'
        }
    },
    host: 'localhost:8080',
    basePath: '/urna',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    definitions: {
        Candidato: {
            nome: "José Mário",
            vice: "Arlindo Correa",
            partido: "Delas",
            numero: '68',
            votos: 0
        },
        Eleitor: {
            nome: "Leopoldo França",
            cpf: "12332134404",
            estado: "PE",
            cidade: "Serra Talhada",
            bairro: "Centro",
            email: "leozinho@gmail.com",
            dataNascimento: "16/05/2000",
            zona: "066",
            secao: "0384",
            numeroInscricao: "123456789101",
            counter: "5555",
        },
        Credencial: {
            cpf: "12332134404",
            counter: "5555",
        }
    }
}

swaggerAutogen(outputFile, controllerFile, doc).then(() => {
    require('../../index.js');
});