import * as dotenv from 'dotenv';

let path = `${__dirname}/../../.env`;

dotenv.config({path});

export const PORT:any = process.env.PORT;

export const MONGO_URL: any = process.env.MONGO_URL;

export const  SECRET_KEY:any = process.env.SECRET_KEY;