const RatingSchema = require('../ratingModel')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/rating', { useNewUrlParser: true, useUnifiedTopology: true });

const ratings = [new RatingSchema({
  technology: 'react-bootstrap',
  rating: 4
}),
new RatingSchema({
  technology: 'react-mdl',
  rating: 2
}),
]

let done = 0
for (let i = 0; i < ratings.length; i++) {
  ratings[i].save(function (err, result) {
    done++;
    if (done === ratings.length) {
      exit()
    }
  })
}

function exit() {
  mongoose.disconnect()
}