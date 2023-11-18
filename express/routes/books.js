import express from 'express'

export const router = express.Router()

const books = [{
    id: 1,
    title: 'book1'
},
{
    id: 2,
    title: 'book2'
}, 
{
    id: 3,
    title: 'book3'
}]

router.get('/', (req, res) => {
    res.json(books)
})

router.post('/', (req, res) => {
    const body = req.body

    books.push(body)

    res.status(201).json(body)
})

router.get('/:id', (req, res) => {
    const id = req.params.id

    const book = books.find((book) => book.id == id)

    res.status(200).json(book)
})