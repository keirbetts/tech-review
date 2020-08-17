const axios = require("axios");

const getRatings = () => {
  return axios
    .get("localhost3000/api/ratings")
    .then((response) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

getRatings();
