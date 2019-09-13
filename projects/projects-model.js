const db = require('../data/db.js');

module.exports = {
    getProjects,
    getProjectById,
    insert
}

function getProjects() {
    return db('projects')
}

function getProjectById(id) {
    return db('projects')
        .where({id: id})
}

function insert(project) {
    if(!project.completed) {
        project.completed = false;
    }
    return db('projects')
        .insert(project);
}