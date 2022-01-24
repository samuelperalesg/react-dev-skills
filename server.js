const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const dotenv = require('dotenv')

const app = express()
require('dotenv').config()


const {DATABASE_URL, PORT} = process.env

mongoose.connect(DATABASE_URL)
const db = mongoose.connection

db
.on("connected", () => console.log('Connected to MongoDB'))
.on("error", () => console.log(' MongoDB Error'))

app.use(morgan('dev'))
app.use(express.json())

app.listen(PORT, () => {
  console.log('Express is listening...')
})