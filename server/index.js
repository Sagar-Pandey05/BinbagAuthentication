const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const connect = require('./db/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = process.env.PORT;

connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
