// Hide projects
$(document).ready(function() {

  hideProjects();

  ['projects-container-top','projects-container-bottom'].forEach((v,i) => {
    registerWaypoint(v,i);
  });

});

function registerWaypoint(e,i) {
  const target = `projectWaypoint${i}`;
  console.log(target);
  console.log(window[target]);
  window[target] = new Waypoint({
    element: document.getElementById(e),
    handler: function() {
      fadeInProjects(e);
    },
    offset: '100%'
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
  $('.project').css('opacity', 0);
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
  const gap = 100;
  console.log(id);

  $(`#${id} .project`).each(function(i, e) {
    const delay = gap * (i + 1);
    
    setTimeout(function() {
      $(e).removeClass('hidden');
      $(e).addClass('fadeInLeft');
    }, delay);
  });
}

