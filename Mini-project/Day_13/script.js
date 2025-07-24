const DisplayWatch = document.querySelector('.display');
const startBtn = document.querySelector('.startBtn');
const stopBtn = document.querySelector('.stopBtn');
const resetBtn = document.querySelector('.resetBtn');

let [seconds, minutes, hours] = [0, 0, 0];
let timmer = null;

function StopWatch() {
    seconds++;

    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }

    if (minutes == 60) {
        minutes = 0;
        hours++;
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    DisplayWatch.textContent = `${h} : ${m} : ${s}`;
}

startBtn.addEventListener('click', function () {
    if (timmer === null) { 
        timmer = setInterval(StopWatch, 1000);
    }
});

stopBtn.addEventListener('click', function () {
    clearInterval(timmer);
    timmer = null;
});

resetBtn.addEventListener('click', function () {
    clearInterval(timmer);
    [seconds, minutes, hours] = [0, 0, 0];
    DisplayWatch.innerText = "00 : 00 : 00";
    timmer = null;
});
