import { container_2 } from "../../config/dbConnection.js";
import { Schema } from "mongoose";

const tabletSchema = new Schema({
     image:{
        type: String,
        required: true
    },
    brand:{
        type: String,
        required: true
    },
    name:{
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

export const Tablet = container_2.model("Tablet", tabletSchema);