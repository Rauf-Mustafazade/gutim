const counters = document.querySelectorAll('.value');
const speed = 200;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('akhi');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
        }else{
          counter.innerText = value;
        }
     
   }
   
   animate();
});
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