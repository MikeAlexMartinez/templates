// Hide projects
$(document).ready(function() {
  
  // hideProjects();
  
  const delay = 75;

  const projectContainers = [{
    id: 'projects-container-top',
    difference: function(n, l) {
      return delay * n;
    },
    class: 'animated fadeIn'
  },
  {
    id: 'projects-container-bottom',
    difference: function(n, l) {
      return (l*delay) - (delay * n);
    },
    class: 'animated fadeIn'
  }];


  projectContainers.forEach((v, i) => {
    registerWaypoint(v,i);
  });

});

const test = 'testing';

function registerWaypoint(v,i) {
  const target = `projectWaypoint${i}`;
  
  window[target] = new Waypoint({
    element: document.getElementById(v.id),
    handler: function() {
      // function to fade in projects with appropriate delays
      fadeInProjects(v);

      // destroy waypoint to prevent rerunning of function
      this.destroy();
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
  // $('.project').addClass('hidden');
}

function checkFixed() {
  const scrollPos = $(document).scrollTop();
  if (scrollPos === 0) {
    $('#navigation').removeClass('fixed');
  } else {
    $('#navigation').addClass('fixed');
  }
}

function fadeInProjects(v) {
  console.log(v.id);
  
  const selector = $(`#${v.id} .project`);
  const l = selector.size();

  selector.each(function(i, e) {
    const delay = v.difference(i, l);
    const classVal = v.class;

    console.log(delay, classVal);

    setTimeout(function() {
      $(e).addClass(classVal);
    }, delay);
  });
}