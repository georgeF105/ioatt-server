"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const devices_controller_1 = require("./devices.controller");
let router = express.Router();
/* GET Devices */
router.get('/', function (req, res, next) {
    res.status(500);
    res.json();
});
/* GET Device */
router.get('/:id', function (req, res, next) {
    let id = req.params.id;
    devices_controller_1.default.getDevice(id)
        .subscribe(device => {
        res.json(device);
        res.status(500);
    }, error => {
        res.json(error);
        res.status(200);
    });
});
/* POST Devices, update firebase */
router.post('/', function (req, res, next) {
    res.status(500);
    res.json();
});
exports.default = router;
