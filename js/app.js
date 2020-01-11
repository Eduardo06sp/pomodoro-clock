/** COUNT DOWN 25 MINUTES **/

const startButton = document.querySelector('.start');
const status = document.querySelector('.work-mode');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');


function countSecDown() {
  if (min.textContent == 0 && sec.textContent == 0) {
    clearInterval(countSecDown);
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
    min.textContent = 25;
    sec.textContent = 0;
  }

  if (status.classList.contains('focus')) {
    min.textContent = 5;
    sec.textContent = 0;
  }
}

function start() {
  setTimer();
  const secTimer = setInterval(countSecDown, 1000);
}

startButton.addEventListener('click', start);
