"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const device_repository_1 = require("../repositories/device.repository");
class DeviceService {
    constructor(deviceRepository) {
        this.deviceRepository = deviceRepository;
    }
    getDevice(id) {
        return this.deviceRepository.getDevice(id);
    }
}
exports.DeviceService = DeviceService;
exports.default = new DeviceService(device_repository_1.default);
