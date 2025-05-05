const express = require('express');
const jwt = require('jsonwebtoken')

const app = express();

app.post('signin', (req, res) => {
    res.json({ message: "signin endpoint"})
})

app.post('signup', (req, res) => {
    res.json({ message: "signup endpoint"})
})

app.get('/user/purchases', (req, res) => {
    res.json({ message: "user purchases endpoint"})
})

app.get('/courses', (req, res) => {
})

app.listen(PORT, () => {
    console.log(`Server is running on port &{PORT}`)
})