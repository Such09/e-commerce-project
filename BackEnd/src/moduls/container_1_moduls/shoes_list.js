import { Schema } from "mongoose";
import { dbHome } from '../../config/dbConnection.js'

const shoseSchema = new Schema({
    id:{
        type: String,
        required: true,
        unique: true
    },
    image:{
        type: String,
        required: true,
    },
    brand:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    price:{
        type: String,
        required: true,
    },
    discountedPrice:{
        type: String,
        required: true,
    },
    todayOff:{
        type: String,
        required: true,
    },
    tag:{
        type: String,
        required: true,
    }
})

export const Shoes = dbHome.model('Shoes', shoseSchema)