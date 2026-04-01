import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SEC } from "@repo/backend-common";

declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}

export function middleware(req:Request,res: Response,next:NextFunction){
    const token = req.headers["authorization"] ?? " " ;
    
    const decoded = jwt.verify(token,JWT_SEC) as any;

    if(decoded){
        
        req.userId = decoded.userId;
        next();
    }else{
        res.status(403).json({
            messsage:"unAuthorized"
        })
    }

}