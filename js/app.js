/** COUNT DOWN 25 MINUTES **/
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

const secTimer = setInterval(countSecDown, 1000);

function countSecDown() {
  if (min.textContent == 0 && sec.textContent == 0) {
    clearInterval(secTimer);
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
