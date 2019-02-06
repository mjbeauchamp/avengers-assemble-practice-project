const express = require('express');
require('dotenv').config()

const app = express();

const {SERVER_PORT} = process.env;

let avengers = [
    {
        name: "Stever Rogers",
        power: 500
    },
    {
        name: "Bucky Barnes",
        power: 400
    },
    {
        name: "Tony Stark",
        power: 300
    },
    {
        name: "Thor Odinson",
        power: 900
    },
    {
        name: "Bruce Banner",
        power: 400
    },
    {
        name: "Natasha Rominov",
        power: 600
    },
    {
        name: "Clint Barton",
        power: 300
    },
    {
        name: "Peter Parker",
        power: 700
    },
    {
        name: "Dr. Strange",
        power: 900
    },
    {
        name:  "Peter Quill",
        power: 300
    },
    {
        name: "Loki Odinson",
        power: 600
    }
]


app.get('/api/all-avengers', (req, res) => {
    res.status(200).send(avengers)
})




app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`)
})