import {PrismaClient} from '@prisma/client';
import {compare} from 'bcrypt';

const prisma = new PrismaClient();

//Define User typo
export interface User{
    email: string
    password: string
}

export class AuthenticateServices{
    async handleLogin(user:User){

        //1) Find a client with a valid email
        const client = await prisma.client.findUnique({
            where:{
                email:user.email
            }
        });

        //2) Get encrypted key from database
        const encryptedPassword = client.password;

        //3) verify if the password inputed matches with the hashed one on database
        const isPasswordCorrect = await compare(user.password,encryptedPassword);

        if(isPasswordCorrect){
            return isPasswordCorrect
        }

        return false;
    }
}

