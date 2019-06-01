'use strict';

( function() {
var toggle = document.querySelector('.page-header__toggle');
var header = document.querySelector('.page-header');
var headerMain = document.querySelector('.page-header__main');
var pageWrapper = document.querySelector('.page-wrapper');

var onHeaderHamburgerClick = function(event) {

  event.preventDefault();
  header.classList.toggle('page-header--closed');
  pageWrapper.classList.toggle('page-wrapper--closed');
}

toggle.addEventListener('click',onHeaderHamburgerClick);

var onWindowScroll = function() {

  if (!header.classList.contains('page-header--closed')) {
    header.style.left = '-' + window.pageXOffset + 'px';
  }
}

window.addEventListener('scroll',onWindowScroll);

var onPageWrapperScroll = function() {
  console.log('scroll: ' + window.scrollY
    + ', clientHeight: ' + document.documentElement.clientHeight
    + ', scrollHeight: ' + document.documentElement.scrollHeight
    + ', headerMainHeight: ' + headerMain.clientHeight);

}

window.addEventListener('scroll',onPageWrapperScroll);

})();



