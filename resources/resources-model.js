const db = require('../data/db.js');

module.exports = {
    get,
    getById,
    insert
}

function get() {
    return db('resources');
}

function getById(id) {
    return db('resources')
        .where({id: id})
        .first();
}

function insert(resource) {
    return db('resources')
        .insert(resource)
        .then(([id]) => getById(id));
}