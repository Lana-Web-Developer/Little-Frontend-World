'use strict';

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  slideToClickedSlide: true,
  slidesPerView: 3,
  centeredSlides: true,
  initialSlide: 5,
  loop: true,
  loopedSlides: 5,
  freeMode: true,
  parallax: true,

  autoplay: {
    delay: 4000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

//anim text
let animItems = document.querySelectorAll('._anim-items');
if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll(param) {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        let animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add('_active');
      } else {
        if (!animItem.classList.contains('_anim-no-hide')) {
          animItem.classList.remove('_active');
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  setTimeout(() => {
    animOnScroll();
  }, 400);
}
const linkText = document.getElementById('textLink');
const titleButton = document.getElementById('headerTwo');
const linkInforamation = document.getElementById('informationLink');
const linkSlider = document.getElementById('sliderLink');
const linkForm = document.getElementById('formLink');
const btnToStart = document.getElementById('backToStart');
const infoLink = document.getElementById('information');
const sliderLink = document.getElementById('slider');
const formLink = document.getElementById('form');

linkText.addEventListener('click', function () {
  titleButton.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});
linkInforamation.addEventListener('click', function () {
  infoLink.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});
linkSlider.addEventListener('click', function () {
  sliderLink.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});
linkForm.addEventListener('click', function () {
  formLink.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});
btnToStart.addEventListener('click', function () {
  window.scrollTo(0, 0);
});

const mainElem = document.getElementById('nameTextarea');
const attrLenght = mainElem.getAttribute('maxlength');
const txtCounter = document.querySelector('.form__icon_textarea span');

txtCounter.innerHTML = attrLenght;
mainElem.addEventListener('keyup', letterCounter);
function letterCounter() {
  const txtCounterResult = attrLenght - mainElem.value.length;
  txtCounter.innerHTML = txtCounterResult;
}

const btnSendForm = document.getElementById('btnSend');
btnSendForm.addEventListener('click', function () {
  alert('Форма была успешно отправлена');
});

// cursor
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', function (e) {
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';
});
