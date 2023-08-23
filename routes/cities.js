import express from 'express';
import create from '../controllers/cities/create.js';
import read from '../controllers/cities/read.js';
import update from '../controllers/cities/update.js';
import readOne from '../controllers/cities/readOne.js';
import destroy from '../controllers/cities/destroy.js';
import carrusel from '../controllers/cities/carrusel.js';


let router = express.Router();

//CREATE 
router.post('/', create)


//READ
router.get('/', read)
router.get('/carrusel', carrusel)
router.get('/:city_id', readOne)

//UPDATE
router.put('/:u_id', update)

//DESTROY
router.delete('/:id', destroy)

export default router;
