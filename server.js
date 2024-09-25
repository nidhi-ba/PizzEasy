const express = require('express');
const app = express();
const ejs = require('ejs');
const expressLayout = require('express-ejs-layouts');
const path = require('path');
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');

// Database connection
const url = 'mongodb://localhost/pizza';

// No need for useNewUrlParser and useUnifiedTopology in the latest version
mongoose.connect(url);

// Handle successful connection
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Database connected...');
});

// Handle connection errors
connection.on('error', (err) => {
    console.error('Connection failed:', err);
});

// Assets (static files like CSS, JS, etc.)
app.use(express.static('public'));

// Setting up EJS as the view engine
app.use(expressLayout);
app.set('views', path.join(__dirname, '/resources/views'));
app.set('view engine', 'ejs');

// Import routes
require('./routes/web')(app);

// Start the server
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});
