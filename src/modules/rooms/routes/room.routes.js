import { Router } from "express";
import { validate } from "../../../middlewares/validation.js";
import { addRoom, deleteRoom, getAllRoom, getRoomById, updateRoom } from "../controllers/room.controller.js";
import { addRoomVal, paramsIdVal, updateRoomVal } from "../validations/room.validate.js";

const roomRouter = Router();

roomRouter  
.post("/:hotelid",validate(addRoomVal),addRoom)

roomRouter
.route("/")
.get(getAllRoom)
.put(validate(updateRoomVal),updateRoom)
.delete(deleteRoom);

roomRouter.route("/:id").get(validate(paramsIdVal),getRoomById).delete(deleteRoom);

export default roomRouter

