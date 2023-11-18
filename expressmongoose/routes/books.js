import express from 'express'
import { db } from '../database.js'
import { ObjectId } from 'mongodb'
import { mongoosedb } from '../mongoose.js'
import { bookSchema } from '../entity/book.js'

export const router = express.Router()

const collectionName = 'books'
const book = mongoosedb.model(collectionName, bookSchema)

router.get('/', async (req, res) => {
    const booksdb = await book.find()
    res.json(booksdb)
})


router.post('/', async (req, res) => {
    try {
        const createdBook = await book.create(req.body)
        res.status(201).json(createdBook)
    } catch (error) {
        res.status(400).json(error)
    }
})

router.put('/:id', async (req, res) => {
    const id = req.params.id
    const bookdb = await book.findOne( { _id: new ObjectId(id) })

    if (!bookdb) {
        res.status(404).send()
        return
    }

    await book.findOneAndUpdate(
        { _id: new ObjectId(id) },
        req.body
    )

    res.status(200).send()
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    const bookdb = await book.findOne( { _id: new ObjectId(id) })

    res.status(200).json(bookdb)
})