import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SEC } from "@repo/backend-common";
import { middleware } from "./middleware";
import { CreateuserSchema,SigninSchema,CreateRoomSchema} from "@repo/common"


const app = express();
app.use(express.json());


app.post("/signup", async (req,res) =>{

    const data = CreateuserSchema.safeParse(req.body);
     if(!data.success){
        res.json({
            message:"incorrect inputs"
        });
        return;
     }
     res.json({
        userId:"123"
     })
});

app.post("/signin",(req,res)=>{
 
    const data = SigninSchema.safeParse(req.body);
    if(!data.success){
        res.json({
            message:"incorrect input"
        });
        return;
    }
     
    const userId = 1;
    const token = jwt.sign({
        userId
    }, JWT_SEC);
    res.json({
        token
    })
});

app.post("/room" , middleware ,(req,res)=>{
    
    const data = CreateRoomSchema.safeParse(req.body);
    if(!data.success){
        res.json({
            messsage:"incorrect input"
        });
    return;
    }
  
    res.json({
        roomId:123
    })
})


app.listen(3001);