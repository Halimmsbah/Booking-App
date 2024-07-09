import catchAsyncError from "../../../utils/error.handler.js"
import userModel from "../model/user.model.js"



const addUser = catchAsyncError(async (req, res, next) => {
    let user = new userModel(req.body)
    await user.save()
    res.json({ message: "success", user: { name: user.name, email: user.email } })
})

const getAllUser = catchAsyncError(async (req, res, next) => {
    let users = await userModel.find()
    !users && res.status(404).json({ message: 'user not found' })
    users && res.json({ message: "success",users })
})

const getSingleUser = catchAsyncError(async (req, res, next) => {
    let user = await userModel.findById(req.params.id)
    !user && res.status(404).json({ message: 'user not found' })
    user && res.json({ message: "success", user })
})

const updateUser = catchAsyncError(async (req, res, next) => {

    let user = await userModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    !user && res.status(404).json({ message: 'user not found' })
    user && res.json({ message: "success", user })
})

export {
    addUser, getAllUser, getSingleUser, updateUser
}