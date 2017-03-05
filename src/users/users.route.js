"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const users_controller_1 = require("./users.controller");
let router = express.Router();
/* GET user */
router.get('/:id', function (req, res, next) {
    let id = req.params.id;
    users_controller_1.default.getUser(id)
        .subscribe(user => {
        res.json(user);
        res.status(500);
    }, error => {
        res.json(error);
        res.status(200);
    });
});
exports.default = router;
