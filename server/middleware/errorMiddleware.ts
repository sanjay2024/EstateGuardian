import { NextFunction, Request,Response } from "express";

const handleError = async(err:any,req:Request,res:Response,next:NextFunction)=>{
     const statusCode:number = err.statusCode || 500;
     const message:string =err.message || "Internal Server Error";

     return res.status(statusCode).json({
          success:false,
          statusCode,
          message
     })
}

export default handleError;