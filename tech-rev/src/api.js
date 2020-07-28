const axios = require("axios");

exports.fetchReactBootstrap = () => {
  return axios
    .get("https://api.npmjs.org/downloads/point/last-month/react-bootstrap")
    .then(({ data }) => {
      return data;
    });
};

exports.fetchSemanticUi = () => {
  return axios
    .get("https://api.npmjs.org/downloads/point/last-month/semantic-ui")
    .then(({ data }) => {
      return data;
    });
};

exports.fetchReactMdl = () => {
  return axios
    .get("https://api.npmjs.org/downloads/point/last-month/react-mdl")
    .then(({ data }) => {
      return data;
    });
};

exports.fetchMaterialUi = () => {
  return axios
    .get("https://api.npmjs.org/downloads/point/last-month/material-ui")
    .then(({ data }) => {
      return data;
    });
};
