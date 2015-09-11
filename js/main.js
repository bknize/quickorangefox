var waypoint = new Waypoint({
  element: document.getElementById('title-container'),
  handler: function(direction) {
    console.log('Scrolled to waypoint!')
    x = $('#title-container')
    if (x.hasClass('fix-it')) {
        x.removeClass('fix-it')
    }
    else{
        x.addClass('fix-it')
    }
  }
})