$(document).ready(ready);

function ready() {
  
  // add click event to navigation items in header
  $('.nav-item a').on('click', handleNavClick)
}

function handleNavClick(evt) {

  const node = evt.target;

  // Update class on header navigation menu
  $('.nav-item').removeClass('active-tab');
  $(node).parent().addClass('active-tab');
  
  // Update main section to show correct page
  const target = "#" + $(node).attr('id') + "-content";
  console.log($(target));
  
  $('.page').attr('hidden', true);
  $(target).attr('hidden', false);
}