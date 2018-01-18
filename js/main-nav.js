var mainNavItems = document.querySelectorAll('.main-nav__item');

var onMainNavItemHover = function(event) {
  var dropMenu = event.currentTarget.querySelector('ul');
  if ( dropMenu ) {
    dropMenu.style.left = '';
    var rect = dropMenu.getBoundingClientRect();
    var winW = document.documentElement.clientWidth;
    var offset = rect.left + rect.width - winW;

    if ( offset > 0 ) {
      dropMenu.style.left = '-' + Math.ceil(offset) + 'px';
    };

  }
}

for(i=0;i<mainNavItems.length;i++) {
  mainNavItems[i].addEventListener('mouseover',onMainNavItemHover);
}



