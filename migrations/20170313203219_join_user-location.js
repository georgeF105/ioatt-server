
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('join_user-location', (table) => {
    table.increments('id').primary();
    table.integer('user_id').references('id').inTable('users');
    table.integer('location_id').references('id').inTable('locations');
    table.string('access_level');
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('join_user-location');
};
