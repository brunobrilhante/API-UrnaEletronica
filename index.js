const porta = 8080;
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./doc/swagger_output.json");
const controllerCandidato = require("./src/controller/candidato.controller");
const controllerEleitor = require("./src/controller/eleitor.controller");
const mongoConnection = require("./src/config/db");

require("dotenv").config();

mongoConnection();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/urna/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use("/urna", controllerCandidato);
app.use("/urna", controllerEleitor);

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`);
});
