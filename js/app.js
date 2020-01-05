/** COUNT DOWN 25 MINUTES **/
const min = document.getElementByClass('min');
const sec = document.getElementByClass('sec');
  console.log(sec);
  console.log('test');

const secTimer = setInterval(countSecDown, 1000);
function countSecDown() {
  sec -= 1;
  console.log(sec);
}
