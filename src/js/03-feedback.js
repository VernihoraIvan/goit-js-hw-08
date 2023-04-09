const input = document.querySelector('input');
const textArea = document.querySelector('textarea');
const throttle = require('lodash.throttle');

if (localStorage.getItem('feedback-form-state')) {
  input.value = JSON.parse(localStorage.getItem('feedback-form-state')).email;
  textArea.value = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).message;
} else {
  input.value = '';
  textArea.value = '';
}
document.addEventListener('keyup', throttle(formInput, 500));

function formInput() {
  const data = {
    email: input.value,
    message: textArea.value,
  };
  console.dir(input);
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

document.addEventListener('submit', () => {
  localStorage.clear();
});
