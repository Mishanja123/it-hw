import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onFormSubmit);



function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}



function onFormSubmit(e) {
  e.preventDefault();

  const delay = e.target.delay;
  const step = e.target.step;
  const amount = e.target.amount;

  let delayEl = parseInt(delay.value);
  let stepEl = parseInt(step.value);
  let amountEl = parseInt(amount.value);
  if (delayEl < 0 || stepEl < 0 || amountEl <= 0) {
    Notiflix.Notify.warning(`Please put positive value`);
  }
  else {
    for (let i = 0; i < amount.value; i++) {
      createPromise(i + 1, delayEl)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);
        });
      delayEl += stepEl;
    }
  }
  formEl.reset();
    }