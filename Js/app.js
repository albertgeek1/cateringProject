window.addEventListener("scroll", () => {
  let header = document.querySelector("header");
  header.classList.toggle('down', window.scrollY > 0);

  let logo = document.querySelector(".brand img");
if (window.scrollY>0) {
  logo.setAttribute('src', 'Img/logoExperia.jpg');
}else{
  logo.setAttribute('src', 'Img/logoExperia.jpg');
}

});

//javascript for responsive navigation sidebar menu
let menu = document.querySelector('.menu');
let menuBtn = document.querySelector('.menu-btn');
let closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener("click", () => {
  menu.classList.add('active');
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove('active');
});





