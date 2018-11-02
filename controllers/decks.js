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
            decks = decks.sort((a, b) => a.created_at > b.created_at)
            const query = {_id: decks[0]._id}
            Deck.findOneAndDelete(query, function (err,offer){
                if(err) { throw err; }})
        }
    })

    const body = req.body

    let deck = new Deck({
        name: body.name,
        cards: body.cards,
        created_at: new Date()
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
        created_at: deck.created_at,
        id: deck._id
    }
  }

module.exports = decksRouter