const mongoose = require('mongoose')

const Deck = mongoose.model('Deck', {
    name: String,
    cards: Array
  })

module.exports = Deck