let countdownTime = 600;
let countdownInterval;
let timerDisplay;

const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("pauseButton");
const resetButton = document.getElementById("resetButton");
const addOneSecond = document.getElementById("addOneSecond");
const addTenSeconds = document.getElementById("addTenSeconds");
const addSixtySeconds = document.getElementById("addSixtySeconds");
const subtractOneSecond = document.getElementById("subtractOneSecond");
const subtractTenSeconds = document.getElementById("subtractTenSeconds");
const subtractSixtySeconds = document.getElementById("subtractSixtySeconds");

function updateTimer() {
    let minutes = Math.floor(countdownTime / 60);
    let seconds = countdownTime % 60;

    timerDisplay.innerHTML = (minutes < 10 ? `0${minutes}` : minutes) + ':' + (seconds < 10 ? `0${seconds}` : seconds);
    startButton.disabled = true;
    pauseButton.disabled = false;
    resetButton.disabled = true;

    if (countdownTime <= 0) {
        timerDisplay.innerHTML = '00:00';
    } else {
        countdownTime--;
    }
};

function startCountdown() {
    timerDisplay = document.getElementById('timer');

    updateTimer();

    countdownInterval = setInterval(updateTimer, 1000);
    resetButton.disabled = true;
    addOneSecond.disabled = true;
    addTenSeconds.disabled = true;
    addSixtySeconds.disabled = true;
    subtractOneSecond.disabled = true;
    subtractTenSeconds.disabled = true;
    subtractSixtySeconds.disabled = true;
};

function pauseCountdown() {
    clearInterval(countdownInterval);
    startButton.disabled = false;
    pauseButton.disabled = true;
    resetButton.disabled = false;
    addOneSecond.disabled = false;
    addTenSeconds.disabled = false;
    addSixtySeconds.disabled = false;
    subtractOneSecond.disabled = false;
    subtractTenSeconds.disabled = false;
    subtractSixtySeconds.disabled = false;
};

function resetCountdown() {
    clearInterval(countdownInterval);
    countdownTime = 600;
    let timerDisplay = document.getElementById('timer');
    timerDisplay.innerHTML = '10:00';
    startButton.disabled = false;
    pauseButton.disabled = true;
    resetButton.disabled = true;
    addOneSecond.disabled = true;
    addTenSeconds.disabled = true;
    addSixtySeconds.disabled = true;
    subtractOneSecond.disabled = true;
    subtractTenSeconds.disabled = true;
    subtractSixtySeconds.disabled = true;
};

addOneSecond.addEventListener("click", function() {
    countdownTime += 2;
    countdownTime = Math.ceil(countdownTime);
    updateTimer();
    startButton.disabled = false;
    pauseButton.disabled = true;
    resetButton.disabled = false;

});

addTenSeconds.addEventListener("click", function() {
    countdownTime += 11;
    countdownTime = Math.ceil(countdownTime);
    updateTimer();
    startButton.disabled = false;
    pauseButton.disabled = true;
    resetButton.disabled = false;

});

addSixtySeconds.addEventListener("click", function() {
    countdownTime += 61;
    countdownTime = Math.ceil(countdownTime);
    updateTimer();
    startButton.disabled = false;
    pauseButton.disabled = true;
    resetButton.disabled = false;

});

subtractOneSecond.addEventListener("click", function() {
    countdownTime -= 0.5;
    countdownTime = Math.ceil(countdownTime);
    updateTimer();
    startButton.disabled = false;
    pauseButton.disabled = true;
    resetButton.disabled = false;

});

subtractTenSeconds.addEventListener("click", function() {
    countdownTime -= 9;
    countdownTime = Math.ceil(countdownTime);
    updateTimer();
    startButton.disabled = false;
    pauseButton.disabled = true;
    resetButton.disabled = false;

});

subtractSixtySeconds.addEventListener("click", function() {
    countdownTime -= 59;
    countdownTime = Math.ceil(countdownTime);
    updateTimer();
    startButton.disabled = false;
    pauseButton.disabled = true;
    resetButton.disabled = false;

});

startButton.addEventListener("click", startCountdown);
pauseButton.addEventListener("click", pauseCountdown);
resetButton.addEventListener("click", resetCountdown);