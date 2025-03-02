import express from "express"
import jsonwebtoken from "jsonwebtoken"
import bcrypt from "bcrypt"
import { PrismaClient } from "@prisma/client"
const prisma=new PrismaClient()

export const signinmiddle=async (req,res)=>{
    try{
        const {name,password}=req.body
        const userExists=await prisma.user.findFirst({
            where:{name:name},
        })
        if(!userExists){
            return res.status(404).json('user not found');
        }
        console.log(userExists)
        //verifying the password
        // const passwordValid=await bcrypt.compare(password,userExists.password)
        // if(!passwordValid){
        //     return res.status(404).json(`Incorrect email or password combination used please validate this on your end!`)
        // }

        //issuing JWT token
        const token =jsonwebtoken.sign({name:userExists.name},process.env.privateKey,{expiresIn:'5h'})
        res.status(200).send({name:userExists.name,accessToken:token})
    } catch(err){
        res.status(500).json({message:`Something went wrong Please try again guru!`})
        console.log(err)
    }
}