require('dotenv').config()
const express = require('express')
const server = express()
const cors = require('cors')
// const apiRouter = require('./Routers/ApiRouter')

server.use(express.json());
server.use(cors());


const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database!'));

const router = require('./ratings')
server.use("/ratings", router)


server.listen(3000, () => console.log("Server started!"));