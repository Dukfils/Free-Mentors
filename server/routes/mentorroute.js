import express from 'express';
import userController from '../controllers/usercontroller';
import mentor from '../middleware/mentorvalidation';
import mentorsControllers from '../controllers/mentorControllers';

const mentorsRoute = express.Router();


// eslint-disable-next-line new-cap
const user_Controller = new userController();


//mentorsRoute.patch('/user/:userId', mentor, user_Controller.mentorController);


mentorsRoute.get('/', mentorsControllers.getAllMentors);
mentorsRoute.get('/:id', mentorsControllers.getSpecificMentor);
mentorsRoute.patch('/:id', mentorsControllers.ChangeMentorRole);

export default mentorsRoute;
