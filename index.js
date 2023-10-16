import  express  from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";

dotenv.config() 
const app = express();

mongoose.connect(process.env.URL).then(()=>{
    console.log("conacted for DB");
}).catch((err) =>{
    console.log(err);
})




app.listen(3000 , ()=>{
    console.log("conacted");
})
