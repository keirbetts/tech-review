const express = require('express');
const router = express.Router();
const rating = require('./ratingModel')

router.get('/', async (req, res) => {
  try {
    const ratings = await rating.find()
    res.json(ratings)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
});

module.exports = router;