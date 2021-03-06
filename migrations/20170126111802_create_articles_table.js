exports.up = function(knex, Promise) {
    return knex.schema.createTable('articles', function (table) {
        table.increments('id');
        table.string('name');
        table.string('description');
        table.text('content');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('articles');
};
