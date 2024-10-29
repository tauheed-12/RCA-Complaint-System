require('dotenv').config();
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const connect = require('./config/dbConfig');
const authRoutes = require('./routers/authRoutes');
const studentRoutes = require('./routers/studentRoutes');
const caretakerRoutes = require('./routers/caretakerRoutes');
const adminRoutes = require('./routers/adminRoutes')

const app = express();

app.use(cors());
app.use(express.json());

connect();

app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);
app.use('/student', studentRoutes);
app.use('/caretaker', caretakerRoutes)



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
