import { Schema } from "mongoose"
import { dbHome } from "../../config/dbConnection.js";

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

export const First = dbHome.model('First', firstSchema)