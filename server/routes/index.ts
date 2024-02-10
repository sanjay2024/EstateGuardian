import authRoutes from "./authRoutes";
import {Express} from 'express';

const Routes = (app:Express)=>{
        app.use('/api/auth',authRoutes());
}

export default Routes; 