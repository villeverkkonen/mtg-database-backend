const decksRouter = require('express').Router()
const Deck = require('../models/deck')

decksRouter.get('/decks', (req, res) => {
    Deck
    .find({})
    .then(decks => {
        res.json(decks.map(formatDeck))
    })
})

decksRouter.get('/decks/:id', (req, res) => {
    Deck
    .findById(req.params.id)
    .then(deck => {
        if (deck) {
            res.json(formatDeck(deck))
        } else {
            res.status(404).end()
        }
    })
    .catch(error => {
        console.log(error)
        res.status(400).send({ error: 'malformatted id' })
    })
})

decksRouter.post('/new_deck', (req, res) => {
    // Allow only 10 saved decks in database
    // Delete oldest one
    Deck
    .find({})
    .then(decks => {
        if (decks.length >= 10) {
            Deck.findByIdAndRemove(decks[0].id)
        }
    })

    const body = req.body

    let deck = new Deck({
        name: body.name,
        imageUrls: body.imageUrls
    })

    deck
    .save()
    .then(savedDeck => {
        res.json(formatDeck(savedDeck))
    })
})

const formatDeck = (deck) => {
    return {
        name: deck.name,
        imageUrls: deck.imageUrls,
        id: deck._id
    }
  }

module.exports = decksRouter