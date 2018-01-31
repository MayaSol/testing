'use strict';

(function() {
var imgContainer = document.querySelector('.sliding-img-container');
var imgSliding = imgContainer.querySelector('img');


var onImgContainerMouseMove = function(e) {
  e.preventDefault();

  if (e.offsetX < 15) {
    imgSliding.style.marginLeft = '0';
    return;
  }
  if (e.offsetX > imgContainer.clientWidth - 15) {
    imgSliding.style.marginLeft = imgContainer.clientWidth - imgSliding.clientWidth + 'px';
    return;
  }
  if (e.offsetY < 15) {
    imgSliding.style.marginTop = '0';
    return;
  }
  if (e.offsetY > imgContainer.clientHeight - 15) {
    imgSliding.style.marginTop = imgContainer.clientHeight - imgSliding.clientHeight + 'px';
    return;
  }


}

var onImgContainerMouseDown = function(e) {
  e.preventDefault();
}

imgContainer.addEventListener('mousemove', onImgContainerMouseMove);
imgContainer.addEventListener('mousedown', onImgContainerMouseDown);

})();

