const form = document.querySelector('.login-form')

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    if (event.currentTarget.elements.email.value != "" && event.currentTarget.elements.password.value != "") {
        const mail = event.currentTarget.elements.email.value
        const password = event.currentTarget.elements.password.value

        const data = {
            mail, password
        }
        event.currentTarget.reset()
        console.log(data);
    } else {
        alert('Всі поля повинні бути заповнені.')
    }
}