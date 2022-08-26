var swiper = new Swiper(".slider-Swiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    loop:true,
});
let nextBtn = document.querySelector('.our-job-next')
let prevBtn = document.querySelector('.our-job-prev')
var swiper = new Swiper(".our-job-Swiper", {
    navigation: {
      nextEl: nextBtn,
      prevEl: prevBtn,
    },
    loop:true,
    slidesPerView:3,
    spaceBetween:15,
    breakpoints:{
      276:{
          slidesPerView:1,
      },
      576:{
          slidesPerView:2,
      },
      998:{
          slidesPerView:2,
      },
      1025:{
        slidesPerView:3,
    },
    }
  });
let nextBtn1 = document.querySelector('.works-next')
let prevBtn1 = document.querySelector('.works-prev')
var swiper = new Swiper(".works-Swiper", {
    navigation: {
      nextEl: nextBtn1,
      prevEl: prevBtn1,
    },
    loop:true,
    slidesPerView:3,
    spaceBetween:15,
    breakpoints:{
      276:{
          slidesPerView:1,
      },
      576:{
          slidesPerView:2,
      },
      998:{
          slidesPerView:3,
      },
      1025:{
        slidesPerView:4,
      },
    },
    loop:true,
    slidesPerView:4,
  });
let nextBtn2 = document.querySelector('.projects-next')
let prevBtn2 = document.querySelector('.projects-prev')
var swiper = new Swiper(".projects-Swiper", {
    navigation: {
      nextEl: nextBtn2,
      prevEl: prevBtn2,
    },
    loop:true,
    slidesPerView:3,
    spaceBetween:15,
    breakpoints:{
      276:{
          slidesPerView:1,
      },
      576:{
          slidesPerView:2,
      },
      998:{
          slidesPerView:3,
      },
    },
    loop:true,
    slidesPerView: 3,
  });