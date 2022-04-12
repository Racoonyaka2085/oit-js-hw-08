import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');

const formData = {};

dataFromLocalStorage();

formRef.addEventListener(
    'input',
    throttle(event => {
        event.preventDefault();
        formData[event.target.name] = event.target.value;
        localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    }, 500),
);

formRef.addEventListener('submit', event => {
    event.preventDefault();
    if (event.target.email.value === '' || event.target.message.value === '') {
        return alert('Please fill in all the fields!');
    }

    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
});

function dataFromLocalStorage() {
    let data = localStorage.getItem('feedback-form-state');
    if (data) {
        data = JSON.parse(data);
        Object.entries(data).forEach(([name, value]) => {
            formData[name] = value;
            formRef.elements[name].value = value;
        });
    }
}