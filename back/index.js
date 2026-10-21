const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('./config/db.js');

const PORT = process.env.PORT || 3000;

// Allow the front (Live Server, file://) to call the API locally
app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    next();
})

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

// Local only: Vercel runs the exported app as a serverless function
if (require.main === module) {
    app.listen(PORT, () => {
        console.log("Server is running on port : " + PORT)
    })
}

module.exports = app;
