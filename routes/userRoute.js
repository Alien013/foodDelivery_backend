import express from "express";
import { loginUser, regisiterUser } from "../controllers.js";

const userRouter = express.Router();

userRouter.post("/register", regisiterUser);
userRouter.post("/login", loginUser);

export default userRouter;
