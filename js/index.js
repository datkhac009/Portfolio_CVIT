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
