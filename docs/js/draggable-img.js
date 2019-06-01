'use strict';

(function() {
var imgContainer = document.querySelector('.draggable-img-container');
var imgDraggable = imgContainer.querySelector('img');
var offsetXStart;
var offsetYStart;

var onImgContainerMouseMove = function(e) {

    var offsetX = e.target.offsetLeft + e.offsetX;
    var offsetY = e.target.offsetTop + e.offsetY;
    var LeftMax = imgContainer.clientWidth - imgDraggable.clientWidth;
    var TopMax = imgContainer.clientHeight - imgDraggable.clientHeight;

    var Left = Math.min( Math.max(offsetX - offsetXStart, LeftMax), 0 );
    var Top = Math.min( Math.max(offsetY - offsetYStart, TopMax), 0 );

    imgDraggable.style.left = Left + 'px';
    imgDraggable.style.top = Top + 'px';

}

var onImgContainerMouseUp = function(e) {
  console.log('mouse up');
  CancelHandlers();
  return;
}

var onImgContainerMouseOut = function(e) {
  CancelHandlers();
  return;
}

var onImgMouseDown = function(e) {
  offsetXStart = e.offsetX;
  offsetYStart = e.offsetY;

  console.log('offsetYStart = ' + offsetXStart);

  e.preventDefault();

  imgDraggable.style.cursor = 'grabbing';

  imgContainer.addEventListener('mousemove', onImgContainerMouseMove);
  imgContainer.addEventListener('mouseup', onImgContainerMouseUp);
}

var CancelHandlers = function() {
  imgDraggable.style.cursor = '';
  imgContainer.removeEventListener('mousemove', onImgContainerMouseMove);
  imgContainer.removeEventListener('mouseup', onImgContainerMouseUp);
  return;
}

imgDraggable.addEventListener('mousedown', onImgMouseDown);
imgContainer.addEventListener('mouseout', onImgContainerMouseOut);

})();
