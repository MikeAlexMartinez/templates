// Third party modules
const express = require('express');
const router = express.Router();

// Application data
const appData = require('../scripts/appData');

// home route
router.get('/', function homePage(req, res) {

  res.render('home', {title: "Deft - Home", data: appData.data });
});

module.exports = router;