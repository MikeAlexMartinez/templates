# Ranger

## Introduction

This is the second time that I will be cloning a template from [Free Css](http://www.free-css.com/ "Free Css").

My first clone was my attempt at replicating the [Minifolio](https://github.com/MikeAlexMartinez/templates/tree/master/cloned/FreeCSS/Minifolio "Learn more here!") template.

This template has more going on, and makes more extensive use of some of the techniques I used for the Minifolio template.

I've taken more time for this attempt to identify common stylings and patterns used to build the website. All the content is on one scrollable page.
A number of the sections use the same styling with the exception of colours used, although there is a consistent palette of colours used across
the different sections. While I didn't fully utilise sass to completely DRY my sass code for the Minifolio project (providing i don't refactor), 
I will be much more mindful of opportunities to reuse sass styling, and will write styling blocks that are more conducive to reuse (i.e. will make 
more use of functions and imports).

Challenges I forsee in this project will be: 
- Creating all the fadein animations, although with my use of waypoints in the previous project 
  this shouldn't be an issue.

- The two carousels, one automatic and one manual.

- The scroll to navigation.

- The Navigation bar animations
  1. (expanded) Hover and click animations on the faux-link elements
    - Fadein underline on hover, and
    - Scroll to segment, and delayed removal of previous element styling on click of different segment.

  2. (expanded) different colors when top, and also when stickied. 
    
  3. (minimised) Hamburger menu animation on hover, (increase padding), and transition into X on click.

Hopefully the rest will be straight forward! But I will update as (and when) I encounter problems!


## Page Components, Style and Structure

- General: The whole page uses animations to stylistically fadeIn content as you scroll to a point in the page.

### Core Components

This page is composed built of 8 sections with content, a header and a footer. See detail below.

Each section is built of groups of elements many of which repeat through the page.

Components I've identified that I will be able to style independently to construct the page are listed below:
1. featureGroup - Made up of an image and a text block next to eachother. stacked on small devices. The text block within this component is the component mentioned next (textGroup1). featureGroup with an alt tag will switch the text and img blocks around.

2. textGroup1 - This block of text is contained in the featureGroup. Contains a header text element, some smaller text and a btn.
  All left aligned.

3. textGroup2 - This block of text is present in section 2. Where each object has an image, a small header and some text.

4. textGroup3 - This text group has a small image in the left corner and some text. There are six of these in section 5.

5. sectionHeader - This is in sections 2, 3, 5, 6, and 7. It consists of some larger header text and some subheader text.

6. QuoteGroup - This section consists of what appears to be a speech bubble and some text below. speech bubbles are equal width and are of the same height.

7. pricingGroup - These blocks contain pricing information. They have a general style consistent across the four, except when one is 'best value' it is highlighted green.

8. There are button through out the application, mainly with the same styling, except when it's clear. 

### Structure

- Responsive Nav Bar

  Becomes sticky after you scroll to the next segment.
  Changes from clear to white. 

  Text colours change

  For small screen links:

  Navigation is permanent and styled the same at all times.

  Hamburger menu instead of text links
    1. Animation on hover
    2. Animation on click

    3. active state, causes links to slide down. 
    4. Has breaker between main header and slide down.

  On click animation and hover animations on the stickied, non-minimised 

- Section 1 - App for Android - App for iOS auto-slider

  Consistent styling on opposite sides.

  Light Purple Background

  Text next to image, similar to "what we do segments".

  small device: text grouping above picture and centred.

  Other screens, next to eachother, image is flexible in size (img container is a width percentage)

- Section 2 - Our Services

  off-white background

  Heading and large summary text

  three sections below with consistent image sub-header text styling
  and positioning.

  For small screen size, three sections stack, otherwise they have 
  consistent sizes on the screen.

- Section 3 - App Screenshots

  Navy-grey background

  Heading and large summary text (As with section 2, except 
  different colors)

  different background color to segment above.

  Images of phone screens, on non-auto slideshow.

  Not much adjustment for smaller screen size,  

- Section 4 - "Tour"

  off-white bg

  Larger section in height.

  3 stacked sections.

  Each section has the same structure as the styling applied in section 1.
  Except the sizing is different and its not a slideshow.

  image alongside text,

  small: image stacked before text grouping, Text grouping stays 
  left aligned.

- Section 5 - Features

  very light greeny blue.

  Same Heading and large summary styling as services

  sub section is block of 6 elements with same styling.
  
  initially:
    larger 2 rows of 3.

    small 3 rows of 2.

    Extreme small (<500) Then 6 of 1.
  
- Section 6 - Happy Clients say...

  Same heading and large summary styling. With different colors.

  Background color same as section 1.

  3 Quotes of same width with variable heights (defined by text).
  Name, position, org beneath.

    Equal width inline-block

    small device - stacked

- Section 7 - Pricing

  off-white bg

  Usual header and large summary styling.

  4 pricing blocks. same styling
  except "best-value" block, which has different outline
  and button styling.

  main - inline-block

  medium - 2 * 2

  small - stacked

- Section 8 - Sign up

  grey to lighter grey color gradient bg, top-left to bottom-right.

  Large text.

  Btn to get started!

- Footer

  off-white bg
  
  Copyright text and social sharing buttons.

## Libraries Used by Me

- nothing yet..

## Libraries used by the original designer / developer

### JS Libraries

- jquery

- modernizr

- respond

- waypoints

- jQuery 'easing'

### Mixed Libraries

- owl carousel

- Bootstrap.css

### CSS Libraries

- Animate.css

- Simple line icons

- Icomoon

- Bootstrap SASS - compass, mincer, sprockets
