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
  const links = document.querySelectorAll(".scroll_to");
  links.forEach(items => {
    items.addEventListener("click",()=>{
      const el = document.getElementById(items.getAttribute("data-link"));
      el.scrollIntoView({
        behavior:"smooth",
        block:"center"
      })
    })
  });
  AOS.init();
  // TTH1
  // let menu = document.querySelector("#menu-icon");
  // let navlist = document.querySelector(".nav-list");

  // menu.onclick=()=>{
  //   navlist.classList.toggle("open");
  // }
  // TTH2
  
  const header = document.querySelector('.header .header-menu');
  const navList = document.querySelector('.header .header-menu .nav-list');
  let lastScroll = 0;
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
  $("#menu-icon").click(function(){
    // $(".nav-list").addClass("open");
    $(".nav-list").toggleClass("open");
  });
  });
  

