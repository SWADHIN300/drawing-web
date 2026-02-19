import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SEC } from "./config";
import { middleware } from "./middleware";


const app = express();
app.use(express.json());


app.post("/signup", async (req,res) =>{
    const username = req.body.username;
    const password = req.body.password;

    // try {
    //     await UserModel.create({
    //         username : username,
    //         password : password
    //     })
    //     res.json({
    //         message : "user sign up"
    //     })
    // } catch (error) {
    //      res.status(411).json({
    //         message : "User already exit"
    //      })
    // }
});

app.post("/signin",(req,res)=>{

    const userId = 1;
    const token = jwt.sign({
        userId
    },JWT_SEC)
});

app.post("/room" , middleware ,(req,res)=>{
   
    res.json({
        roomId:123
    })
})


app.listen(3001);