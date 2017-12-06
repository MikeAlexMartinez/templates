'use strict'

// node modules
const path = require('path');

// Third party modules
const express = require('express');
const bodyParser = require('body-parser');

// require routes
const routes = require('./routes');

// initiate express app
const app = express();

// tell express where templates are kept.
app.set('views', './views');
// set template engine to pug
app.set('view engine', 'pug');

// This is where static files are served from
app.use(express.static(path.resolve(__dirname, 'public')));

// supports parsing of application/json type post data
app.use(bodyParser.json());
// supports parsing of application/x-www-form-urlendcoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// my routes
app.use(routes);

// Let's go!
app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`==> Listening on port 3000. Open up http://localhost:3000/ in your browser.`);
  }
});
