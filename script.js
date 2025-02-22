// Store references to all buttons and the stop button
const applauseBtn = document.querySelector('.btn:nth-of-type(1)');
const booBtn = document.querySelector('.btn:nth-of-type(2)');
const gaspBtn = document.querySelector('.btn:nth-of-type(3)');
const tadaBtn = document.querySelector('.btn:nth-of-type(4)');
const victoryBtn = document.querySelector('.btn:nth-of-type(5)');
const wrongBtn = document.querySelector('.btn:nth-of-type(6)');
const stopBtn = document.querySelector('.stop');

// Get the audio player
const player = document.getElementById('player');

// Function to stop the sound and reset it
function stopAllSounds() {
  player.pause();
  player.currentTime = 0;
}

// Event listeners for buttons to play sounds
applauseBtn.addEventListener('click', () => {
  stopAllSounds();
  player.src = 'sounds/applause.mp3';
  player.play();
});

booBtn.addEventListener('click', () => {
  stopAllSounds();
  player.src = 'sounds/boo.mp3';
  player.play();
});

gaspBtn.addEventListener('click', () => {
  stopAllSounds();
  player.src = 'sounds/gasp.mp3';
  player.play();
});

tadaBtn.addEventListener('click', () => {
  stopAllSounds();
  player.src = 'sounds/tada.mp3';
  player.play();
});

victoryBtn.addEventListener('click', () => {
  stopAllSounds();
  player.src = 'sounds/victory.mp3';
  player.play();
});

wrongBtn.addEventListener('click', () => {
  stopAllSounds();
  player.src = 'sounds/wrong.mp3';
  player.play();
});

// Stop button functionality
stopBtn.addEventListener('click', () => {
  stopAllSounds();
});
