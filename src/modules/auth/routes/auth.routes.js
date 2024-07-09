import { Router } from "express";
import { validate } from "../../../middlewares/validation.js";
import { signup, signin } from "../controllers/auth.controller.js";
import { signupVal, signinVal } from "../validations/auth.validate.js";

const authRouter = Router();

authRouter
  .post("/signup", validate(signupVal), signup)
  .post("/signin", validate(signinVal), signin)

export default authRouter;
