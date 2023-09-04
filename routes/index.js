import express from 'express';
import usersRouter from './users.js';
import citiesRouter from './cities.js';
import itinerariesRouter from './itineraries.js'

let router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.use('/users', usersRouter);
router.use('/cities',citiesRouter);
router.use('/itineraries',itinerariesRouter);

export default router
