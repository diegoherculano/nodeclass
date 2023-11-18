import mongoose from "mongoose"

export const mongoosedb = await mongoose.connect('mongodb://localhost:27017/nodeclass').catch(err => console.error(err));

// const books = connect.model('books', bookSchema)

// books.create({
//     title: "Freddyy",
//     author: "Paloo"
// }).then((value) => {
// console.log(value)
// }).catch((err) => {
//     console.log(err)
// })
