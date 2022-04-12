import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');

const formData = {};
formRef.addEventListener('input', throttle((event) => {
    event.preventDefault();
    formData[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500));

formRef.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
})

function dataFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem('feedback-form-state'));
    const email = document.querySelector('.feedback-form input');
    const message = document.querySelector('.feedback-form textarea');
    if (data) {
        email.value = data.email;
        message.value = data.message;
    }
}
dataFromLocalStorage();