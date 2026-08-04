import { Schema } from 'mongoose'
import { dbHome } from '../../config/dbConnection.js'

const secondConSchema = new Schema({
    id:{
        type: String,
        required: true,
        unique: true
    }, 
    url:{
        type: String,
        required: true,
    },
    brand:{
        type: String,
        required: true,
    },
    model:{
        type: String,
        required: true,
    },
    price:{
        type: String,
        required: true,
    },
    dis_price:{
        type: String,
        required: true,
    },
    bank_dis:{
        type: String,
        required: true
    }
})

export const Second = dbHome.model("Second", secondConSchema)