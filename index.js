const express = require('express');

const server = express();

server.use(express.json());

const projectsRouter = require('./projects/projects-router.js');
const resourcesRouter = require('./resources/resources-router.js');
const tasksRouter = require('./tasks/tasks.router.js');

server.use('/projects', projectsRouter);
server.use('/resources', resourcesRouter);
server.use('/tasks', tasksRouter);

const port = process.env.PORT || 5000;
server.listen(port, console.log('Listening on port 5000...'));