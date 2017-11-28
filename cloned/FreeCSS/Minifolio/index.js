const express = require('express');

// initiate express app
const app = express()

// tell express where templates are kept.
app.set('views', './MyCode/dist/templates');
// set template engine to pug
app.set('view engine', 'pug');

// This is where static files are served from
app.use(express.static('./MyCode/dist'));

const projects = [
  {
    title: "Project Title",
    detail: "This is the project detail"
  }
];

// home route
app.get('/', function homePage(req, res) {
  res.render('home', { projects: projects});
});

app.get('/contact', function contactPage(req, res) {
  res.render('contact', { title: 'puglify', start: 'Hey!', name: 'Michael!'});
});

app.get('/about', function contactPage(req, res) {
  res.render('about', { title: 'puglify', start: 'Hey!', name: 'Michael!'});
});

app.listen(3000, () => console.log('App listening on port 3000!'));