import getRandom from './utils';
import '../img/goblin.png';

// DOM Elements
const $cells = [...document.querySelectorAll('.field-cell')];
const points = document.getElementsByClassName('points')[0];
const gone = document.getElementsByClassName('gone')[0];

// New elements
const img = document.createElement('img');
img.src = './images/goblin.png';
img.alt = 'satan';
img.id = 'target';
img.className = 'target';

// Generate random start cell
const randStartCell = getRandom(0, $cells.length - 1);
$cells[randStartCell].appendChild(img);

let pointsNum = 0;
let goneNum = 0;
let isClicked = false;

// Generate random cell in interval
const interval = setInterval(() => {
  if (goneNum === 4) {
    clearInterval(interval);
    alert(`Вы проиграли заработав ${pointsNum} очков`);
    document.location.reload();
  }

  const randCell = getRandom(0, $cells.length - 1);
  if (randCell !== randStartCell) {
    $cells[randCell].appendChild(img);
  }

  if (!isClicked) {
    goneNum += 1;
    gone.textContent = goneNum;
  }

  isClicked = false;
}, 1000);

const target = document.getElementById('target');

target.addEventListener('click', (event) => {
  event.target.remove();

  isClicked = true;

  pointsNum += 1;
  points.textContent = pointsNum;
});
