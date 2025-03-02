import express from "express"
import {routes} from "../routes/router.js"
import { PrismaClient } from "@prisma/client";
const app=express();
app.use(express.json())
const db=new PrismaClient()

const port=8080;

async function connectDB() {
    try{
        await db.$connect();
        console.log("[database]:connected");
    } catch(err){
        console.log("[database]: connection error: ", err);
     await db.$disconnect();
    }
}

connectDB();
app.use('/api',routes)



app.listen(port,()=>{
    console.log(`Server running at localhost:${port}`)
})