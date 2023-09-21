require('dotenv').config();
const http = require('http');
const express = require('express');
const db = require('./DB/Connection');
const bodyParser = require('body-parser');
const { join } = require('path');
const routes = require('./routes/routes');

const app = express();

const server = http.createServer(app);
//Route Files

app.use(bodyParser.json());

app.use('/', express.static(join(__dirname, 'static/')));
app.use('/public', express.static(join(__dirname, 'public/')));

app.use('/api', routes);

const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});