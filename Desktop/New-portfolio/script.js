
//HERO SECTION BUTTON
const showImage = document.querySelector("#contactId");
const showBtn = document.querySelector(".button-1");
const showBtn2 = document.querySelector(".button-2");
const showContent = document.querySelector("#caseStudyId");
const hideContent = document.querySelector("#contactId");


showBtn.addEventListener("click", () => {  //WORK WITH ME btn
  showImage.src  = "images/Hubspot_AEO_Cert.png" 
  hideContent.style.display = "block"
  showContent.style.display = "none"
});

showBtn2.addEventListener("click", () => {   //VIEW MY PROJECTS btn
  showContent.style.display = "block"
  hideContent.style.display = "none"
});


//HAMBURGER MENU
const menuBtn = document.querySelector("#menuToggle");
const menu = document.querySelector("#menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle('show');
  if (menu.classList.contains('show')){
    menuBtn.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>';
  } else {
    menuBtn.innerHTML = 'MENU<i class="fa-solid fa-bars"></i>';
  }
});

//swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

