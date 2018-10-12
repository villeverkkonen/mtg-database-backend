const mongoose = require('mongoose')

const Deck = mongoose.model('Deck', {
    name: String,
    cards: Array,
    created_at: Date
  })

module.exports = Deck