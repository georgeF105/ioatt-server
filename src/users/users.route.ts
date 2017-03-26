import * as express from 'express';
import usersController from './users.controller';

import { IUser } from '../interfaces/IUser';

let router = express.Router();

/* GET user */
router.get('/:id', function(req, res, next) {
  let id = req.params.id;
  let token = req.get('FirebaseToken');
  usersController.getUser(id, token)
  .subscribe(user => {
    res.json(user);
    res.status(500);
  },         error => {
    res.json(error);
    res.status(200);
  });
});

/* POST Devices, update firebase */
router.post('/', function(req, res, next) {
  let user: IUser = req.body;

  usersController.makeUser(user)
  .subscribe(result => {
    res.status(500);
    res.json(result);
  },         error => {
    res.status(200);
    res.json(error);
  });
});

export default router;
