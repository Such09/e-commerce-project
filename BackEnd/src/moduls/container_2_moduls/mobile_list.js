import { container_2 } from "../../config/dbConnection.js";
import { Schema } from "mongoose";

const mobileSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    storage: {
        type: String,
        required: true
    },
    camera: {
        type: String,
        required: true
    },
    battery: {
        type: String,
        required: true
    },
    display: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    discountedPrice: {
        type: String,
        required: true
    }
})

export const Mobile = container_2.model("Mobile", mobileSchema);