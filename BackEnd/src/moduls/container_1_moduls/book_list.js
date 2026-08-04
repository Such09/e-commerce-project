import { container_1 } from "../../config/dbConnection.js";
import { Schema } from "mongoose";

const bookSchema = new Schema({
    image:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    author:{
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

export const Book = container_1.model("Book", bookSchema);