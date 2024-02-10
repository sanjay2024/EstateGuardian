import User from './../database/models/user';
import { NextFunction, Request,Response } from 'express';
import bcrypt from 'bcrypt';
import jwt  from 'jsonwebtoken';
import { SECRET_KEY } from '../config/config';

const signUp =async (req:Request,res:Response,next:NextFunction) => {
        const {name,email,password} = req.body;
        console.log(name,email);
        try {
                const getUser  =  await User.findOne({
                        email:email
                })

                
                if(getUser){
                        return res.status(401).json({
                                message:`user is already existed with is email ${email}`
                        })
                }
        
                const userCreated  = await User.create({
                        email:email,
                        password: await bcrypt.hash(password,5)
                })

                if(userCreated){
                        res.status(201).json({
                                message:`sign-up successfull`
                        })
                }

        } catch (error) {
                next(error);
        }
};

const signIn = async(req:Request,res:Response)=>{
        const {email,password} =  req.body;
        try {

                if(!email){
                        return res.status(404).json({
                                message:"please enter the email"
                        })
                }
                if(!password){
                        return res.status(404).json({
                          message: "please enter the password",
                        });
                }
                const getUser:any = await User.findOne({
                        email:email
                })

                if(!email){
                        res.status(404).json(`email doesn't exsist`);
                }
                const hashedPassword:string = getUser.password;
                const verifyPassword = await bcrypt.compare(password, hashedPassword);

                if(!verifyPassword){
                        res.status(401).json("password incorrect");
                        return;
                }

                const token = await jwt.sign(
                  {
                    id: getUser.id,
                  },
                  SECRET_KEY,
                  {
                        expiresIn:'24h'
                  }
                );

                res.setHeader('Authorization',`Bearer ${token}`);

                res.status(200).json(`LogIn successfull`);

        } catch (error) {
                res.status(500).json({
                        error:error
                })
        }
}

export default {signUp,signIn};