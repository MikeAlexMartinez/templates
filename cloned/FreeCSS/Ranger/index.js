'use strict'

const express = require('express');

// initiate express app
const app = express();

// tell express where templates are kept.
app.set('views', './MyCode/dist/templates');
// set template engine to pug
app.set('view engine', 'pug');

// This is where static files are served from
app.use(express.static('./MyCode/dist'));

// home route
app.get('/', function homePage(req, res) {
  
  res.render('home', {title: "Ranger - Home"});
});

app.listen(3000, () => console.log('App listening on port 3000!'));