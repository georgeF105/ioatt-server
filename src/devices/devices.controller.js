"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const devices_service_1 = require("../services/devices.service");
class DeviceController {
    constructor(deviceService) {
        this.deviceService = deviceService;
    }
    getDevice(id) {
        return this.deviceService.getDevice(id);
    }
    ;
}
exports.DeviceController = DeviceController;
exports.default = new DeviceController(devices_service_1.default);
