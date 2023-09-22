import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { connectDB } from './database/db.js';
import router from './routes/router.js';
import { initializeDefaultRoles } from './models/Role.js';
dotenv.config();

const index = express();

index.use(express.json());
index.use(router)

const PORT = process.env.PORT || 4000;

index.listen(PORT, ()=>{
    connectDB();
    initializeDefaultRoles();
    console.log(`servidor corriendo en http://localhost:${PORT}`);
});
