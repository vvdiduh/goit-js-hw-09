// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

// let featureDate = 0;
let finishTime = 0;
const refs = {
    inputDate: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
}

// timer.start()
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    minDate: 'today',
    onClose(selectedDates) {
        finishTime = selectedDates[0].getTime();
        if (finishTime > Date.now()) {
            refs.startBtn.disabled = false;
        }
        else {
            refs.startBtn.disabled = true;
        }
    },
};

refs.startBtn.addEventListener('click', timer)

refs.startBtn.disabled = true;

flatpickr(refs.inputDate, options);

function timer () {
        setInterval(() => {;
            const nowDate = new Date().getTime();
            const deltaTime = finishTime - nowDate;
            const { days, hours, minutes, seconds } = convertMs(deltaTime);
            updateClockFace({ days, hours, minutes, seconds })
            console.log(deltaTime);
            if (deltaTime < 1000) {
                clearInterval
            }
        }, 1000)
    refs.startBtn.disabled = true;
}

function pad(value) {
    return String(value).padStart(2, '0');
}

function updateClockFace({ days, hours, minutes, seconds }) {
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.minutes.textContent = `${minutes}`;
    refs.seconds.textContent = `${seconds}`;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
}

