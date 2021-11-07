import {Request,Response, NextFunction} from 'express';


class RestrictTo{ 
   execute(...roles){
        return (req:Request,res:Response,next:NextFunction)=>{
            console.log(roles)
           if(!roles.includes(req.user.role)){
               return next('Voce nao tem acesso para esta operação');
           }
           next();
        } 
    }
}

export {RestrictTo}