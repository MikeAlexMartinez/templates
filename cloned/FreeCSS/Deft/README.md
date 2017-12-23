# Deft

## Introduction

This is the third template I intend on cloning. I really love the design of this page and intend on using it to inspire my own personal portfolio.

There are a number of pages included in this file, but they represent different pages for different purposes. For this exercise I will focus on the Agency.html page.

My biggest challenge in this exercise was creating the smooth overlays for various elements. This includes the toast messages, the image info on hover, and also the toast
messages. To overcome this I became more comfortable using container divs, and the overflow property to create the illusion of elements sliding into segments of the page.

An improvement I should/could make would be to perfect the spacing between the masonry grid object. The white areas between images aren't all equal in size, and it would be cleaner 
to look at if they were.

### General

The Deft template is made of a number of segments. 

Depending on the screensize the shape of the segments will vary. The 'title' segment will either be fixed to the left half of the screen on wider devices (1025px and above) with all the other segments being found on the right hand side, which is scrollable.

Other responsive breakpoints are that the masonry pictures will be almost full screen at the small screen breakpoint, and the contact form boxes will also be full width (excluding 
margin);

### Sections

#### Title

  This is the fixed large left section on wider devices, or the full width top segment on smaller devices.

  It contains a logo, Some title text, some regular text and some social icons which change on hover.

  The background is a gradient which transitions from rgba(177, 75, 201, 0.95) to rgba(122, 83, 196, 0.95) 

  font color is white except on hover when it is '#30205e'.

#### Masonry Gallery

  This section has 6 images of showing work completed.

  The pictures are one of two heights, and are all equal width, with consistent margins around all images.

  On hover a caption slides up at the base of the image and upon clicking the 'view' button, an overlay
  with more detail relating to the clicked image coming in.

#### Image info Overlay

  This slides in above the right side of the page on wider devices. On small devices it covers the full page.
  
  It contains the image and a detailed description and a close button at the top right corner.

#### Subscribe

  This segment features a minimal form to allow visitors to register to receive news about the 'upcoming product'.

  It contains header text, a single input field for an email address and a subscribe button.

#### Skills

  This segment is primarily text with a header section, two paragraphs and then a number of icons to resemble 
  these skills.

  The background is white while the background of the buttons is a light grey which is also used in the contact us
  section.

#### Services

  This is a 2 * 3 list of services that are offered and a button styled section with the price.

#### Contact us 

  This has a number of elements.

  The Header text which contains a span item.

  A p element with placeholder text.

  An address phone number and e-mail address, each with an icon.

  Form input elements that have a background color of #1d2328. The placeholder text is faded. Text is white.

  The button is styled the same was as other buttons. except this is faded on hover.

#### Footer
  
  This has a black background.

  This contains some copyright text to the left and a button which initiates a scroll back to the top of the page.

## Libraries Used by Me

- [jQuery](http://jquery.com/ "jQuery")

- [Masonry.js](https://masonry.desandro.com/)

- [ionicons](http://ionicons.com/)

- I am yet to integrate imagesloaded into the project, although it is advisable as the absense of an image can affect 
the layout of the masonry grid.

## Libraries used by the original designer / developer

### JS Libraries

- [jQuery](http://jquery.com/ "jQuery")

- [Animsition](http://git.blivesta.com/animsition/ "Animsition")

  This is a simple and wasy jQuery plugin for css animated page transitions

  I believe that this is used to handle viewing the page that slides in for the project detail.

- [imagesloaded](https://imagesloaded.desandro.com/)

  Is an extension which allows you to detect when images are loaded and or broken.

- [jqinstapics](http://projects.craftedpixelz.co.uk/jqinstapics/)

  Is a jquery plugin that allows you to easily load your latest pictures from your instagram.

- [jquery.countdown](http://projects.craftedpixelz.co.uk/jqinstapics/)

  Is a jquery plugin that allows you to easily create timers.

- [jquery.flexslider](https://woocommerce.com/flexslider/)

  Is a fully responsive jQuery slider toolkit.

- [jquery.magnific-popup](http://dimsemenov.com/plugins/magnific-popup/)

  Magnific Popup is a responsive lightbox & dialog script with focus on performance and providing best experience for user with any device (for jQuery or Zepto.js).

- [Masonry.js](https://masonry.desandro.com/) 

  Is a cascading grid layout library. This places elements in an optimal position based on available vertical space. This will be required for the image preview 
  section.

- [Photoswipe-ui](http://photoswipe.com/)

  This is a Javascript image gallery with no dependencies.

### Mixed Libraries

- [Bootstrap](https://getbootstrap.com/ "Bootstrap")

### CSS Libraries

- [ionicons](http://ionicons.com/)

  An icon font library built for use with the ionic framework.