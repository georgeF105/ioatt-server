"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
require("rxjs/Rx");
const Knex = require("knex");
const knexConfig = require("../../knexfile");
const _knex = Knex(knexConfig[process.env.NODE_ENV || 'development']);
const DEVICE_TABLE = 'devices';
class DeviceRepository {
    constructor(knex) {
        this.knex = knex;
    }
    getDevice(id) {
        return Observable_1.Observable.fromPromise(this.knex(DEVICE_TABLE).where({ id }))
            .map(device => {
            return device[0];
        });
    }
}
exports.DeviceRepository = DeviceRepository;
exports.default = new DeviceRepository(_knex);
