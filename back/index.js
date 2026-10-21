const express = require('express');
const cors = require('cors');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('./config/db.js');

const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello from le front, Mohamed Iraqi")
})

app.get('/login', (req, res) => {
    res.send("Bienvenue sur la route login")
})

app.get('/sign-up', (req, res) => {
    res.send("Bienvenue sur la route sign up")
})

app.get('/api/test', (req, res) => {
    res.json({ message: "Connexion Front-Back réussie" })
})

connectDB().catch((err) => console.error(err.message));

// Sur Vercel, c'est Vercel qui lance le serveur
if (!process.env.VERCEL) {
    app.listen(PORT, () => {
        console.log("Server is running on port : " + PORT)
    })
}

module.exports = app;
