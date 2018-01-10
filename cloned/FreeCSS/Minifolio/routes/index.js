const express = require('express')
    , router = express.Router();

const appData = require('../scripts/appData');

// api routes
router.use('/api', require('./api'));

// general routes
router.get('/contact', function contactPage(req, res) {
  res.render('contact', { title: "Minifolio - Contact", socialItems: appData.socialItems, status: "null"});
});

router.get('/about', function contactPage(req, res) {
  res.render('about', { title: "Minifolio - About", socialItems: appData.socialItems});
});

router.get('/', function homePage(req, res) {
  console.log('home request received');

  const top = appData.projects.filter((v) => v.section === 'top');
  const bottom = appData.projects.filter((v) => v.section === 'bottom'); 

  res.render('home', { projectsTop: top, projectsBottom: bottom, socialItems: appData.socialItems, title: "Minifolio - Home"});
});

// fallback route
router.all('*', function notFound(req, res) {
  res.send('Page not found!');
});

module.exports = router;
