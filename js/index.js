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
  const header = document.querySelector('.header .header-menu');
  const navList = document.querySelector('.header .header-menu .nav-list');
  let lastScroll = 0;  //Khi mình scroll xuống 1 vị trí nào đó thì sẽ lưu cái giá đó vào lastscroll 
  // const header = document.querySelector('.header .header-menu');
  // const navList = header.querySelectorAll(':scope .nav-list')[0];
  window.addEventListener('scroll', function (event) {
    console.log(document.body.scrollTop);
    // console.log(event);
    let currentScroll = event.target.scrollingElement.scrollTop;
  
    if (lastScroll < currentScroll) {
      header.classList.add('open');
      if (navList.classList.contains('open'))
        navList.classList.remove('open');
      
    } else 
    header.classList.remove('open');
    
    lastScroll = currentScroll;
    return lastScroll
  });  
$(document).ready(function(){
  $("#menu-icon").click(function(){
    $(".nav-list").toggleClass("open");
  });
  });

const sroll_to = document.querySelectorAll(".scroll_to");
sroll_to.forEach((items)=>{
  items.addEventListener("click",()=>{
  const el =   document.getElementById(items.getAttribute("data-link"))
  el.scrollIntoView({
    behavior:"smooth",
    block:"center"
  })
  })
}) 

const wrapper = document.querySelector(".wapper")
const home = wrapper.querySelector("#section1")
const bars = wrapper.querySelector(".to-top")
bars.addEventListener('click', function () {
  home.scrollIntoView({
    behavior:"smooth",
    block:"start"
  });
  
});

  

