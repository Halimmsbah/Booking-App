import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import catchAsyncError from '../../../utils/error.handler.js'
import AppError from '../../../utils/error.handler.js'
import userModel from '../../users/model/user.model.js'

const signup = async (req, res) => {
	let user = new userModel(req.body)
	user.password = bcrypt.hashSync(user.password, 8)
	await user.save()
	let token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_KEY)
	res.json({ message: 'Signed up successfully', token})
}

const signin = catchAsyncError(async (req, res, next) => {
	let user = await userModel.findOne({ email: req.body.email })
	if (user && bcrypt.compareSync(req.body.password, user.password)) {
		let token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_KEY)
		res.json({ message: 'Signed in successfully', token })
	}
	next(new AppError('Invalid credentials', 408))
})

const protectedRoutes = catchAsyncError(async (req, res, next) => {
	let { token } = req.headers

	//1- token exist or not
	if (!token) return next(new AppError('token not exist', 401))

	//2- verify token
	let decoded = jwt.verify(token, process.env.JWT_KEY)
	console.log(decoded)

	//3-userId -> exist or not
	let user = await userModel.findById(decoded.userId)
	if (!user) return next(new AppError('user not found', 401))

	if (user.passwordChanghedAt) {
		let time = parseInt(user?.passwordChanghedAt.getTime() / 1000)
		console.log(time + '|' + decoded.iat)
		if (time > decoded.iat) return next(new AppError('invaild token...login again', 404))
	}
	req.user = user
	next()
})

const allowedTo = (...roles) => {
	return catchAsyncError(async (req, res, next) => {
		if (!roles.includes(req.user.role))
			return next(new AppError('you are not authorized', 401))
		next()
	})
}
export { signup, signin, protectedRoutes, allowedTo }