const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
//const swaggerFile = require('');
//const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/urna');

