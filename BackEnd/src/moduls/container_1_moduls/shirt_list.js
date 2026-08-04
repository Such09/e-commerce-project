import { container_1 } from "../../config/dbConnection.js";
import { Schema } from "mongoose";

const shirtSchema = new Schema({
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

export const Men_shirts = container_1.model("Men_shirts", shirtSchema);