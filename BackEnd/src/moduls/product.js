import { dbHome } from "../config/dbConnection.js";
import { Schema } from "mongoose";

const productSchema = new Schema({
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    model_name: {
        type: String,
        required: true
    },
    description: {
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
    },
})

export const Product = dbHome.model("Product", productSchema)