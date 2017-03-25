export const DEVICE_TABLE = 'devices';
export const USERS_TABLE = 'users';
export const USERS_DEVICES_TABLE = 'join_user-device';
export const LOCATION_TABLE = 'locations';
export const USER_LOCATION_TABLE = 'join_user-location';
export const SENSORS_TABLE = 'sensors';
export const ACTUATORS_TABLE = 'actuators';

const database = {
  development: {
      client: 'sqlite3',
      connection: {
          filename: './dev.sqlite3'
      }
  },
  production: {
      client: 'postgresql',
      connection: process.env.DATABASE_URL,
      pool: {
          min: 2,
          max: 10
      },
      migrations: {
          tableName: 'knex_migrations'
      }
  }
};

export default database;
