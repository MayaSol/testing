var imgContainer = document.querySelector('.draggable-img-container');
var imgDraggable = imgContainer.querySelector('img');
var offsetXStart;
var offsetYStart;

var onDocumentMouseMove = function(e) {

/*  console.log('e.currentTarget = ' + e.currentTarget + ' ; ' + e.currentTarget.className +
    '; e.target = ' + e.target + ' ' + e.target.className + '; ' +
    'offsetX = ' + e.offsetX + '; offsetY = ' + e.offsetY);*/

  if (e.target == imgDraggable) {

    var offsetX = e.target.offsetLeft + e.offsetX;
    var offsetY = e.target.offsetTop + e.offsetY;

    var Left = Math.min( Math.max(offsetX - offsetXStart, imgContainer.clientWidth - imgDraggable.clientWidth), 0 );
    var Top = Math.min( Math.max(offsetY - offsetYStart, imgContainer.clientHeight - imgDraggable.clientHeight), 0 );


    imgDraggable.style.left = Left + 'px';
    imgDraggable.style.top = Top + 'px';

  }

  else {
    CancelHandlers();
  }

}

var onDocumentMouseUp = function(e) {
  CancelHandlers();
  return;
}

var onImgContainerMouseDown = function(e) {
  offsetXStart = e.offsetX;
  offsetYStart = e.offsetY;

  e.preventDefault(); //чтобы картинка не краснела при нажатии

  document.addEventListener('mousemove', onDocumentMouseMove);
  document.addEventListener('mouseup', onDocumentMouseUp);
  return;
}

var CancelHandlers = function() {
  document.removeEventListener('mousemove', onDocumentMouseMove);
  document.removeEventListener('mouseup', onDocumentMouseUp);
  return;
}

imgDraggable.addEventListener('mousedown', onImgContainerMouseDown);

