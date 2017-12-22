// Third party modules
const express = require('express');
const router = express.Router();

// Application data
const appData = require('../scripts/appData');

// api routes
router.use('/api', require('./api'));

// home route
router.get('/', function homePage(req, res) {

  res.render('home', {title: "Deft - Home", data: appData.data });
});

// fallback route
router.all('*', function notFound(req, res) {
  res.send('Page not found!');
});

module.exports = router;