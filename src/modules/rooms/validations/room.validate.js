import Joi from "joi";

export const addRoomVal = Joi.object({
  hotelid: Joi.string().hex().length(24).required(),
  title: Joi.string().trim().min(3).max(500).required(),
  price: Joi.string().trim().min(3).max(500).required(),
  description: Joi.string().trim().min(3).max(500).required(),
  maxPeople: Joi.number().required(),
  roomNumber: Joi.number().required(),
});

export const updateRoomVal = Joi.object({
  title: Joi.string().trim().min(3).max(500).optional(),
  price: Joi.string().trim().min(3).max(500).optional(),
  description: Joi.string().trim().min(3).max(500).optional(),
  maxPeople: Joi.number().optional(),
  roomNumber: Joi.number().optional(),
});

export const paramsIdVal = Joi.object({
  id: Joi.string().hex().length(24).required(),
});
