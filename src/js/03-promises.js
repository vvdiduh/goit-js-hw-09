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

  for (let i = 0; i < amount; i += 1) {

    createPromise(i, delay)
      .then(({ position, delay }) => {
        // console.log(position, delay);
        if (delay < 0) {
          console.log('Значення не може бути відємним');
          return;
        }
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += delayStep;
  } 
}

function error() {
  console.log("Значення не може бути відємним");
}