import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors'
import connectDB from './config/db.js';

dotenv.config()

connectDB()
 
const app = express();


const PORT = process.env.PORT || 8040

app.listen(PORT, () => {
    console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
});