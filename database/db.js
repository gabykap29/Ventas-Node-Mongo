import mongoose, { mongo } from "mongoose";

const MONGOURL = 'mongodb://127.0.0.1:27017/test';

export const connectDB = async ()=>{
    try {
        await mongoose.connect(MONGOURL);
    console.log('Base de datos conectada!');
    } catch (error) {
        console.log(error);
    }
}