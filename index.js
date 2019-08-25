const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Import Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/post');

dotenv.config();


// Connect to DB
mongoose.connect(process.env.DB_CONNECT,{ useNewUrlParser: true }, () => 
console.log('Connected to DB!')
);

// Middleware
app.use(express.json());


// Route middlewares
app.use('/api/v1/user', authRoute);
app.use('/api/v1/post', postRoute);



app.listen(3000, ()=>console.log('running on port 3000'))