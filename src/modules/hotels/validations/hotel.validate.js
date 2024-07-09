import Joi from 'joi';

export const createHotelSchema = Joi.object({
    body: Joi.object({
        name: Joi.string().trim().min(3).max(500).required(),
        description: Joi.string().trim().min(3).max(500).required(),
        address: Joi.string().trim().min(3).max(500).required(),
        city: Joi.string().trim().min(3).max(500).required(),
        country: Joi.string().trim().min(3).max(500).required(),
        phone_number: Joi.string().trim().min(3).max(500).required(),
        email: Joi.string().trim().min(3).max(500).email().required(),
        price: Joi.number().required(),
        rating: Joi.number().min(0).max(5).optional(),
    }),
});

export const updateHotelSchema = Joi.object({
    body: Joi.object({
        name: Joi.string().trim().min(3).max(500).optional(),
        description: Joi.string().trim().min(3).max(500).optional(),
        address: Joi.string().trim().min(3).max(500).optional(),
        city: Joi.string().trim().min(3).max(500).optional(),
        country: Joi.string().trim().min(3).max(500).optional(),
        phone_number: Joi.string().trim().min(3).max(500).optional(),
        email: Joi.string().trim().min(3).max(500).email().optional(),
        price: Joi.number().optional(),
        rating: Joi.number().min(0).max(5).optional(),
    }),
});

export const getHotelSchema = Joi.object({
    body: Joi.object({}),
});

export const deleteHotelSchema = Joi.object({
    body: Joi.object({}),
});
