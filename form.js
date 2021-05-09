const fullname_div = document.querySelector('.fullname');
const username_div = document.querySelector('.username');
const password_div = document.querySelector('.password');
const email_div = document.querySelector('.email');
const fullname = document.querySelector('#fullname');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const email = document.querySelector('#email');
const btn = document.querySelector('.btn');
const form = document.querySelector('form');
const password_pattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/;
const email_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const error = form.addEventListener('change' && 'submit', (e) => {
  if (fullname.value === '' || fullname.value == null) {
    e.preventDefault();
    fullname_div.setAttribute('error', 'This field can not be empty.');
  }

  if (username.value === '' || username.value === null) {
    e.preventDefault();
    username_div.setAttribute('error', 'This field can not be empty.');
  }

  if (password.value === '' || password.value === null) {
    e.preventDefault();
    password_div.setAttribute('error', 'This field can not be empty.');
  }

  if (email.value === '' || email.value === null) {
    e.preventDefault();
    email_div.setAttribute('error', 'This field can not be empty.');
  }
});

password.addEventListener('input', () => {
  if (password.value.length <= 6) {
    password_div.setAttribute(
      'error',
      'Password should be longer than six characters.'
    );
  } else {
    password_div.removeAttribute('error');
  }
  if (!password.value.match(password_pattern)) {
    password_div.setAttribute(
      'error',
      'Password should contain at least one number, one lowercase and uppercase character.'
    );
  }
});

fullname.addEventListener('input', () => {
  if (fullname.value.length > 1) {
    fullname_div.removeAttribute('error');
  }
});

username.addEventListener('input', () => {
  if (username.value.length > 1) {
    username_div.removeAttribute('error');
  }
});

email.addEventListener('input', () => {
  if (!email.value.match(email_regex)) {
    email_div.setAttribute('error', 'Please insert a valid e-mail address.');
  } else {
    email_div.removeAttribute('error');
  }
});
