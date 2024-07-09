import { Router } from "express";
import {
  getHotels,
  getHotelById,
  createHotel,
  updateHotel,
  deleteHotel,
} from "../controllers/hotel.controller.js";
import { validate } from "../../../middlewares/validation.js";
import { createHotelSchema, deleteHotelSchema, getHotelSchema, updateHotelSchema } from "../validations/hotel.validate.js";
const hotelRouter = Router();

hotelRouter
  .route("/")
  .post(validate(createHotelSchema), createHotel)
  .get(getHotels)
  .put(validate(updateHotelSchema),updateHotel)
  .delete(validate(deleteHotelSchema),deleteHotel);

hotelRouter.route("/:id").get(validate(getHotelSchema),getHotelById);
export default hotelRouter;
