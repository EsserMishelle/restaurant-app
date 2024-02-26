require('dotenv').config()
//connect to the database
require('./config/database')
const express = require('express');
const path = require('path');
const logger = require('morgan');
const app = express();

const ensureLoggedIn = require('./config/ensureLoggedIn');

app.use(logger('dev'));
app.use(express.json());

// to serve from the production 'build' folder
app.use(express.static(path.join(__dirname, 'build')));

app.use(require('./config/checkToken'));
// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));

app.use('/api/items', require('./routes/api/items'));
app.use('/api/orders', ensureLoggedIn, require('./routes/api/orders'));
// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});