// Get the necessary elements from the HTML
const { JSDOM } = require('jsdom');

const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');

// Access the document object from the JSDOM instance
const document = dom.window.document;

const frog = document.getElementById('.frog');
const gameBoard = document.getElementById('game-board');
const cars = document.querySelectorAll('.car');
const scoreDisplay = document.getElementById('score');
const column = document.querySelectorAll('.column');

const express = require('express');
const app = express();

const port = process.env.PORT || 3000; // Use the provided port by Heroku or default to 3000

app.use(express.static(__dirname));

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});

app.get('/', (req, res) => {
  res.send('Hello, world!');
});


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


// Impossible Portion if wanting to slow down cards change the Math.random to a set amount

let currentIndex1 = 0;
let currentIndex2 = 0;
let currentIndex3 = 0;
let currentIndex4 = 0;
let currentIndex5 = 0;
let currentIndex6 = 0;

let intervalUpdate = 20

setInterval(() => {
  column[currentIndex1].classList.remove('car--1')
  currentIndex1 = Math.floor(Math.random() * column.length)
  column[currentIndex1].classList.add('car--1')
},intervalUpdate)

setInterval(() => {
  column[currentIndex2].classList.remove('car--2')
  currentIndex2 = Math.floor(Math.random() * column.length)
  column[currentIndex2].classList.add('car--2')
},intervalUpdate)

setInterval(() => {
  column[currentIndex3].classList.remove('car--3')
  currentIndex3 = Math.floor(Math.random() * column.length)
  column[currentIndex3].classList.add('car--3')
},intervalUpdate)

setInterval(() => {
  column[currentIndex4].classList.remove('car--4')
  currentIndex4 = Math.floor(Math.random() * column.length)
  column[currentIndex4].classList.add('car--4')
},intervalUpdate)

setInterval(() => {
  column[currentIndex5].classList.remove('car--5')
  currentIndex5 = Math.floor(Math.random() * column.length)
  column[currentIndex5].classList.add('car--5')
},intervalUpdate)

setInterval(() => {
  column[currentIndex6].classList.remove('car--6')
  currentIndex6 = Math.floor(Math.random() * column.length)
  column[currentIndex6].classList.add('car--6')
},intervalUpdate)




// Check for collisions between the frog and the cars
setInterval(() => {
  checkCollisions();
}, 5);

function checkCollisions() {
  checkCollisionWithCar(currentIndex1);
  checkCollisionWithCar(currentIndex2);
  checkCollisionWithCar(currentIndex3);
  checkCollisionWithCar(currentIndex4);
  checkCollisionWithCar(currentIndex5);
  checkCollisionWithCar(currentIndex6);
}

function checkCollisionWithCar(carIndex) {
  if (isColliding(frog, column[carIndex])) {
    resetGame();
  }
}

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

function resetGame() {
  // frogX = 190;
  frogY = 5;
  score = 0;
  scoreDisplay.textContent = score;
  frog.style.left = frogX + 'px';
  frog.style.bottom = frogY + 'px';
}