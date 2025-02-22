//your JS code here. If required.
// Store references to all buttons and the stop button
const applauseBtn = document.querySelector('.btn:nth-of-type(1)');
const booBtn = document.querySelector('.btn:nth-of-type(2)');
const gaspBtn = document.querySelector('.btn:nth-of-type(3)');
const tadaBtn = document.querySelector('.btn:nth-of-type(4)');
const victoryBtn = document.querySelector('.btn:nth-of-type(5)');
const wrongBtn = document.querySelector('.btn:nth-of-type(6)');
const stopBtn = document.querySelector('.stop');

// Create audio elements for each sound
const applauseSound = new Audio('sounds/applause.mp3');
const booSound = new Audio('sounds/boo.mp3');
const gaspSound = new Audio('sounds/gasp.mp3');
const tadaSound = new Audio('sounds/tada.mp3');
const victorySound = new Audio('sounds/victory.mp3');
const wrongSound = new Audio('sounds/wrong.mp3');

// Function to stop all sounds
function stopAllSounds() {
  applauseSound.pause();
  applauseSound.currentTime = 0;
  booSound.pause();
  booSound.currentTime = 0;
  gaspSound.pause();
  gaspSound.currentTime = 0;
  tadaSound.pause();
  tadaSound.currentTime = 0;
  victorySound.pause();
  victorySound.currentTime = 0;
  wrongSound.pause();
  wrongSound.currentTime = 0;
}

// Event listeners for buttons to play sounds
applauseBtn.addEventListener('click', () => {
  stopAllSounds();
  applauseSound.play();
});

booBtn.addEventListener('click', () => {
  stopAllSounds();
  booSound.play();
});

gaspBtn.addEventListener('click', () => {
  stopAllSounds();
  gaspSound.play();
});

tadaBtn.addEventListener('click', () => {
  stopAllSounds();
  tadaSound.play();
});

victoryBtn.addEventListener('click', () => {
  stopAllSounds();
  victorySound.play();
});

wrongBtn.addEventListener('click', () => {
  stopAllSounds();
  wrongSound.play();
});

// Stop button functionality
stopBtn.addEventListener('click', () => {
  stopAllSounds();
});
