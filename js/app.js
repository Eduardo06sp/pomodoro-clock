/** COUNT DOWN 25 MINUTES **/

const startButton = document.querySelector('.start');
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

function start() {
  const secTimer = setInterval(countSecDown, 1000);
}

startButton.addEventListener('click', start);
