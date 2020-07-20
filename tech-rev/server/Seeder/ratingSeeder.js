const RatingSchema = require('../ratingModel')
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const ratings = [new RatingSchema({
  technology: 'react-bootstrap',
  rating: 4
}),
new RatingSchema({
  technology: 'react-mdl',
  rating: 2
}),
]

const done = 0
for (let i = 0; i < ratings.length; i++) {
  ratings[i].save(function (err, result) {
    done++;
    if (done === products.length) {
      exit()
    }
  })
}

function exit() {
  mongoose.disconnect()
}