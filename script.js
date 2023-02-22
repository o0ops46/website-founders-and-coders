//select elements.
const detailsBtn = document.querySelector('.more-details-btn');
const aboutMeSection = document.querySelector('#about-me-section');
detailsBtn.addEventListener('click', function () {
  aboutMeSection.scrollIntoView();
});
function myFunction() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}
