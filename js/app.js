/** COUNT DOWN 25 MINUTES **/
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

const secTimer = setInterval(countSecDown, 1000);

function countSecDown() {
  if (sec.textContent <= 0) {
    sec.textContent = 60;
    min.textContent -= 1;
  }

  sec.textContent -= 1;
}
