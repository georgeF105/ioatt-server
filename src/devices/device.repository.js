"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
require("rxjs/Rx");
const Knex = require("knex");
const knexfile_1 = require("../knexfile");
const knex = Knex(knexfile_1.default[process.env.NODE_ENV || 'development']);
const DEVICE_TABLE = 'devices';
class DeviceRepository {
    getDevice(id) {
        return Observable_1.Observable.fromPromise(knex(DEVICE_TABLE).where({ id }))
            .map(device => {
            return device[0];
        });
    }
}
exports.DeviceRepository = DeviceRepository;
exports.default = new DeviceRepository();
