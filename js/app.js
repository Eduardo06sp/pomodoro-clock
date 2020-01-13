/** COUNT DOWN 25 MINUTES **/

const pomodoros = document.querySelector('.pomodoros-count');
const startButton = document.querySelector('.start');
const pauseButton = document.querySelector('.pause');
const stopButton = document.querySelector('.stop');
const status = document.querySelector('.work-mode');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

let timerRunning = 0;
let timerPaused = 0;
let secTimer;


function countSecDown() {
  if (min.textContent == 0 && sec.textContent == 0) {
    clearInterval(secTimer);
    timerRunning = 0;
    if (status.classList.contains('focus')) {
      pomodoros.textContent = parseInt(pomodoros.textContent) + 1;
    }
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
    status.classList.remove('break');
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

  if (status.classList.contains('ready') || (min.textContent == 0 && sec.textContent == 0)) {
    setTimer();
  }

  secTimer = setInterval(countSecDown, 1000);
  timerRunning = 1;
}

function pause() {
  if (timerRunning == 0) {
    return;
  } else {
    clearInterval(secTimer);
    timerRunning = 0;
  }
}

function stop() {
  clearInterval(secTimer);

  pomodoros.textContent = 0;
  status.textContent = 'All ready.';
  status.classList.add('ready');
  status.classList.remove('focus');
  min.textContent = 25;
  sec.textContent = 0;

  timerRunning = 0;
}

startButton.addEventListener('click', start);
pauseButton.addEventListener('click', pause);
stopButton.addEventListener('click', stop);
