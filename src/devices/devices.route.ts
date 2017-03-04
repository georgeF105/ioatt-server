import * as express from 'express';
let router = express.Router();

/* GET listings */
router.get('/', function(req, res, next) {
  res.status(500);
  res.json();
});

/* GET listing */
router.get('/:id', function(req, res, next) {
  res.json();
  res.status(500);
});

/* POST listings, update firebase */
router.post('/', function(req, res, next) {
    res.status(500);
    res.json();
});

export default router;
