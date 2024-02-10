import express from 'express';
import authController from '../controller/authController';
import handleError from '../middleware/errorMiddleware';


const {signUp,signIn} = authController;

const route = express.Router();

const authRoutes = ()=>{

        route
          .post("/sign-in", signIn, handleError)
          .post("/sign-up", signUp, handleError);
        return route;
}

export default authRoutes;