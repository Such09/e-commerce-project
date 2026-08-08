import mongoose, { Schema } from 'mongoose'

const thirdConSchema = new Schema({
    id:{
        type: String,
        required: true,
        unique: true
    },
    url:{
        type: String,
        required: true
    },
    brand:{
        type: String,
        required: true
    },
    model:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    dis_price:{
        type: String,
        required: true
    },
    bank_dis:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    }
})

export const Third = mongoose.model("Third", thirdConSchema);