import { z } from "zod";

export const CreateuserSchema = z.object({
    username :z.string().min(4).max(25),
    password : z.string(),
    name : z.string()
});

export const SigninSchema = z.object({
    usename : z.string().min(4).max(25),
    password : z.string() 
});

export const CreateRoomSchema = z.object({
    name : z.string()
})