'use strict';
function sliders() {
  const advantages = document.querySelector(`.advantages`);
  const advantagesBoolets = advantages.querySelectorAll(`.boolets__boolet`);
  const advantagesList = advantages.querySelectorAll(`.advantages__item`);

  const info = document.querySelector(`.info`);
  const infoBoolets = info.querySelectorAll(`.boolets__boolet`);
  const infoList = info.querySelectorAll(`.info__item`);

  const reviews = document.querySelector(`.reviews`);
  const reviewsBoolets = reviews.querySelectorAll(`.boolets__boolet`);
  const reviewsList = reviews.querySelectorAll(`.reviews__item`);

  advantagesBoolets.forEach((boolet, i) => {
    boolet.addEventListener(`click`, evt => {
      evt.preventDefault();
      removeClass(advantagesBoolets, `boolets__boolet--active`);
      removeClass(advantagesList, `advantages__item--active`);
      addClass(boolet, `boolets__boolet--active`);
      addClass(advantagesList[i], `advantages__item--active`);
    })
  });

  infoBoolets.forEach((boolet, i) => {
    boolet.addEventListener(`click`, evt => {
      evt.preventDefault();
      removeClass(infoBoolets, `boolets__boolet--active`);
      removeClass(infoList, `info__item--active`);
      addClass(boolet, `boolets__boolet--active`);
      addClass(infoList[i], `info__item--active`);
    })
  });

  reviewsBoolets.forEach((boolet, i) => {
    boolet.addEventListener(`click`, evt => {
      evt.preventDefault();

      removeClass(reviewsBoolets, `boolets__boolet--active`);
      removeClass(reviewsList, `reviews__item--active`);
      addClass(boolet, `boolets__boolet--active`);
      addClass(reviewsList[i], `reviews__item--active`);
    })
  });


  function removeClass (elements, className) {
    elements.forEach(el => {
      el.classList.remove(className);
    });
  }
  function addClass (elements, className) {
    elements.classList.add(className);
  }

};
sliders();

function form() {
  const form = document.querySelector(`#form`);
  const email = form.querySelector(`.footer__email`);

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formMail = [...evt.target.elements].filter((item) => item.name === 'email');
    if (!validate(form, formMail)) {
      email.style.border = `2px solid red`;
    } else {
      console.log(`Валидация прошла`);
    }
  });

  function validate(form, formMail) {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(reg.test(email.value) === false) {
       return false;
    }
    return true;
  }

  email.addEventListener(`blur`, () => {
    email.style.border = `2px solid white`;
  });
  email.addEventListener(`focus`, () => {
    email.style.border = `2px solid green`;
  })

}
form();

const  scroll = () => {
  const link = document.querySelectorAll('a');
  link.forEach(element => {
    if (element.getAttribute('href')) {
      let symbol = element.getAttribute('href').substr(0, 1);
      if (symbol === '#' && element.getAttribute('href').substr(1).length > 0) {   
        element.addEventListener('click', (evt) => {
          evt.preventDefault();
          let link = element.getAttribute('href').substr(1);
          document.getElementById(link).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
            
        });
      }
    }
  });
};
scroll();
