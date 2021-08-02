/*swiper slider */
var swiper = new Swiper('.swiper-container', {
     autoplay: {
     delay: 4000,
     disableOnInteraction: false,
    },  
  pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    loop: true
  });
/* toggle  active */
function myFunction(x) {
  x.classList.toggle("change");
}
/*mixitup */
var mixer = mixitup('.mix-container');

/*Get the button     Scroll bottom to up*/
var mybutton = document.getElementById("myBtn");

/* When the user scrolls down 20px from the top of the document, show the button*/
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

/*When the user clicks on the button, scroll to the top of the document*/
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
/*-- Menu Sticky --*/
var windows = $(window);
var sticky = $('.header-sticky')
windows.on('scroll', function() {
  var scroll = windows.scrollTop();
  if (scroll < 250) {
    sticky.removeClass('stick');
  } else {
    sticky.addClass('stick');
  }
});
/* Jquery Code */
$(document).ready(function ($) {
    /*counter up */
$('.counter').counterUp({
    delay: 10,
    time: 1000
})


/*-- Menu toogle --*/
$(".menu-toggle-btn").click(function() {
  $('.main_menu').toggleClass("open-menu");
});
/*-- Search --*/
$(".search-toggle").click(function() {
  $('.search-box').toggleClass("search-open");
});
/*-- Search --*/
$(".user-toggle").click(function() {
  $('.log').toggleClass("search-open");
});
});