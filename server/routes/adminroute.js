import express from 'express';
// import userController from '../controllers/usercontroller';
// import admin from '../middleware/adminvalidator';

const adminRoute = express.Router();


// eslint-disable-next-line new-cap
// const user_Controller = new userController();


adminRoute.patch('/user/:userId');

export default adminRoute;
