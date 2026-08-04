import { container_2 } from "../../config/dbConnection.js";
import { Schema } from "mongoose";

const laptopSchema = new Schema({
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

export const Laptop = container_2.model("Laptop", laptopSchema);