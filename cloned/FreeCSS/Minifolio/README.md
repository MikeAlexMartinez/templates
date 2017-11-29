# Minifolio

## Challenges

Key challenges when creating this webpage are the fact that it's responsive, and a number of elements 
on the page change depending on the screen size. Other challenges involve creating the smooth, well
styled animations that bring life to this site.

Key animations / interactivity that I need to create are:
- The Nav bar which fades in and out on scroll (when the screen width is > 768px);
- Responsive features of webpage (layout of project pictures & expandable nav items);
- Fade in each of the listed projects once the projects enter the viewport.
- On hover over a project the an almost opaque screen covers the picture and the project
  title is shown.
- Show magnified picture of project photo on click.

## Issues encountered

- Setting up font-awesome to work with Sass. 
  
  I wanted to be able to work offline when required, and so didn't want to depend on a CDN. 
  To get Sass working nicely with font-awesome I need to add the font-awesome fonts to the 
  font folder in my distribution folder, and also needed to add just the sass files to the sass 
  folder, which I've now done, and then imported it into the top of my sass application.scss file
  with the other external libraries that I've used.   

- Creating stickied navbar on scroll

  Achieved with waypoint.js and CSS transitions

- Animating the menu transition for smaller screens

  Thanks to Jesse Couch's [hamburger animations codepen](https://codepen.io/designcouch/pen/Atyop)
  for providing a super useful example of different hamburger transitions.

  A difficulty was getting the menu to fade in gradually instead of instantly. The reason this wasn't
  working at first was because I was using 'display: none' to hide the page which makes it difficult 
  to use css transitions to manage the timing of the fade in animation. 

- Animating project image hover

  Achieved with CSS transitions.

- Fading in projects on initial scroll down the page

  Achieved with waypoint, jquery and some of my own javascript to control the fadeIn timings.


#### To do List:
1. Create basic layout of each page.
    - Layout
    - Styling
    - With Grid
2. Add content
3. Add functionality

## Used by me

- [Gulp](https://gulpjs.com/ "Gulp")
  
  The build automation library.

  Plugins being used are:
  - [gulp-sass](https://github.com/dlmanning/gulp-sass)  for converting sass
  - [gulp-sourcemaps](https://github.com/gulp-sourcemaps/gulp-sourcemaps)  for writing source maps
  - [gulp-mocha](https://github.com/sindresorhus/gulp-mocha)  for running my tests

- [Normalize.css](http://necolas.github.io/normalize.css/ "normalize.css")  for reseting my CSS
  across different browsers.

- [Font-Awesome v4.7](http://fontawesome.io/ "Font Awesome")  For easy to embed fonts.
  
  (Used by original template developer)

- [Waypoints](http://imakewebthings.com/waypoints/ "Waypoints")
  
  (Used by original template developer)

- [Fancybox V2](http://fancyapps.com/fancybox/ "Fancybox Version 2")
  
  (Used by original template developer)

- [Pug](https://pugjs.org/api/getting-started.html)
  
  Pug is a high-performance template engine heavily influenced by Haml and implemented with JavaScript for Node.js and browsers.

  Pug allows me to write minimal, maintainable code that is compiled to html and can be reused and repurposed across different pages.

- [Express.js](https://expressjs.com/)
  is a Fast, unopinionated, minimalist web framework for Node.js.

  Allows me to compile and combine my pug templates with data   

## Libraries used by the original designer / developer

### JS Libraries

- jQuery

- [Modernizr](https://modernizr.com/ "Modernizr")

  Modernizr allows for easy feature detection within your webpage to allow you to activate,
  or deactivate certain features depending on whether the browser is able to run them.

- [Waypoints](http://imakewebthings.com/waypoints/ "Waypoints")

  For an easy way to trigger a function when you scroll to an element.

  Available as a jQuery extension for browser support pre IE9 or can be used on it's 
  own for IE9+.

- [Retina](http://imulus.github.io/retinajs/ "Retina.js")

  Retina allows for the loading of high-resolution images from the server, providing that

  1. A high resolution equivalent image exists, and
  2. The device's screen meets the necessary resolution requirements.


### Mixed Libraries

- [Bootstrap Version 3.3](https://getbootstrap.com/docs/3.3/ "Bootstrap")

  The ever-present monolithic CSS framework.

- [Fancybox V2](http://fancyapps.com/fancybox/ "Fancybox Version 2")

  Adds 'elegant' zooming functionality for images and html content.


### CSS Libraries

- [Animate.css](https://github.com/daneden/animate.css "Animate.css") 

  This is a cross browser css animations library that makes it really easy to drop in 
    css animations on to your DOM elements.
  ```
    npm install animate.css --save
  ```
  To use drop a link to the CSS in your header and then add the `` animate `` class to your
  target element, as well as the chosen animation you require.

- [Font-Awesome v4.7](http://fontawesome.io/ "Font Awesome")  For easy to embed fonts.

  These are used to add in the social sharing fonts.