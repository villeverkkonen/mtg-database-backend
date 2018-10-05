const decksRouter = require('express').Router()
const Deck = require('../models/deck')

decksRouter.get('/', (req, res) => {
    Deck
    .find({})
    .then(decks => {
        res.json(decks.map(formatDeck))
    })
})

decksRouter.get('/:id', (req, res) => {
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

decksRouter.post('/', async (req, res) => {
    // Allow only 10 saved decks in database
    // Delete oldest one
    await Deck
    .find({})
    .then(decks => {
        if (decks.length >= 10) {
            Deck.findByIdAndRemove(decks[0].id)
        }
    })

    const body = req.body

    let deck = new Deck({
        name: body.name,
        cards: body.cards
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
        cards: deck.cards,
        id: deck._id
    }
  }

module.exports = decksRouter