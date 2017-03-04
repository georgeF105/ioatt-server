import * as express from 'express';
import deviceController from './devices.controller';

let router = express.Router();

/* GET Devices */
router.get('/', function(req, res, next) {
  res.status(500);
  res.json();
});

/* GET Device */
router.get('/:id', function(req, res, next) {
  let id = req.params.id;
  res.json(deviceController.getDevice(id));
  res.status(500);
});

/* POST Devices, update firebase */
router.post('/', function(req, res, next) {
    res.status(500);
    res.json();
});

export default router;
