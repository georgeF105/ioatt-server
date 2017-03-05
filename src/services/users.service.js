"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
const users_repository_1 = require("../repositories/users.repository");
const user_device_service_1 = require("../services/user-device.service");
const devices_service_1 = require("../services/devices.service");
class UsersService {
    constructor(userRepository, deviceService, userDeviceService) {
        this.userRepository = userRepository;
        this.deviceService = deviceService;
        this.userDeviceService = userDeviceService;
    }
    getUser(id) {
        return this.userRepository.getUser(id)
            .flatMap(user => {
            return this.getUsersDevices(user.id)
                .map(devices => {
                user.devices = devices;
                return user;
            });
        });
    }
    getUsersDevices(userId) {
        return this.userDeviceService.getUsersDeviceIds(userId)
            .flatMap(ids => {
            return Observable_1.Observable.forkJoin(ids.map(id => this.deviceService.getDevice(id)));
        });
    }
}
exports.UsersService = UsersService;
exports.default = new UsersService(users_repository_1.default, devices_service_1.default, user_device_service_1.default);
