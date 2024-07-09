import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        minLength: 3,
        maxLength: 500,
        required: true,
    },
    description: {
        type: String,
        trim: true,
        minLength: 3,
        maxLength: 500,
        required: true,
    },
    address: {
        type: String,
        trim: true,
        minLength: 3,
        maxLength: 500, 
        required: true, 
    },
    city: {
        type: String,
        trim: true,
        minLength: 3,
        maxLength: 500,
        required: true,
    },
    country: {
        type: String,
        trim: true,
        minLength: 3,
        maxLength: 500,
        required: true,
    },
    phone_number: {
        type: String,
        trim: true,
        minLength: 3,
        maxLength: 500,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        minLength: 3,
        maxLength: 500,
        required: true,
    },
    price: {
        type: Number,
        trim: true,
        minLength: 3,
        maxLength: 500,
        required: true,
    },
    profile_image: {
        type: mongoose.Schema.Types.ObjectId,
        reference: "image",
    },
    images: [
        {
            type: mongoose.Schema.Types.ObjectId,
            reference: "image",
        },
    ],
    rooms: [
        {
            type: mongoose.Schema.Types.ObjectId,
            reference: "room",
        },
    ],
    reviews: [
        {       
            type: mongoose.Schema.Types.ObjectId,
            reference: "review",    
        },
    ],
    rating: {
        type: Number,
        trim: true,
        minLength: 0,
        maxLength: 5,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

const hotelModel = mongoose.model("hotel", HotelSchema);

export default hotelModel;