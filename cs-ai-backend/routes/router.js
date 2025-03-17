import express from "express"
import { respond, storeConversation, getHistory, scheduleTask } from "../src/controllers/aiController.js";
import { createuser } from './signuprtr.js';

export const routes=express.Router();
import { signinmiddle } from '../routes/signinrtr.js';

routes.post("/signin",signinmiddle);
routes.post('/signup',createuser);

// AI routes
routes.post('/ai/respond', respond);
routes.post('/ai/store-conversation', storeConversation);
routes.get('/ai/get-history/:userId', getHistory);
routes.post('/ai/schedule-task', scheduleTask);

