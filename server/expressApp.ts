import express, { Express } from "express";

import cors from 'cors';
import Routes from "./routes";

const expressApp = (app:Express)=>{
         try {
                app.use(express.json());
                app.use(cors());
                Routes(app);
         } catch (error) {
                console.log(error);
         }
}

export default expressApp;