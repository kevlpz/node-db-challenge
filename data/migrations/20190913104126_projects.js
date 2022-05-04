
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
        tbl.increments('id');
        tbl.string('projectName', 128).unique().notNullable();
        tbl.string('description', 128);
        // tbl.string('resourceId', 128).references('resourceId').inTable('projects_resources');
        tbl.boolean('completed').defaultTo(false);
    })
    .createTable('tasks', tbl => {
        tbl.increments('id');
        tbl.string('taskName', 128).notNullable();
        tbl.string('description', 128).notNullable();
        tbl.string('projectId', 128).notNullable();
        tbl.string('notes', 128);
        tbl.boolean('completed').defaultTo(false);
    })
    .createTable('resources', tbl => {
        tbl.increments('id');
        tbl.string('resourceName', 128).notNullable();
        // tbl.string('projectId', 128).references('projectId').inTable('projects_resources');
        tbl.string('description', 128);
    })
    .createTable('projects_resources', tbl => {
        tbl.string('projectId')
            .notNullable()
            .references('id')
            .inTable('projects');
        tbl.string('resourceId')
            .notNullable()
            .references('id')
            .inTable('resources');
        tbl.primary(['projectId', 'resourceId']);
    });
};

exports.down = function(knex) {
  
};
