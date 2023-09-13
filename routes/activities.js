import { Router } from 'express';
import read from '../controllers/activities/read.js'
import readOne from '../controllers/activities/readOne.js';


const activitiesRouter = Router();

//READ
activitiesRouter.get('/', read)
activitiesRouter.get('/:_id', readOne)

export default activitiesRouter;