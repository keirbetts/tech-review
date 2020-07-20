const apiRouter = require("express").Router();
const express = require("express");
const { ratingsRouter } = require('./ratingsRouter')


apiRouter.use("/ratings", ratingsRouter)




module.exports = apiRouter

