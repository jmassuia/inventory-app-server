import { AuthenticateServices, User } from "../services/AuthenticateServices";
import {Request, Response} from 'express';
import { sign } from "jsonwebtoken";


export class AuthController{
    async login(req:Request,res:Response){
        try{
        //1) Get user information from request body;
        const user:User = req.body;

        //2) Check if password is correct
        const service = new AuthenticateServices

        const checkPassword = await service.handleLogin(user);

        if(!checkPassword) return res.status(401).json({message:"Invalid Password"});
        
        //3) Generate JWT token
        const signToken = sign({email:user.email},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRE})
        
        // req.token = signToken;
        
        return res.status(200).json({
                data:signToken
            });
        }
        catch(err){
            console.log(err)
            return res.status(501).json({
                message:'Something went wrong, please contact your support!!'
            })
        }
    }   
}