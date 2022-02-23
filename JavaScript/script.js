$(function() {
   $('.header-menu-col-8-search i').click(function() {
       $(this).toggleClass('fa-times');
       $('.header-menu-col-8-text').toggleClass('active');
       $('.header-menu-col-8-inp').toggleClass('active');
   });
   $('.header-menu-col-1-block i').click(function() {
       $(this).toggleClass('fa-times');
   });
   $('.fa-bookmark').click(function() {
       $(this).toggleClass('active');
   })
   $('.recommended-box-text-block .fa-play-circle').click(function() {
       $(this).toggleClass('fa-stop-circle');
   })
   $('.recommended-box-background-main_btn__block .fa-play-circle').click(function() {
       $(this).toggleClass('fa-stop-circle');
   })
   $('.information .container .information-nav ul .box').click(function() {
       $('.information .container .information-nav ul').toggleClass('active');
   })
   $('.information .container .information-nav ul li').click(function() {
    $('.information .container .information-nav ul').toggleClass('active');
   })
}) 

var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
});


