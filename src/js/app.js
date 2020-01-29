import getRandom from './utils';
import '../img/goblin.png';

// DOM Elements
const $cells = [...document.querySelectorAll('.field-cell')];

// New elements
const img = document.createElement('img');
img.src = './images/goblin.png';
img.alt = 'satan';

// Generate random start cell
const randStartCell = getRandom(0, $cells.length - 1);
$cells[randStartCell].appendChild(img);

// Generate random cell in interval
setInterval(() => {
  const randCell = getRandom(0, $cells.length - 1);
  if (randCell !== randStartCell) {
    $cells[randCell].appendChild(img);
  }
}, 3000);
