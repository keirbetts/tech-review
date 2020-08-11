const express = require('express');
const router = express.Router();
const voting = require('./ratingModel')

router.patch('/voting', async (req, res) => {
  try {
    const voting = await vote.find()
    res.json(voting)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
});

module.exports = router;