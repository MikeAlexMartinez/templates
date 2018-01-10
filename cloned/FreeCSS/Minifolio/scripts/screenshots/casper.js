const casper = require('casper').create({
  viewportSize: {
    width: 1900,
    height: 1773
  }
});

// Get homepage
casper.start('http://127.0.0.1:3000/', function() {
  this.scrollToBottom();
  casper.capture('images/home.png');
});

// About me
casper.then(function() {
  this.click('#goto-about');
  this.waitUntilVisible('.about-me.container', function() {
    this.echo('about me is visible');
    casper.capture('images/about.png');
  });
});

// Contact
casper.then(function() {
  this.click('#goto-contact');
  this.waitUntilVisible('#contactForm', function() {
    this.echo('Contact form is visible');
    casper.capture('images/contact.png');
  });
});

// Terminate test
casper.then(function(){
  this.echo('=======================');
  this.echo('Test completed');
  this.exit();
});

casper.run();