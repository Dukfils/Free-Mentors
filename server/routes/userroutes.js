import express from 'express';
import userController from '../controllers/usercontroller';

const userRoute = express.Router();


// eslint-disable-next-line new-cap
const user_Controller = new userController();

userRoute.post('/signup', user_Controller.signUpControll);
userRoute.post('/signin', user_Controller.signIn);

export default userRoute;
