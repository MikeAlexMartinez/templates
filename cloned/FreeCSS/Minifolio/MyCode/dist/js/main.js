// Hide projects
$(document).ready(function() {
  
  hideProjects();
  
  const delay = 75;
  [{
    id: 'projects-container-top',
    difference: function(n, length) {
      return delay * n;
    },
    class: 'fadeInLeft'
  },
  {
    id: 'projects-container-bottom',
    difference: function(n, l) {
      return (l*delay) - (delay * n);
    },
    class: 'fadeInRight'
  }]

  ['projects-container-top','projects-container-bottom'].forEach((v,i) => {
    registerWaypoint(v,i);
  });

});

const test = 'testing';

function registerWaypoint(e,i) {
  const target = `projectWaypoint${i}`;
  console.log(target);
  console.log(window[target]);
  window[target] = new Waypoint({
    element: document.getElementById(e),
    handler: function() {
      fadeInProjects(e);
    },
    offset: '75%'
  });
}

const navWaypoint = new Waypoint({
  element: document.getElementById('banner'),
  handler: function(direction) {
    checkFixed();
  },
  offset: -1
});

function hideProjects() {
  $('.project').addClass('hidden');
}

function checkFixed() {
  const scrollPos = $(document).scrollTop();
  if (scrollPos === 0) {
    $('#navigation').removeClass('fixed');
  } else {
    $('#navigation').addClass('fixed');
  }
}

function fadeInProjects(id) {
  const gap = 50;
  console.log(id);

  $(`#${id} .project`).each(function(i, e) {
    const delay = gap * (i + 1);
    setTimeout(function() {
      $(e).removeClass('hidden');
      $(e).addClass('fadeInLeft');
    }, delay);
  });
}