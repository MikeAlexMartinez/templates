'use strict'

const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');

// initiate express app
const app = express();

// tell express where templates are kept.
app.set('views', './MyCode/dist/templates');
// set template engine to pug
app.set('view engine', 'pug');

// Allow for serving of favicons

const faviconPath = path.join(__dirname,'MyCode','dist','images','favicon.ico');
console.log(faviconPath);
app.use(favicon(faviconPath));

// This is where static files are served from
app.use(express.static('./MyCode/dist'));

// home route
app.get('/', function homePage(req, res) {
  
  res.render('home', {title: "RangerClone - Home"});
});

app.listen(3000, () => console.log('App listening on port 3000!'));