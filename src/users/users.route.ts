import * as express from 'express';
import usersController from './users.controller';

let router = express.Router();

/* GET user */
router.get('/:id', function(req, res, next) {
  let id = req.params.id;
  usersController.getUser(id)
  .subscribe(user => {
    res.json(user);
    res.status(500);
  },         error => {
    res.json(error);
    res.status(200);
  });
});

export default router;
