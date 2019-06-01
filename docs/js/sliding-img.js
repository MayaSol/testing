'use strict';

(function() {
var imgContainer = document.querySelector('.sliding-img-container');
var imgSliding = imgContainer.querySelector('img');


var onImgContainerMouseMove = function(e) {
  e.preventDefault();
  var rightOffset = imgContainer.clientWidth / 2;
  var topOffset = imgContainer.clientHeight / 2;

  if (e.offsetX < rightOffset) {
    imgSliding.style.marginLeft = '0';
  }
  if (e.offsetX > imgContainer.clientWidth - rightOffset) {
    imgSliding.style.marginLeft = imgContainer.clientWidth - imgSliding.clientWidth + 'px';
  }
  if (e.offsetY < topOffset) {
    imgSliding.style.marginTop = '0';
  }
  if (e.offsetY > imgContainer.clientHeight - topOffset) {
    imgSliding.style.marginTop = imgContainer.clientHeight - imgSliding.clientHeight + 'px';
  }

}

var onImgContainerMouseDown = function(e) {
  e.preventDefault();
}

imgContainer.addEventListener('mousemove', onImgContainerMouseMove);
imgContainer.addEventListener('mousedown', onImgContainerMouseDown);

})();

