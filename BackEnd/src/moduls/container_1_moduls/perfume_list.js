import { container_1 } from "../../config/dbConnection.js";
import { Schema } from "mongoose";

const perfumeSchema = new Schema({
    image:{
        type: String,
        required: true
    },
    brand:{
        type: String,
        required: true
    },
    modelName:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    discountedPrice:{
        type: String,
        required: true
    },
    tag:{
        type: String,
        required: true
    },
    offerTag:{
        type:String,
        required: true
    }
})

export const Perfume = container_1.model("Perfume", perfumeSchema);