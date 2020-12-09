exports.up = function (knex) {
  return knex.schema.createTable('points', (table) => {
    table.increments();
    table.string('title').notNullable();
    table.string('lat').notNullable();
    table.string('lng').notNullable();
    table.string('image').notNullable();
    table.text('guidance').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('points');
};
