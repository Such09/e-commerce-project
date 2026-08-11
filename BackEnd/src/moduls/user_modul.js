import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    refreshToken: {
        type: String,
        default: ""
    },
    picture: {
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbFXBR8fQY28t-izLNtbdMbZ0AX0TdUH1JbyW0xePfxw&s=10"
    },
    cart: [String],
    order: [String],
    address: {
        name: String,
        phone: String,
        pincode: String,
        state: String,
        city: String,
        dist: String,
        house: String,
        road: String
    }
}, {
    timestamps: true
})

export const User = mongoose.model("User", userSchema)