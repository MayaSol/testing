'use strict';

( function() {
var toggle = document.querySelector('.page-header__toggle');
var header = document.querySelector('.page-header');
var main = document.querySelector('.page-main');

var onHeaderHamburgerClick = function(event) {

  event.preventDefault();
  header.classList.toggle('page-header--closed');
  main.classList.toggle('page-main--closed-header');

}

toggle.addEventListener('click',onHeaderHamburgerClick);

})();



