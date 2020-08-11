const VotesRouter = require("express").Router();
const router = require('../votes')


VotesRouter.use("/votes", router)




module.exports = VotesRouter

