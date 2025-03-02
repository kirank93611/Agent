import express from "express"

export const routes=express.Router();
import { signinmiddle } from '../routes/signinrtr.js';
import { createuser } from '../routes/signuprtr.js';

routes.post("/signin",signinmiddle);
routes.post('/signup',createuser)

