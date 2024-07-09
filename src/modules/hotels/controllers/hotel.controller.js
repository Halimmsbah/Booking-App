import hotelModel from "../model/hotel.model.js";
import catchAsyncError from "../../../utils/error.handler.js";

// Get all hotels
export const getHotels = catchAsyncError(async (req, res) => {
    const hotels = await hotelModel.find();
    res.status(200).json({message: "success", hotels});
});

// Get a single hotel by ID
export const getHotelById = catchAsyncError(async (req, res) => {
    const hotel = await hotelModel.findById(req.params.id);
    if (!hotel) {
        return res.status(404).json({ message: 'Hotel not found' });
    }
    res.status(200).json(hotel);
});

// Create a new hotel
export const createHotel = catchAsyncError(async (req, res) => {
    const hotel = new hotelModel(req.body);
    const savedHotel = await hotel.save();
    res.status(201).json(savedHotel);
});

// Update an existing hotel
export const updateHotel = catchAsyncError(async (req, res) => {
    const updatedHotel = await hotelModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedHotel) {
        return res.status(404).json({ message: 'Hotel not found' });
    }
    res.status(200).json(updatedHotel);
});

// Delete a hotel
export const deleteHotel = catchAsyncError(async (req, res) => {
    const deletedHotel = await hotelModel.findByIdAndDelete(req.params.id);
    if (!deletedHotel) {
        return res.status(404).json({ message: 'Hotel not found' });
    }
    res.status(200).json({ message: 'Hotel deleted successfully' });
});
