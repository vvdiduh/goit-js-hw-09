const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
}

let timerId = 0;
refs.stopBtn.disabled = true;

refs.startBtn.addEventListener('click', editBgColor);
refs.stopBtn.addEventListener('click', stopIntrval)

function stopIntrval() {
    clearInterval(timerId)
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
}

function backgroudColor() {
    refs.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function editBgColor() {
    timerId = setInterval(backgroudColor, 500);
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
}

