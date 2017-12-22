'use strict';
//=include jquery.js
//=include masonry.pkgd.min.js
//=include animsition.min.js

$(document).ready(() => {
  console.log("Testing");

  /**
   * Set up masonry grid gallery
   * 
   **/
  $('#gallery .grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true,
    gutter: 20,
  });

  /**
   * Scroll to top click handler for footer
   * 
   **/
  $('#scrollToTop').click((evt) => {
    
    // get width of viewport
    const width = $( window ).width();
    const speed = 1000;

    // targets for wider screens
    let target = $('#rightSide');
    let move = $('html, body');

    if(width < 1025) {
      // change targets for smaller screens
      target = $('#title');
    }

    // animate the page
    scrollToTop(target, move, speed);
  });

  /**
   * Slide in Project detail
   * 
   **/
  $('.imgInfo .btn').click((evt) => {

    const node = $(evt.target);
    const target = $(`#${node.attr('target')}`);

    // scroll to top when not at the top.
    scrollToTop($('#title'), $('html, body'), 300);

    // Slide in project detail
    target.addClass('show');

    // hide main content to prevent excessive overflow-y
    $('#rightSide').addClass('hide');

  });

  $('.close-project').click((evt) => {
    $('.out-right.show').removeClass('show');
    $('#rightSide').removeClass('hide');
  });

  /**
   * 
   * @param {jquery element} target 
   * @param { Object } move 
   * @param {number} speed 
   * 
   * Handles smooth scroll of move element, to the 
   * target with no offset at the defined speed.
   * 
   */
  function scrollToTop(target, move, speed) {
    move.animate({
      scrollTop: target.offset().top
    }, speed, () => {
      target.focus();
    });
  }

  /**
   * contact form handling
   * 
   **/
  $('#contactForm').submit(function(evt) {
    evt.preventDefault();
    console.log("New message Submited!");

    const data = {
      source: $('#form-source').val(),
      name: $('#form-name').val(),
      email: $('#form-email').val(),
      message: $('#form-message').val(),
    };

    const posting = $.post('/api/message', data, "json");

    posting.done(function(data) {
      console.log(data);
      
    }).fail(function(err) {
      console.log(err);

    });
  });

   /**
   * subscribe form handling
   * 
   **/
  $('#subscribeForm').submit(function(evt) {
    evt.preventDefault();
    console.log("New Subscriber Submited!");

    const data = {
      source: $('#form-source').val(),
      email: $('#form-email').val(),
      active: true,
    };

    const posting = $.post('/api/subscribe', data, "json");

    posting.done(function(data) {
      console.log(data);
      
    }).fail(function(err) {
      console.log(err);

    });
  });

});