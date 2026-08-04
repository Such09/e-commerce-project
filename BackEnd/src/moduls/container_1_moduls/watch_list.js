import { Schema } from "mongoose";
import { dbHome } from "../../config/dbConnection.js";

const watchSchema = new Schema({
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
        type: String,
        required: true
    }
})

export const Watch = dbHome.model('Watch', watchSchema)