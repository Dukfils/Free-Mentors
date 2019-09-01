/* eslint-disable no-undef */
import express from 'express';
import sessionsControllers from '../controllers/sessionControllers';

const sessionRoute = express.Router();


// eslint-disable-next-line new-cap


// const user_Controllerses = new userController();

sessionRoute.get('/', sessionsControllers.getAllSessions);
sessionRoute.post('/', sessionsControllers.createSession);
sessionRoute.patch('/:id', sessionsControllers.ApproveSession);

export default sessionRoute;
