import { Router } from "express";
import { validate } from "../../../middlewares/validation.js"; 
import { addUser, getAllUser, getSingleUser, updateUser } from "../controllers/user.controller.js";
import { addUserVal, paramsIdVal, updateUserVal } from "../validations/user.validation.js";

const userRouter=Router()

userRouter
.route('/')
.post(validate(addUserVal),addUser)
.get(getAllUser)

userRouter
.route('/:id')
.get(validate(paramsIdVal),getSingleUser)
.put(validate(updateUserVal),updateUser)

export default userRouter