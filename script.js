// Responsive Navbar Toggle
const navToggle = document.getElementById('nav-toggle');
const navbar = document.getElementById('navbar');

if (navToggle && navbar) {
  navToggle.addEventListener('click', () => {
    navbar.classList.toggle('responsive');
  });
}

// Images Pop-up
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');
const closePopup = document.getElementById('close-popup');

if (popup && popupImg && closePopup) {
  document.querySelectorAll('.popup-img').forEach((img) => {
    img.addEventListener('click', () => {
      popup.style.display = 'flex';
      popupImg.src = img.src;
      popupImg.alt = img.alt || 'Popup Image';
    });
  });

  closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
    popupImg.src = '';
    popupImg.alt = '';
  });

  // Close popup when clicking outside the image
  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.style.display = 'none';
      popupImg.src = '';
      popupImg.alt = '';
    }
  });
}

// Optional: Prevent actual form submission for demo
const contactForm = document.querySelector('.contactform form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for contacting us!');
    this.reset();
  });
}
