import {Request, Response, NextFunction} from 'express';
import { verify } from 'jsonwebtoken';


export class Protect{
    async execute(req:Request,res:Response,next:NextFunction){
        // 1) Get token from req.params
        const data = req.headers.authorization;
        
        if(!data){
            return res.status(500).json({
                message:'Please, login with a valid user!'
            });
        }
        const token = data.split(' ')[1];

        // 2) Validate token
        try{
            const decoded = await verify(token,process.env.JWT_SECRET);
            req.user = decoded;
            next();
        }
        // 3) Handle success/fail try
        catch(err){
            return res.status(403).json({
                message:'Token invalid',
                err: err.message
            })
        }
    }
}