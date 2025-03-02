import express from "express"
import jsonwebtoken from "jsonwebtoken"
import bcrypt from "bcrypt"
import { PrismaClient } from '@prisma/client'

const prisma=new PrismaClient()

//User registration
export const createuser=async (req,res)=>{
    const {name,password}=req.body;

    try {
        const user=await prisma.user.create({
            data:{
                name:req.body.name,
                password: await bcrypt.hash(password, 15),
        },
    include:{
        agents:true,
    },
})

        if(!user){
            return res.status(400).json({message:"Please try again,user not created!"})
        }
        console.log(user);
        if(user){
        var jwt=jsonwebtoken;
        const pkey=process.env.privateKey
        var token=jwt.sign({password},pkey)

        return res.status(200).json({message:`user has been created with name: ${user.name} ${user.id}, ${token}`});
        }


    } catch(err){
        console.error("Error creating user:",err)
        res.status(500).json({message:"something went wrong Please try Again!",payload:`${user}`});
    }
}
