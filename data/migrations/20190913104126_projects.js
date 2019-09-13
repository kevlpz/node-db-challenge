
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
        tbl.increments('id');
        tbl.string('projectName', 128).unique().notNullable();
        tbl.string('description', 128);
        tbl.boolean('completed').defaultTo(false);
    })
    .createTable('tasks', tbl => {
        tbl.increments('id');
        tbl.string('description', 128).notNullable();
        tbl.string('notes', 128);
        tbl.boolean('completed').defaultTo(false);
    })
    .createTable('resources', tbl => {
        tbl.increments('id');
        tbl.string('resourceName', 128).notNullable();
        tbl.string('projectId', 128).references('id').inTable('projects');
        tbl.string('description', 128);
    })
};

exports.down = function(knex) {
  
};
