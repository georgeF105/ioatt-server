
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('sensors', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.integer('device_id').references('id').inTable('devices');
    table.string('type');
    table.string('value');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('sensors');
};
