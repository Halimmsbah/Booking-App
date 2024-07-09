import Joi from "joi";

export const addUserVal= Joi.object({
    name: Joi.string().min(2).max(30).required(),
	email: Joi.string().email().required(),
	password: Joi.string().pattern(/^[A-Z][a-z0-9A-Z]{8,}$/).required(),
	role:Joi.string().valid('user','admin')


})

export const paramsIdVal= Joi.object({
    id:Joi.string().hex().length(24).required()
})

export const updateUserVal= Joi.object({
    id:Joi.string().hex().length(24).required(),
    name: Joi.string().min(2).max(30),
	email: Joi.string().email(),
	password: Joi.string().pattern(/^[A-Z][a-z0-9A-Z]{8,}$/),
    role:Joi.string().valid('user','admin')
})