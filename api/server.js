const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const RegRouter = require('../routes/registration-router');

const server = express();

server.use(helmet());

server.use(express.json());

server.use('/registration', RegRouter);

server.get('/', (req, res, next) => {
	res.json({
		message: 'Welcome to the Webinar API',
	});
});

module.exports = server;
