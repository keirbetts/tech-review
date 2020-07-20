const ApiRouter = require("express").Router();
const router = require('../ratings')


ApiRouter.use("/ratings", router)




module.exports = ApiRouter

