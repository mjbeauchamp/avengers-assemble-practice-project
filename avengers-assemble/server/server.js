const express = require('express');
require('dotenv').config()

const app = express();

const {SERVER_PORT} = process.env;

let avengers = [
    "Stever Rogers",
    "Bucky Barnes",
    "Tony Stark",
    "Thor Odinson",
    "Bruce Banner",
    "Natasha Rominov",
    "Clint Barton",
    "Peter Parker",
    "Dr. Strange",
    "Peter Quill",
    "Loki Odinson"
]


app.get('/api/all-avengers', (req, res) => {
    res.status(200).send(avengers)
})




app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`)
})