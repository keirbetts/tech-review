const mongoose = require('mongoose')

const votingSchema = new mongoose.Schema({
  technology: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('voting', votingSchema)