const express = require('express');
const app = express();


const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('./config/db.js');

const PORT = process.env.PORT;
app.get('/', (req, res) => {
    res.send("Hello from back, Mohamed Iraqi")
})
app.listen(PORT, () => {
    console.log("Server is running on port : " + PORT)
})
connectDB();