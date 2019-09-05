/* eslint-disable no-undef */
import express from 'express';
import sessionsControllers from '../controllers/sessionControllers';

const sessionRoute = express.Router();


// eslint-disable-next-line new-cap


// const user_Controllerses = new userController();

sessionRoute.get('/', sessionsControllers.getAllSessions);
sessionRoute.post('/', sessionsControllers.createSession);
sessionRoute.patch('/sessions/:id/accept', sessionsControllers.ApproveSession);
sessionRoute.patch('/sessions/:id/reject', sessionsControllers.rejectSession);


export default sessionRoute;
