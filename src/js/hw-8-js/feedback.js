// var throttle = require('lodash.throttle');

const FORMSTATE = "feedback-form-state"

const form = document.querySelector('.feedback-form')
const input = document.querySelector('input')
const textarea = document.querySelector('textarea')

form.addEventListener('submit', onFormSubmit)
form.addEventListener('input', throttle(onFormInput, 500))
populateTextarea()

let formData = JSON.parse(localStorage.getItem(FORMSTATE)) || {};

function onFormSubmit(e) {
        e.preventDefault();
        e.target.reset();
        localStorage.removeItem(FORMSTATE);
        console.log(formData);
}
function onFormInput(e) {
    formData[e.target.name] = e.target.value
    localStorage.setItem(FORMSTATE, JSON.stringify(formData))
    return formData
}
function populateTextarea() {
    const savedMessage = JSON.parse(localStorage.getItem(FORMSTATE));

    if (savedMessage) {
        input.value = savedMessage[input.name] || '';
        textarea.value = savedMessage[textarea.name] || '';
    }
    
}