import { Router } from "express";
import hotelRouter from "../modules/hotels/routes/hotel.routes.js";
import authRouter from "../modules/auth/routes/auth.routes.js";
import userRouter from "../modules/users/routes/user.routes.js";
import roomRouter from "../modules/rooms/routes/room.routes.js";

const router = Router();

router.use('/hotels', hotelRouter)
router.use('/auths', authRouter)
router.use('/users', userRouter)
router.use('/rooms', roomRouter)

export default router;
