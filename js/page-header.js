var toggle = document.querySelector('.page-header__toggle');
var header = document.querySelector('.page-header');
var main = document.querySelector('.page-main');


var onHeaderHamburgerClick = function(event) {

  event.preventDefault();
  header.classList.toggle('page-header--closed');
  main.classList.toggle('page-main--closed-header');

}

toggle.addEventListener('click',onHeaderHamburgerClick);

var onWindowScroll = function() {

  if (!header.classList.contains('page-header--closed')) {
    header.style.left = '-' + window.pageXOffset + 'px';
  }
}

window.addEventListener('scroll',onWindowScroll);




