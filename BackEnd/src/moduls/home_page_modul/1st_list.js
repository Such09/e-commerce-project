import mongoose, { Schema } from "mongoose"

const firstSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    url: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
})

export const First = mongoose.model('First', firstSchema)