/** COUNT DOWN 25 MINUTES **/

const pomodoros = document.querySelector('.pomodoros-count');
const startButton = document.querySelector('.start');
const pauseButton = document.querySelector('.pause');
const stopButton = document.querySelector('.stop');
const increaseButton = document.querySelector('.increase');
const decreaseButton = document.querySelector('.decrease');
const status = document.querySelector('.work-mode');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');
let lastFocusTime = 25;
let lastBreakTime = 5;

let timerRunning = 0;
let timerPaused = 0;
let secTimer;


function countSecDown() {
  if (min.textContent == 0 && sec.textContent == 0) {
    clearInterval(secTimer);
    timerRunning = 0;

    if (status.classList.contains('ready') || status.classList.contains('focus')) {
      status.textContent = 'Get ready for break time!';
      min.textContent = lastBreakTime;
    } else if (status.classList.contains('break')) {
      status.textContent = 'Get ready to focus!';
      min.textContent = lastFocusTime;
    }

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

    sec.textContent = 0;
  } else if (status.classList.contains('focus')) {
    status.textContent = 'Break Time!'
    status.classList.remove('focus');
    status.classList.add('break');

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

function increaseMin() {
  if (timerRunning == 1) {
    return;
  }

  min.textContent = parseInt(min.textContent) + 1;

  if (status.classList.contains('focus')) {
    lastBreakTime = min.textContent;
  } else if (status.classList.contains('ready') || status.classList.contains('break'))  {
    lastFocusTime = min.textContent;
  }
}

function decreaseMin() {
  if (timerRunning == 1 || min.textContent == 0) {
    return;
  }

  min.textContent = parseInt(min.textContent) - 1;

  if (status.classList.contains('focus')) {
    lastBreakTime = min.textContent;
  } else if (status.classList.contains('ready') || status.classList.contains('break'))  {
    lastFocusTime = min.textContent;
  }
}

startButton.addEventListener('click', start);
pauseButton.addEventListener('click', pause);
stopButton.addEventListener('click', stop);
increaseButton.addEventListener('click', increaseMin);
decreaseButton.addEventListener('click', decreaseMin);
