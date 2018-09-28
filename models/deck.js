const mongoose = require('mongoose')

const Deck = mongoose.model('Deck', {
    name: String,
    imageUrls: Array
  })

module.exports = Deck