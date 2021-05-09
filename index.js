//Mobile menu::
const open_btn = document.querySelector('.fa-bars');
const close_btn = document.querySelector('.fa-times');
const overlay = document.querySelector('.overlay');
const mobile_menu = document.querySelector('.mobile__menu');
const hero__img = document.querySelector('.hero__img');

open_btn.addEventListener('click', () => {
  open_btn.classList.add('open_icon--disabled');
  close_btn.classList.add('close_icon--active');
  overlay.classList.add('overlay--active');
  mobile_menu.classList.add('mobile__menu--active');
  hero__img.hidden = true;
});

close_btn.addEventListener('click', () => {
  open_btn.classList.remove('open_icon--disabled');
  close_btn.classList.remove('close_icon--active');
  overlay.classList.remove('overlay--active');
  mobile_menu.classList.remove('mobile__menu--active');
  hero__img.hidden = false;
});

overlay.addEventListener('click', () => {
  close_btn.classList.remove('close_icon--active');
  mobile_menu.classList.remove('mobile__menu--active');
  overlay.classList.remove('overlay--active');
  open_btn.classList.remove('open_icon--disabled');
  hero__img.hidden = false;
});

//Slider:

const testimo__container = document.querySelector('.testimo__container');
const testimo__cards = document.querySelectorAll('.testimo__person');
const get_the_width = document.querySelector('.testimo');
const testimo = document.querySelector('.testimo__person');
const btn_slider = document.querySelectorAll('.buttons_for_slider');
let width = get_the_width.clientWidth;
let index = 0;
let interval = setInterval(slider, 4000);

function slider() {
  if (width < 1440) {
    index++;
    change_cards();
  } else if (width >= 1440 && width < 1650) {
    index++;
    change_cards_bigger();
  } else {
    clearInterval(interval);
  }
}

function change_cards() {
  if (index > testimo__cards.length - 1) {
    btn_slider[3].style.backgroundColor = 'transparent';
    index = 0;
  } else if (index < 0) {
    index = testimo__cards.length - 1;
  }
  testimo__container.style.transform = `translateX(${-index * width}px)`;
  btn_slider[index].style.backgroundColor = '#f25f3a';
  if (index > 0) {
    btn_slider[index - 1].style.backgroundColor = 'transparent';
  }
}

function change_cards_bigger() {
  if (index > testimo__cards.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = testimo__cards.length - 1;
  }
  testimo__container.style.transform = `translateX(${-index * (width / 8)}px)`;
}
//E-mail Validation:
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const email = document.querySelector('#email');
const email_check = document.querySelector('.email__check');
const email_form = document.querySelector('.email__form');
const email_submit = document.querySelector('.email__submit');

email.addEventListener('keydown', () => {
  if (!email.value.match(pattern)) {
    email.classList.add('error');
    email_check.textContent = 'Please insert a valid email.';
    email_check.style.color = '#f25f3a';
    email.style.border = '1px solid #f25f3a';
  } else {
    email_check.textContent = 'Valid e-mail adress.';
    email_check.style.color = '#8ac926';
    email.style.border = 'none';
  }
});

email_form.addEventListener('submit', (e) => {
  e.preventDefault();
});
