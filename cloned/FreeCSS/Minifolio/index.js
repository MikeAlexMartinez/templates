const express = require('express');

// initiate express app
const app = express()

// tell express where templates are kept.
app.set('views', './MyCode/dist/templates');
// set template engine to pug
app.set('view engine', 'pug');

// This is where static files are served from
app.use(express.static('./MyCode/dist'));

// Project Portfolio
const projects = [
  {
    title: "Project Title",
    detail: "This is the project detail",
    image: "images/work-1.jpg",
    section: "top"
  },
  {
    title: "Project Title",
    detail: "This is the project detail",
    image: "images/work-2.jpg",
    section: "top"
  },
  {
    title: "Project Title",
    detail: "This is the project detail",
    image: "images/work-3.jpg",
    section: "top"
  },
  {
    title: "Project Title",
    detail: "This is the project detail",
    image: "images/work-4.jpg",
    section: "top"
  },
  {
    title: "Project Title",
    detail: "This is the project detail",
    image: "images/work-5.jpg",
    section: "bottom"
  },
  {
    title: "Project Title",
    detail: "This is the project detail",
    image: "images/work-6.jpg",
    section: "bottom"
  },
  {
    title: "Project Title",
    detail: "This is the project detail",
    image: "images/work-7.jpg",
    section: "bottom"
  },
  {
    title: "Project Title",
    detail: "This is the project detail",
    image: "images/work-8.jpg",
    section: "bottom"
  },
];

const socialItems = [
  {
    link: "https://www.facebook.com/michaelalexandermartinez",
    icon: "fa-facebook"
  },
  {
    link: "https://twitter.com/MikeAlMartinez",
    icon: "fa-twitter"
  },
  {
    link: "https://www.linkedin.com/in/michael-alexander-martinez-b9073742",
    icon: "fa-linkedin"
  },
  {
    link: "https://plus.google.com/u/0/106701963549260967393",
    icon: "fa-google-plus"
  },
  {
    link: "https://github.com/MikeAlexMartinez",
    icon: "fa-github"
  },
]

// home route
app.get('/', function homePage(req, res) {
  const top = projects.filter((v) => v.section === 'top');
  const bottom = projects.filter((v) => v.section === 'bottom'); 

  res.render('home', { projectsTop: top, projectsBottom: bottom, socialItems: socialItems, title: "Minifolio - Home"});
});

app.get('/contact', function contactPage(req, res) {
  res.render('contact', { title: "Minifolio - Contact", socialItems: socialItems});
});

app.get('/about', function contactPage(req, res) {
  res.render('about', { title: "Minifolio - About", socialItems: socialItems});
});

app.listen(3000, () => console.log('App listening on port 3000!'));