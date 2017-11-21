# Templates

## Introduction

This repo contains various templates that I am cloning from scratch (i.e. I've used visuals to recreate, but 
haven't reused any of the underling code).

The majority of the templates I will clone will be from [FreeCSS](http://www.free-css.com/free-css-templates "FreeCSS") and
these are all contained in the FreeCSS folder. Where I clone other templates and folders, these will be contained in their
own distinctive folders.

Each item in these folders contains two folders, a _public_ folder with my code in, and an _inspiration_ folder 
with images and source code of the website that I'm trying to recreate.

I will also use this as an exercise to help discover some of the tools / libraries used to create the websites. I will 
keep a list of this libraries below and will make my own notes about these additional tools. Where I use other libraries
I will also make note of these.

While some websites will use frameworks such as [bootstrap](https://getbootstrap.com/ "Bootstrap") I, initially, will seek to 
avoid such comprehensive libraries, as I seek to improve my own CSS and HTML skills and utilising bootstrap and the like too 
often would defeat the purpose of these exercises.

I will utilise SASS to write my CSS, and will also leverage jQuery in places. Later templates, I may create using React, but 
initially, for these projects, I want to focus on writing as much HTML and Sassy CSS as possible.

## Third Party Libraries

Third party libraries being used in any of these projects are listed below. Any libraries used will be installed locally 
in a **'lib/'** folder but this folder is being ignored by github so I don't upload too much bloat into the repo. All
additions to this folder will be documented below. Templates created by me, will each be self-contained within their
respective folders so any libs contained in this ignored lib folder won't affect the ability of any websites to be displayed
properly.


### By Me

#### Lib Libraries

- [Bootstrap-4.0.0-beta.2](https://getbootstrap.com/docs/4.0/getting-started/introduction/ "Bootstrap V4")

#### In Projects

- [Autoprefixer](https://github.com/postcss/autoprefixer "AutoPrefixer")
  Autoprefixer is a [PostCSS](https://github.com/postcss/postcss "PostCSS") plugin to parse CSS and add vendor prefixes to CSS 
  rules using values from [Can I Use](http://caniuse.com/). It is recommended by Google and used in Twitter and Taobao.
- [Gulp](https://gulpjs.com/ "Gulp")
  Gulp is a build automation tool. I will initially be using this to compile my sass code, but will be looking to extend it's
  use where appropriate (Testing springs to mind!).

### By Original Source Code

These are the libraries used by the websites that I'm attempting to clone.