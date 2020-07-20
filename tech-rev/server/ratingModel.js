const mongoose = require('mongoose')

const ratingSchema = new mongoose.Schema({
  technology: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('rating', ratingSchema)