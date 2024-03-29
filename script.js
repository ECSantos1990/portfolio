


//Javascript Navigation -->

  const menuBtn = document.querySelector(".menu-btn");
  const navigation = document.querySelector(".navigation");


  menuBtn.addEventListener("click" , () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
 }); 

var slides = document.querySelectorAll(".slide");
var btns = document.querySelectorAll(".btn");
let currentSlide = 1;

//Javascript for image slider manual navigation
var manualNav = function(manual) {
slides.forEach((slide) => {
  slide.classList.remove('active');

  btns.forEach((btn) => {
    btn.classList.remove('active');
  });
});

slides[manual].classList.add('active');
btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
btn.addEventListener("click", () => {
  manualNav(i);
  currentSlide = i;
});
});

