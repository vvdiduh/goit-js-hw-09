const form = document.querySelector('.form');

form.addEventListener('submit', submit);

function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
    return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
    // Fulfill
      resolve({position, delay});
    } else {
    // Reject
      reject({position, delay});
    }
    }, delay)
  })
}

function submit (event) {
  event.preventDefault();
  let delay = Number(event.target.delay.value);
  const delayStep = Number(event.target.step.value);
  const amount = Number(event.target.amount.value);
  // console.log(parametersPromis.delay, parametersPromis.delayStep, parametersPromis.position);
  for (let i = 0; i < amount; i += 1) {
    // console.log(`${i + 1} проміс`);
    // console.log('затримка:', delay);
    createPromise(i, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += delayStep;
  }
  
}
