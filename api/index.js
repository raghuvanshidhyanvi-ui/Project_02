import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();
import userRouter from  "./routes/user.routes.js";
import authRouter from "./routes/auth.route.js"



mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected too mongo DB!");
}).catch((err) =>{
    console.log(err);
})





const app = express();

app.use(express.json());


app.listen(3000, () => {
    console.log("server is running on port 3000 !");
}
);

app.use("/api/user", userRouter);
app.use("/api/auth" ,authRouter);


app.get('/test' , (req,res)=>{
    res.json({
    message :"Hello world !",
    })
})