import { Schema } from 'mongoose'
import { authorSchema } from './author.js'

export const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: false
    },
    author: {
        type: authorSchema,
        required: true,
        unique: false
    }
}, {
    timestamps: true
})