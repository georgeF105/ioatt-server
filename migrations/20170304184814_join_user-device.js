
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('join_user-device', (table) => {
    table.increments('id').primary();
    table.integer('user_id').references('id').inTable('users')
    table.integer('device_id').references('id').inTable('devices')
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('join_user-device');
};
