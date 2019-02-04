// *****************************************************************************
// App.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================

const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

require('dotenv').config();
// Sets up the Express App
// =============================================================
const app = express();

// Require models for sync
const db = require('./config/database');

// Test DB
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

// Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Sets up express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));

// Static directory
app.use(express.static(path.join(__dirname, '/public/')));

// Index route
app.get('/', (req, res) => res.render('splash', { layout: 'landing' }));

// Routes
// =============================================================
app.use('/jobs', require('./routes/jobs'));
app.use('/child', require('./routes/child'));
app.use('/', require('./routes/index'));


const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));