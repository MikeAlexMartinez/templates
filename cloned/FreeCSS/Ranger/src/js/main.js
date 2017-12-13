'use strict';
//=include jquery.js
//=include owl.carousel.js
//=include noframework.waypoints.js

$(document).ready(() => {

  const navWaypoint = new Waypoint({
    element: document.getElementById('services'),
    handler: function(direction) {
      const navbar = $('#navigation');
      const content = $('#content');

      if(direction === 'down') {
        navbar.addClass('fixed');
        content.addClass('reflow');
        setTimeout(function(){
          navbar.addClass('show');
        },0.01);
      } else {
        navbar.removeClass('show');
        setTimeout(function(){
          navbar.removeClass('fixed');
          content.removeClass('reflow');
        },0.3);
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
      offset: '10%'
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
  .click(scrollTo);

  // Allow parent element of a[href] elements to trigger scroll to
  // animation
  $('#links ul li').click(function(evt) {
    $(this).children().trigger('click');
  });

  // toggle menu icon
  $('#menu-icon').click(function() {
    toggleNav(this);
  });

  // Owl Carousels
  // Hero
  $('#carouselOne').owlCarousel({
    nav: true,
    navText: ['<span id="arrowLeft" class="icon-arrow-left2"></span>','<span id="arrowRight" class="icon-arrow-right2"></span>'],
    navClass: ['owl-prev-relative', 'owl-next-relative'],
    loop: true,
    center: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000, // 5 seconds
  });


  // screenshots owl carousel code
  const screenshotOwl = $('#carouselTwo');
  
  screenshotOwl.owlCarousel({
    center: true,
    margin: 30,
    dots: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      695: {
        items: 3,
      },
      1000: {
        items: 5,
      }
    }
  });
  
  // hack to force showing of owl-carousel dots
  $('.owl-carousel').find('.owl-dots').removeClass('disabled');
  $('.owl-carousel').on('changed.owl.carousel', function(event) {
    $(this).find('.owl-dots').removeClass('disabled');
  });
  
  // create on click scrolling
  const clickScreenshotOwl = $('.owl-item');
  clickScreenshotOwl.click(function(evt) {
    const index = clickScreenshotOwl.index(this) + 1;
    
    screenshotOwl.trigger('to.owl.carousel', [index, 300]);
  });
});

// This code handles smooth scrolling animation.
// src: https://css-tricks.com/snippets/jquery/smooth-scrolling/
// Select all links with hashes
function scrollTo(event) {
  
  // Prevent click event on a element from firing the click event
  // on the parent element. 
  // (As this will retrigger the click on this element)
  event.stopPropagation();
  
  // Once completed toggle
  toggleNav($('#menu-icon'));

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
      }, 500, function() {
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
}

function switchNavlink(id) {
  const navLinkTarget = `#nav-${id}`;
  $('.nav-links ul li.active').removeClass('active');
  $(navLinkTarget).addClass('active');
}

function toggleNav(elm) {
  if(elm) {
    $(elm).toggleClass('open');
  }
  
  $('.linksContainer').toggleClass('hidden');
  $('.brand-container').toggleClass('unshadow');
}