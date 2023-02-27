// Get the necessary elements from the HTML
const frog = document.getElementById('frog');
const gameBoard = document.getElementById('game-board');
const cars = document.querySelectorAll('.car');
const scoreDisplay = document.getElementById('score');
const column = document.querySelectorAll('.column');
// const resetButton = document.getElementById('reset-button');
console.log(column);

// Set the starting position for the frog
let frogX = 190;
let frogY = 5;

// Set the score to zero
let score = 0;

// Set the speed of the game and the cars
const speed = 2;
const carSpeed = 5;

// Move the frog to the starting position
frog.style.left = frogX + 'px';
frog.style.bottom = frogY + 'px';

// // Listen for arrow key presses to move the frog
document.addEventListener('keydown', (event) => {
  if (event.code === 'ArrowUp') {
    moveUp();
  } else if (event.code === 'ArrowDown') {
    moveDown();
  } else if (event.code === 'ArrowLeft') {
    moveLeft();
  } else if (event.code === 'ArrowRight') {
    moveRight();
  }
});


// Move up
function moveUp() {
  frogY += 10;
  frog.style.bottom = frogY + 'px';

  // When the frog crosses the line to score
  if (frogY > 390) {
    frogY = 0;
    score += 1;
    scoreDisplay.textContent = score;
    resetFrog();
  }
}

// Move down
function moveDown() {
  frogY -= 10;
  frog.style.bottom = frogY + 'px';

  // Check if frog has reached the bottom of the board
  if (frogY < 10) {
    frogY = 10;
  }
}

// Move the frog left
function moveLeft() {
  frogX -= 10;
  frog.style.left = frogX + 'px';

  // Check if frog has reached the left border of the board
  if (frogX < 0) {
    frogX = 0;
    frog.style.left = frogX + 'px';
  }
}

// Move the frog right
function moveRight() {
  frogX += 10;
  frog.style.left = frogX + 'px';

  // Check if frog has reached the right border of the board
  if (frogX > 380) {
    frogX = 380;
    frog.style.left = frogX + 'px';
  }
}


let currentIndex1 = 0;
let currentIndex2 = 0;
let currentIndex3 = 0;
let currentIndex4 = 0;
let currentIndex5 = 0;
let currentIndex6 = 0;


// Check collisions with all cars
setInterval(() => {
  colliding = checkCollisionWithCar(currentIndex1)
  checkCollisionWithCar(currentIndex2)
  checkCollisionWithCar(currentIndex3)
  checkCollisionWithCar(currentIndex4)
  checkCollisionWithCar(currentIndex5)
  checkCollisionWithCar(currentIndex6)

  if(colliding){
    console.log("Colliding!")
  }
}, 5)

function checkCollisionWithCar(carIndex){
  frogRect = frog.getBoundingClientRect();
  frogCenterX = (frogRect.left + frogRect.right) / 2;
  frogCenterY = (frogRect.top + frogRect.bottom) / 2;

  carColumn = column[carIndex]
  carRect = carColumn.getBoundingClientRect();
  carCenterX = (carRect.left + carRect.right) / 2;
  carCenterY = (carRect.top + carRect.bottom) / 2;

  gapX = carRect.width/2 + frogRect.width/2
  gapY = carRect.height/2 + frogRect.height/2

  collideX = Math.abs(frogCenterX - carCenterX) < gapX
  collideY = Math.abs(frogCenterY - carCenterY) < gapY

  return collideX && collideY
}



setInterval(() => {
  column[currentIndex1].classList.remove('car--1')
  currentIndex1++
  currentIndex1 = (currentIndex1 + 1) % column.length;
  column[currentIndex1].classList.add('car--1')
},500)

setInterval(() => {
  column[currentIndex2].classList.remove('car--2')
  currentIndex2++
  currentIndex2 = (currentIndex2 + 1) % column.length;
  column[currentIndex2].classList.add('car--2')
},700)

setInterval(() => {
  column[currentIndex3].classList.remove('car--3')
  currentIndex3++
  currentIndex3 = (currentIndex3 + 1) % column.length;
  column[currentIndex3].classList.add('car--3')
},200)

setInterval(() => {
  column[currentIndex4].classList.remove('car--4')
  currentIndex4++
  currentIndex4 = (currentIndex4 + 1) % column.length;
  column[currentIndex4].classList.add('car--4')
},1200)

setInterval(() => {
  column[currentIndex5].classList.remove('car--5')
  currentIndex5++
  currentIndex5 = (currentIndex5 + 1) % column.length;
  column[currentIndex5].classList.add('car--5')
},900)

setInterval(() => {
  column[currentIndex6].classList.remove('car--6')
  currentIndex6++
  currentIndex6 = (currentIndex6 + 1) % column.length;
  column[currentIndex6].classList.add('car--6')
},250)

console.log(cars);


// let currentIndex1 = 0;
// let currentIndex2 = 0;
// let currentIndex3 = 0;
// let currentIndex4 = 0;
// let currentIndex5 = 0;
// let currentIndex6 = 0;

// let intervalUpdate = 20

// setInterval(() => {
//   column[currentIndex1].classList.remove('car--1')
//   currentIndex1 = Math.floor(Math.random() * column.length)
//   column[currentIndex1].classList.add('car--1')
// },intervalUpdate)

// setInterval(() => {
//   column[currentIndex2].classList.remove('car--2')
//   currentIndex2 = Math.floor(Math.random() * column.length)
//   column[currentIndex2].classList.add('car--2')
// },intervalUpdate)

// setInterval(() => {
//   column[currentIndex3].classList.remove('car--3')
//   currentIndex3 = Math.floor(Math.random() * column.length)
//   column[currentIndex3].classList.add('car--3')
// },intervalUpdate)

// setInterval(() => {
//   column[currentIndex4].classList.remove('car--4')
//   currentIndex4 = Math.floor(Math.random() * column.length)
//   column[currentIndex4].classList.add('car--4')
// },intervalUpdate)

// setInterval(() => {
//   column[currentIndex5].classList.remove('car--5')
//   currentIndex5 = Math.floor(Math.random() * column.length)
//   column[currentIndex5].classList.add('car--5')
// },intervalUpdate)

// setInterval(() => {
//   column[currentIndex6].classList.remove('car--6')
//   currentIndex6 = Math.floor(Math.random() * column.length)
//   column[currentIndex6].classList.add('car--6')
// },intervalUpdate)



// Check for collisions between the frog and the cars
function checkCollisions() {
  cars.forEach(car => {
    if (isColliding(frog, car)) {
      resetGame();
    }
  });
}

// Check if two elements are colliding
function isColliding(element1, element2) {
  const element1Rect = element1.getBoundingClientRect();
  const element2Rect = element2.getBoundingClientRect();
  return !(
    element1Rect.bottom < element2Rect.top ||
    element1Rect.top > element2Rect.bottom ||
    element1Rect.right < element2Rect.left ||
    element1Rect.left > element2Rect.right
  );
}




