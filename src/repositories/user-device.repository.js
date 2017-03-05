"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
require("rxjs/Rx");
const Knex = require("knex");
const knexConfig = require("../../knexfile");
const knex = Knex(knexConfig[process.env.NODE_ENV || 'development']);
const USER_DEVICE_TABLE = 'join_user-device';
class UserDeviceRepository {
    getUserJoins(userId) {
        return Observable_1.Observable.fromPromise(knex(USER_DEVICE_TABLE).where({ user_id: userId }));
    }
    getDeviceJoins(deviceId) {
        return Observable_1.Observable.fromPromise(knex(USER_DEVICE_TABLE).where({ device_id: deviceId }));
    }
}
exports.UserDeviceRepository = UserDeviceRepository;
exports.default = new UserDeviceRepository();
