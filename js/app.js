/** COUNT DOWN 25 MINUTES **/
const min = document.getElementsByClassName('min');
const sec = document.getElementsByClassName('sec');

const secTimer = setInterval(countSecDown, 1000);
function countSecDown() {
  sec -= 1;
}
