import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/planetsRoute.js';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use('/planets', router);

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log('App connected to the database');
        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.error('Database connection error:', error);
    });