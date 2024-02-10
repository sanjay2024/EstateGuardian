import mongoose from 'mongoose'
import { MONGO_URL } from '../config/config';

const dbConnect = () => {
  mongoose
    .connect(
      MONGO_URL)
    .then(() => {
      console.log("Connection Established");
    })
};

export default dbConnect;
