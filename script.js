// Responsive Navbar Toggle
const navToggle = document.getElementById('nav-toggle');
const navbar = document.getElementById('navbar');
const navMenu = document.querySelector('#navbar ul');

navToggle.addEventListener('click', () => {
  navbar.classList.toggle('responsive');
  if (navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
  } else {
    navMenu.classList.add('active');
  }
});

// Image Popup Modal with next/prev navigation
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');
const closeBtn = document.getElementById('close-popup');
const nextBtn = document.getElementById('next-img');
const prevBtn = document.getElementById('prev-img');
const popupImgs = document.querySelectorAll('.popup-img');

let currentIndex = 0;

function showPopup(index) {
  if (index < 0) {
    currentIndex = popupImgs.length - 1;
  } else if (index >= popupImgs.length) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }
  popupImg.src = popupImgs[currentIndex].src;
  popupImg.alt = popupImgs[currentIndex].alt || 'Popup Image';
  popup.style.display = 'flex';
}

popupImgs.forEach((img, index) => {
  img.addEventListener('click', () => {
    showPopup(index);
  });
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
  popupImg.src = '';
  popupImg.alt = '';
});

nextBtn.addEventListener('click', () => {
  showPopup(currentIndex + 1);
});

prevBtn.addEventListener('click', () => {
  showPopup(currentIndex - 1);
});

popup.addEventListener('click', e => {
  if (e.target === popup) {
    popup.style.display = 'none';
    popupImg.src = '';
    popupImg.alt = '';
  }
});

// Prevent form submission for demo purposes
document.querySelector('.contactform form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for contacting us!');
  this.reset();
});
