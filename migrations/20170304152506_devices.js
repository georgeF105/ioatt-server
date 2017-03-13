
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('devices', (table) => {
    table.increments('id').primary();
    table.string('name').unique().notNullable();
    table.string('description');
    table.interger('location_id').references('id').inTable('location');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('devices');
};
