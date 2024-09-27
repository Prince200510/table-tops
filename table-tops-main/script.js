// NAV BAR
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

// ACTIVE LINK
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec =>{

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
      });
    };

  });

}

// DARK MODE
// const chk = document.getElementById('chk');

// chk.addEventListener('change', () => {
//   document.body.classList.toggle('dark');
// });

// HOME SWIPER
var swiper = new Swiper(".home_slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

// TILT
  VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
    speed: 400
});

VanillaTilt.init(document.querySelectorAll(".dishes .box_container img"), {
    max: 15,
    speed: 400
});

VanillaTilt.init(document.querySelectorAll(".about img"), {
  max: 15,
  speed: 400
});

// REVIEW SLIDER
var swiper = new Swiper(".review_slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  loop:true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }
});

/* SCROLL REVEAL */
const sr = ScrollReveal({
  distance: '60px',
  duration: 2500,
  delay: 4,
})

sr.reveal(`header, .heading, .sub_heading`, { delay: 600 })
sr.reveal(`.footer`, { delay: 700 })
sr.reveal(`.home_slider `, { delay: 900, origin: 'top' })

sr.reveal(`.sponsor_img, .products_card, .footer .box, .credit, .order form`, { origin: 'top', interval: 100 })
sr.reveal(`.dishes .box, .review_slider, .menu .box`, { origin: 'left', interval: 50 })
sr.reveal(`.dishes img, .about .content`, { origin: 'right' })
sr.reveal(`.about img`, { origin: 'top' })
sr.reveal(`.case_data`)

// LOADING
function loader(){
  document.querySelector('.loader_container').classList.add('fade_out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut