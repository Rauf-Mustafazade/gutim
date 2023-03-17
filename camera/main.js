var btna = $('#button');
$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btna.addClass('show');
  
    } else {
      btna.removeClass('show');
    }
  });
  
  btna.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0},'300');
  });