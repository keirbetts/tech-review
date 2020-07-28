const axios = require("axios");


exports.fetchReactBootstrap = () => {
  return axios.get('https://api.npmjs.org/downloads/point/last-month/react-bootstrap').then(({ data }) => {
    return data
  })
}




