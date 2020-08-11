const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/voting', { useNewUrlParser: true, useUnifiedTopology: true });

const voting = [new VotingSchema({
  technology: 'react-bootstrap',
  votes: 0
}),
new VotingSchema({
  technology: 'react-mdl',
  votes: 0
}),
]

let done = 0
for (let i = 0; i < voting.length; i++) {
  voting[i].save(function (err, result) {
    done++;
    if (done === voting.length) {
      exit()
    }
  })
}

function exit() {
  mongoose.disconnect()
}