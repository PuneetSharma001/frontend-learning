const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const stopBtn = document.getElementById("stopBtn");
const lapBtn = document.getElementById("lapBtn");
const laps = document.getElementById("laps");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function formatTime(ms) {
  let totalSeconds = Math.floor(ms / 1000);
  let hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  let minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  let seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

function updateDisplay() {
  display.textContent = formatTime(elapsedTime);
}

startBtn.addEventListener("click", () => {
  if (!timerInterval) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      updateDisplay();
    }, 1000);
  }
});

pauseBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
});

stopBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedTime = 0;
  updateDisplay();
  laps.innerHTML = "";
});

lapBtn.addEventListener("click", () => {
  if (elapsedTime > 0) {
    const li = document.createElement("li");
    li.textContent = formatTime(elapsedTime);
    laps.appendChild(li);
  }
});

updateDisplay();
