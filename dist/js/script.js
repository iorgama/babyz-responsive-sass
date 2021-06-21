let mobileNav = document.getElementsByClassName('mobile-nav');
let linksNav = document.getElementById('mobile-links');

mobileNav[0].addEventListener(
  'click',
  function () {
    if (linksNav.classList.contains('toggle')) {
      linksNav.classList.remove('toggle');
    } else {
      linksNav.classList.add('toggle');
    }
  },
  false,
);
