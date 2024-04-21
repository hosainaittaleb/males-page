// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@ CHANGE HEADER BACKGROUND @@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const header = document.getElementById('header');

function scrollHeader() {
  if (this.scrollY >= 50) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}

window.addEventListener('scroll', scrollHeader);

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@      SHOW MENU      @@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close'),
  main = document.getElementById('main'),
  footer = document.getElementById('footer');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-nav-menu');
    main.classList.add('blur');
    footer.classList.add('blur');
    document.body.classList.add('no-scroll');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-nav-menu');
    main.classList.remove('blur');
    footer.classList.remove('blur');
    document.body.classList.remove('no-scroll');
  });
}

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@     REMOVE MENU     @@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach((n) => {
  n.addEventListener('click', () => {
    navMenu.classList.remove('show-nav-menu');
    main.classList.remove('blur');
    footer.classList.remove('blur');
    document.body.classList.remove('no-scroll');
  });
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@  ACTIVE LINKS WHEN SCROLL WINDOW  @@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('active-link');
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);

//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//  @@@@@@@@@@    emailjs.com   @@@@@@@@@
//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const footerForm = document.getElementById('footer-form'),
  footerMessage = document.getElementById('footer-message'),
  footerInput = document.getElementById('footer-input');

const sendEmail = (e) => {
  e.preventDefault();

  // Check if the field has a value
  if (footerInput.value === '') {
    // Add and remove color
    footerMessage.classList.remove('color-green');
    footerMessage.classList.add('color-red');

    // Show message
    footerMessage.textContent = 'You must enter your email';

    // Remove message after 3 seconds
    setTimeout(() => {
      footerMessage.textContent = '';
    }, 3000);
  } else {
    // https://www.emailjs.com/docs/sdk/send-form/
    // emailjs.sendForm(serviceID, templateID, #myForm, publicKey);
    emailjs
      .sendForm(
        'service_p6jk43w',
        'template_r9cys2j',
        '#footer-form',
        '7RsoRVrmmFoAfa-j6'
      )
      .then(
        () => {
          // Show message and add color
          footerMessage.classList.add('color-green');
          footerMessage.textContent = 'You registered successfully 👍';

          // Remove message after 4 seconds & clear the input field
          setTimeout(() => {
            footerMessage.textContent = '';
            footerInput.value = '';
          }, 4000);
        },
        (error) => {
          // Mail sending error
          alert('OOPS! SOMETHING HAS FAILED...', error);
        }
      );
  }
};

footerForm.addEventListener('submit', sendEmail);

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@    SHOW SCROLLUP    @@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// const scrollUp = () => {
//   const scrollUp = document.getElementById('scrollup');

//   this.scrollY >= 300
//     ? scrollUp.classList.add('show-scrollup')
//     : scrollUp.classList.remove('show-scrollup');
// };

function scrollUp() {
  const scrollUp = document.getElementById('scrollup');

  if (this.scrollY >= 300) {
    scrollUp.classList.add('show-scrollup');
  } else {
    scrollUp.classList.remove('show-scrollup');
  }
}

window.addEventListener('scroll', scrollUp);

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@     swiperjs.com    @@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// @@@@@@@@@@@@@@  BRANDS   @@@@@@@@@@@@@@
const brandsSwiper = new Swiper('.brands__swiper', {
  slidesPerView: 3,
  spaceBetween: 15,
  grabCursor: true,
  loop: true,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  breakpoints: {
    576: {
      slidesPerView: 4,
    },

    992: {
      slidesPerView: 5,
      spaceBetween: 25,
    },
  },
});
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@   scrollrevealjs.org   @@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const sr = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 2500,
  delay: 300,
});

sr.reveal(`.home__data ,.team__swiper ,.brands__swiper`);

sr.reveal(`.program__card ,.pricing__card ,.footer__content `, {
  interval: 200,
});

sr.reveal(`.home__img`, { origin: 'bottom' });
sr.reveal(`.choose__img ,.bmi__data ,.bmi__img`, { origin: 'left' });
sr.reveal(`.choose__data`, { origin: 'right' });


