let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

function updateDisplay() {
  const time = new Date(elapsedTime);
  const minutes = String(time.getUTCMinutes()).padStart(2, '0');
  const seconds = String(time.getUTCSeconds()).padStart(2, '0');
  const milliseconds = String(Math.floor(time.getUTCMilliseconds() / 10)).padStart(2, '0');
  document.getElementById('display').textContent = `${minutes}:${seconds}:${milliseconds}`;
}

function startStopwatch() {
  if (!isRunning) {
    isRunning = true;
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      updateDisplay();
    }, 10);
  }
}

function pauseStopwatch() {
  if (isRunning) {
    clearInterval(timerInterval);
    isRunning = false;
  }
}

function resetStopwatch() {
  clearInterval(timerInterval);
  isRunning = false;
  elapsedTime = 0;
  updateDisplay();
  document.getElementById('laps').innerHTML = '';
}

function recordLap() {
  if (!isRunning) return;
  const lapItem = document.createElement('li');
  lapItem.textContent = document.getElementById('display').textContent;
  document.getElementById('laps').appendChild(lapItem);
}
