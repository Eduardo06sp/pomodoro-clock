/** COUNT DOWN 25 MINUTES **/

const startButton = document.querySelector('.start');
const status = document.querySelector('.work-mode');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');
let timerRunning = 0;
let secTimer;


function countSecDown() {
  if (min.textContent == 0 && sec.textContent == 0) {
    clearInterval(secTimer);
    timerRunning = 0;
  } else {
    countMinDown();
    sec.textContent -= 1;
  }
}

function countMinDown() {
  if (sec.textContent <= 0) {
    sec.textContent = 60;
    min.textContent -= 1;
  }
}

function setTimer() {
  if (status.classList.contains('ready') || status.classList.contains('break')) {
    status.textContent = 'Focus!'
    status.classList.remove('ready');
    status.classList.add('focus');

    min.textContent = 1;
    sec.textContent = 0;
  } else if (status.classList.contains('focus')) {
    status.textContent = 'Break Time!'
    status.classList.remove('focus');
    status.classList.add('break');

    min.textContent = 5;
    sec.textContent = 0;
  }
}

function start() {
  if (timerRunning == 1) {
    return;
  }

  setTimer();
  secTimer = setInterval(countSecDown, 1000);
  timerRunning = 1;
}

startButton.addEventListener('click', start);
