import dotenv from "dotenv"
import connectDB from "./dbconnect/index.js";
import { app } from "./app.js";




connectDB().then(
app.listen(process.env.PORT||5000,()=>{
    console.log(`Server is running at port ${process.env.PORT}`)
})

).catch((err)=>{
    console.log("Mongo Db Connecition Failed",err)
})
