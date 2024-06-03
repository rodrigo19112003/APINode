const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var corsOptions = {
    origin: ["https://localhost:3001", "https://localhost:8080"],
    methods: "GET,POST,PUT,DELETE"
};
app.use(cors(corsOptions));

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use("/api/categories", require('./routes/categories.routes'));
app.use("/api/movies", require('./routes/movies.routes'));
app.get('*', (req, res) => { res.status(404).send() });

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Aplicación de ejemplo escuchando en el puerto ${process.env.SERVER_PORT}`);
});