require('dotenv').config();
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const connect = require('./config/dbConfig');
const authRoutes = require('./routers/authRoutes');

const app = express();

app.use(cors());
app.use(express.json());

connect();

app.use('/auth', authRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
