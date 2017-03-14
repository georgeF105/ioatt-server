
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actuators').del()
    .then(function () {
      // Inserts seed entries
      return knex('actuators').insert([
        {id: 1, name: 'actuator-1', device_id: 1, value: 'on', type: 'switch'},
        {id: 2, name: 'actuator-2', device_id: 1, value: '0', type: 'light'},
        {id: 3, name: 'actuator-3', device_id: 2, value: 'off', type: 'switch'},
        {id: 4, name: 'actuator-4', device_id: 2, value: '255', type: 'light'},
        {id: 5, name: 'actuator-5', device_id: 3, value: 'off', type: 'switch'}
      ]);
    });
};
