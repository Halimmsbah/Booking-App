import roomModel from "../model/room.model.js";
import hotelModel from "../../hotels/model/hotel.model.js";
import catchAsyncError from "../../../utils/error.handler.js";


const addRoom = catchAsyncError( async (req, res, next) => {
    const hotelid = req.params.hotelid
    let room = new roomModel(req.body)
    await room.save()
    await hotelModel.findByIdAndUpdate(hotelid, { $push: { rooms: room } })
    res.json({ message: "success", room: { title: room.title, price: room.price } })
})

const getAllRoom = catchAsyncError( async (req, res, next) => {
    let rooms = await roomModel.find()
    !rooms && res.status(404).json({ message: 'room not found' })
    rooms && res.json({ message: "success", rooms })
})

export const getRoomById = catchAsyncError(async (req, res) => {
    const room = await roomModel.findById(req.params.id);
    if (!room) {
        return res.status(404).json({ message: 'Room not found' });
    }
    res.status(200).json(Room);
});

export const updateRoom = catchAsyncError(async (req, res) => {
    const updatedRoom = await roomModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedRoom) {
        return res.status(404).json({ message: 'Room not found' });
    }
    res.status(200).json(updatedRoom);
});

export const deleteRoom = catchAsyncError(async (req, res) => {
    const deletedRoom = await roomModel.findByIdAndDelete(req.params.id);
    if (!deletedRoom) {
        return res.status(404).json({ message: 'Room not found' });
    }
    res.status(200).json({ message: 'Room deleted successfully' });
});


export { addRoom, getAllRoom }