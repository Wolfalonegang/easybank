var hamBut = document.querySelector('#hambut');
var overlay = document.querySelector('#bgmob');
var mobMenu = document.querySelector('#mobmenu');

hamBut.addEventListener('click', function(){
  overlay.classList.toggle("active");
  hamBut.classList.toggle("active");
  mobMenu.classList.toggle("active");
})