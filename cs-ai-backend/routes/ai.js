import express from "express";
import {aiAgentController} from "../controllers/aiAgentController";

const router = express.Router();

router.post("/create-agent", aiAgentController.createAgent);

export default router;