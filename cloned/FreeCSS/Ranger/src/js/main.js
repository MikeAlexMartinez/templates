'use strict';
//=include jquery.js
//=include owl.carousel.js
//=include noframework.waypoints.js

$(document).ready(() => {
  console.log("__testing__");

  const navWaypoint = new Waypoint({
    element: document.getElementById('services'),
    handler: function(direction) {
      const navbar = $('#navigation');
      
      if(direction === 'down') {
        navbar.addClass('fixed');
        setTimeout(function() {
          navbar.addClass('show');
        }, 300);
      } else {
        navbar.removeClass('show');
        setTimeout(function() {
          navbar.removeClass('fixed');
        }, 10);
      }
      
    },
    offset: '13%'
  });

  const segments = ["home", "services", "screenshots", "tour", "features", "testimonial", "pricing"];

  // Changes navbar highlighting on scroll down the page
  segments.forEach((v, i) => {

    window[`segmentWaypoint-d-${i}`] = new Waypoint({
      element: document.getElementById(v),
      handler: function(direction) {
        if(direction == 'down') {
          switchNavlink(this.element.id);
        }
      },
      offset: '9%'
    });
  
  });

  // Changes navbar highlighting on scroll down the page
  segments.forEach((v, i) => {
    window[`segmentWaypoint-u-${i}`] = new Waypoint({
      element: document.getElementById(v),
      handler: function(direction) {
        if(direction == 'up') {
          switchNavlink(this.element.id);
        }
      },
      offset: '-9%'
    });
  
  });

  // This code handles smooth scrolling animation.
  // src: https://css-tricks.com/snippets/jquery/smooth-scrolling/
  // Select all links with hashes
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    console.log("Click");
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1500, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

});

function switchNavlink(id) {
  const navLinkTarget = `#nav-${id}`;
  $('.nav-links ul li.active').removeClass('active');
  $(navLinkTarget).addClass('active');
}