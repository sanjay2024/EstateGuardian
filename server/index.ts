import dbConnect from './database';
import express from 'express';
import expressApp from './expressApp';
import { PORT } from './config/config';


const StartServer = async () => {
        const app = express();

        try {
                dbConnect();
        } catch (error) {
                console.log(error);
        }

        try {
                expressApp(app);
                app.listen(PORT, () => {
                        console.log(`Server is Connected ${PORT}`);
                })
        } catch (error) {
                console.log(error);
        }
}

StartServer();