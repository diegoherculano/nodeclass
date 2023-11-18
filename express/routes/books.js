import express from 'express'
import { db } from '../database.js'
import { ObjectId } from 'mongodb'

export const router = express.Router()

const collectionName = 'books'

router.get('/', async (req, res) => {
    const booksdb = await db.collection(collectionName).find().toArray()
    res.json(booksdb)
})


router.post('/', async (req, res) => {
    const body = req.body

    await db.collection(collectionName).insertOne(body)

    res.status(201).send()
})

router.put('/:id', async (req, res) => {
    const id = req.params.id
    const bookdb = await db.collection(collectionName).findOne( { _id: new ObjectId(id) })

    if (!bookdb) {
        res.status(404).send()
        return
    }

    await db.collection(collectionName).updateOne(
        { _id: new ObjectId(id) }, 
        { $set: { title: req.body.title, author: req.body.author }
    })

    res.status(200).send()
})

router.get('/:id', async (req, res) => {
    const id = req.params.id

    const bookdb = await db.collection(collectionName).findOne( { _id: new ObjectId(id) })

    res.status(200).json(bookdb)
})