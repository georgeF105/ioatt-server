"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_device_repository_1 = require("../repositories/user-device.repository");
class UserDeviceService {
    constructor(userDeviceRepository) {
        this.userDeviceRepository = userDeviceRepository;
    }
    getUsersDeviceIds(id) {
        return this.userDeviceRepository.getUserJoins(id)
            .map(joins => {
            return joins.map(join => join.device_id);
        });
    }
}
exports.UserDeviceService = UserDeviceService;
exports.default = new UserDeviceService(user_device_repository_1.default);
