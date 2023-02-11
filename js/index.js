$('.owl-carousel').owlCarousel({
  items:3,
  loop: true,
  lazyLoad:true,
  autoplay: false,
  animateOut: 'fadeOut',
  margin:50,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
});


AOS.init();


let lastScroll = 0;
const header = document.querySelector('.header .header-menu');
const links = document.querySelectorAll('.header .scroll_to');
const navList = document.querySelector('.header .header-menu .nav-list');

links.forEach((item) => {
  item.addEventListener('click', function (event) {
    const el = event.target.dataset.link;

    const scrollToElement = document.querySelector(`#${el}`);
    window.scrollTo(0, scrollToElement.offsetTop);  
  })
});

window.addEventListener('scroll', function (event) {
  console.log(document.body.scrollTop);
  let currentScroll = event.target.scrollingElement.scrollTop;

  if (lastScroll < currentScroll) {
    header.classList.add('open');
    if (navList.classList.contains('open'))
      navList.classList.remove('open');
    
  } else header.classList.remove('open');
  
  lastScroll = currentScroll;
  return lastScroll
});




$(document).ready(function(){
  $("#menu-icon").on('click', function(){
    $(".nav-list").toggleClass("open");
  });
});
