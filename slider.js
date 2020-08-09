
//l'élément à modifier
elem = document.getElementById("slideWindow");

// //on récupère la largeur de elem
var widthCorps = document.getElementById("corps").offsetWidth;

function myFunction(numero) {
  //je déplace à droite de 0 ou 1 ou 2 fois la taille de la div
  elem.style.right = numero*widthCorps+'px';
  // Je supprime la class current
  document.getElementById("cat0").className = '';
  document.getElementById("cat1").className = '';
  document.getElementById("cat2").className = '';
  // j'ajoure la class current 
  document.getElementById("cat"+numero).className = 'current';
  
  //Si détection de redimensionnement de la fenetre du navigateur
  window.onresize = function() {
    widthCorps = document.getElementById("corps").offsetWidth;
    elem.style.right = numero*widthCorps+'px';
  }
}

  
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}