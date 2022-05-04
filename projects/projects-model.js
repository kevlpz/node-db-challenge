const db = require('../data/db.js');

module.exports = {
    getProjects,
    getProjectById,
    insertProject
}

function getProjects() {
    return db('projects')
        .then(projects => {
            return toBools(projects)
        })
}

function getProjectById(id) {
    return db('projects')
        .where({id: id})
        .first()
        .then(project => toBool(project));
}

function insertProject(project) {
    return db('projects')
        .insert(project)
        .then(([id]) => getProjectById(id));
}

// integer to boolean converters
function toBools(projects) {
    projects.forEach(project => {
        if(!project.completed) {
            project.completed = false;
        }
    })
    return projects;
}

function toBool(project) {
    if(!project.completed) {
        project.completed = false
    }
    return project;
}