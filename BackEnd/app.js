import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { errorMiddleware } from './src/middleware/errorMiddleware.js';

const app = express();

app.use(cors({
    origin: `http://localhost:5173`,
    credentials: true
}));

app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({extended: true, limit: '10mb'}));
app.use(cookieParser());

// router import
import { router } from './src/router/router.js';
// import { errorMiddleware } from './src/middleware/errorMiddleware.js';

// route declaretions
app.use('/ecommerce/v1', router);

// Error middleware
app.use(errorMiddleware);

export {app}