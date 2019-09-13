const express = require('express');

const server = express();

server.use(express.json());

const projectsRouter = require('./projects/projects-router.js');
server.use('/projects', projectsRouter);

const port = process.env.PORT || 5000;
server.listen(port, console.log('Listening on port 5000...'));