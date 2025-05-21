$(document).ready(function(){

  $('.hero-section').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    autoplaySpeed: 2000,
  });

$('.tes-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.brand-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    responsive: [
      {
        breakpoint: 1034,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.team-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    adaptiveHeight: true
  });

  $('.slider-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          arrows:false
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows:false
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
          arrows:false,
          slidesToScroll: 1,
        }
      }
    ]
  });
  
  $(".as-box3,.as-box2,.as-box4").slideUp();

  $(".tab1").click(function(){
    $(this).addClass("tab");
    $(".tab2,.tab3,.tab4").removeClass("tab");
    $(".as-box1").slideDown();
    $(".as-box3,.as-box2,.as-box4").slideUp();
  });

  $(".tab2").click(function(){
    $(this).addClass("tab");
    $(".tab1,.tab3,.tab4").removeClass("tab");
    $(".as-box2").slideDown();
    $(".as-box3,.as-box1,.as-box4").slideUp();
  });

  $(".tab3").click(function(){
    $(this).addClass("tab");
    $(".tab2,.tab1,.tab4").removeClass("tab");
    $(".as-box3").slideDown();
    $(".as-box1,.as-box2,.as-box4").slideUp();
  });
  $(".tab4").click(function(){
    $(this).addClass("tab");
    $(".tab2,.tab1,.tab3").removeClass("tab");
    $(".as-box4").slideDown();
    $(".as-box1,.as-box2,.as-box3").slideUp();
  });

$(window).scroll(function() {
  if ($(this).scrollTop() > 450){  
      $('.menu').addClass("sticky");
  }
  else{
      $('.menu').removeClass("sticky");
  }
});


});

const date = new Date().getFullYear();
document.querySelector(".crDate").innerHTML = date;

     document.addEventListener('keydown', function(event) {
            if (event.ctrlKey && event.key === 'u') {
                event.preventDefault();
               
            }
        });

        document.addEventListener('contextmenu', function(event) {
            event.preventDefault();
            
        });
