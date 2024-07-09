import {AppError }from "../../../utils/error.handler.js"
import jwt from 'jsonwebtoken'
import userModel from "../users/user.model.js";
import catchAsyncError from "../../../utils/error.handler.js"

export const assertUniqueEmail=catchAsyncError(async (req,res,next)=>{
	const { email } = req.body
	const user = await userModel.findOne({ email })
	if (user) throw new AppError('This email is already taken', 400)
	next()
})

export const authenticate=catchAsyncError(async (req,res,next)=>{
    const token=req.header('token')
    if(!token || !token.startsWith('Bearer'))
    throw new AppError('token not founded or it is in false form',401)
    
    const brToken=token.split(' ')[1]
    try{
        const decoded=jwt.verify(brToken,process.env.SECRET)
        req.user=decoded
        next()
    }catch(error)
    {
        throw new AppError(error.message, 498)
    }
})

export const authorize = (role) => {
	return (req, res, next) => {
		if (role !== req.user.role) throw new AppError('Forbiddafsdsden', 403)
		next()
	}
}