"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
require("rxjs/Rx");
const Knex = require("knex");
const knexConfig = require("../../knexfile");
const knex = Knex(knexConfig[process.env.NODE_ENV || 'development']);
const USERS_TABLE = 'users';
class UserRepository {
    getUser(id) {
        return Observable_1.Observable.fromPromise(knex(USERS_TABLE).where({ id }))
            .map(user => {
            return user[0];
        });
    }
}
exports.UserRepository = UserRepository;
exports.default = new UserRepository();
