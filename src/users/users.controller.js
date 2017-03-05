"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_service_1 = require("../services/users.service");
class UsersController {
    constructor(userService) {
        this.userService = userService;
    }
    getUser(id) {
        return this.userService.getUser(id);
    }
    ;
}
exports.UsersController = UsersController;
exports.default = new UsersController(users_service_1.default);
