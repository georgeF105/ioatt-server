
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sensors').del()
    .then(function () {
      // Inserts seed entries
      return knex('sensors').insert([
        {id: 1, name: 'sensor-1', device_id: 1, value: '19.5', type: 'temprature'},
        {id: 2, name: 'sensor-2', device_id: 1, value: '55%', type: 'humidity'},
        {id: 3, name: 'sensor-3', device_id: 2, value: '12.3', type: 'temprature'},
        {id: 4, name: 'sensor-4', device_id: 2, value: '60%', type: 'humidity'},
        {id: 5, name: 'sensor-5', device_id: 3, value: '21.0', type: 'temprature'}
      ]);
    });
};
