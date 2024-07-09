import mongoose from "mongoose";
const schema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
    },
    price: {
        type: String,
        trim: true,
        required: true,
    },
    description: {
        type: String,
        trim: true,
        required: true,
    },
    maxPeople: {
        type: Number,
        required: true,
    },
    roomNumber: {
        type: Number,
        required: true,
        unavailableDates: {
            type: [Date],
        }
    },
}, { timestamps: true })

const roomModel = mongoose.model('room', schema)

export default roomModel