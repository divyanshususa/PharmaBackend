import express, { urlencoded } from "express"
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({limit: "16kb"}))

app.use(express.urlencoded({ extended: true, limit: '16kb' }));

app.use(express.static("public"))

app.use(cookieParser());


//routes import
 
import userrouter from './routes/user.routes.js'
import uploadcsv from './routes/UploadData.js'



//routes declaration

app.use('/api/v1/users',userrouter)

app.use('/api/v1/uploadcsv',uploadcsv)



export { app }