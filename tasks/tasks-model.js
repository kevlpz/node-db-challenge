const db = require('../data/db.js');

module.exports = {
    get,
    getById,
    insert
};

function get() {
    return db('tasks')
        .then(tasks => toBools(tasks));
}

function getById(id) {
    return db('tasks')
        .where({id: id})
        .first()
        .then(task => toBool(task));
}

function insert(task) {
    return db('tasks')
        .insert(task)
        .then(([id]) => getById(id));
}

// bool converter
function toBools(tasks) {
    tasks.forEach(task => {
        if(!task.completed) {
            task.completed = false;
        }
    })
    return tasks;
}

function toBool(task) {
    if(!task.completed) {
        task.completed = false
    }
    return task;
}