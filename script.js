// In this file, you'll implement the functionality for your stopwatch.
// Here's a general outline of what you need to do:

// 1. Create variables to keep track of the stopwatch state
//    (e.g., time, isRunning, interval)

// 2. Implement functions to:
//    - Start the stopwatch
//    - Stop the stopwatch
//    - Reset the stopwatch
//    - Update the display

// 3. Add event listeners to the buttons to trigger the appropriate functions

// 4. Create a function to format the time (convert milliseconds to MM:SS:MsMs i.e 00:00:00 format)

// Remember to use clear and descriptive variable names, and add comments to explain your code.
// Good luck, and happy coding!

// Selecting DOM elements
const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

// Variables for timer
let startTime;
let elapsedTime = 0;
let timerInterval;

function updateTime() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    
    display.textContent = formatTime(elapsedTime);
}

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 10);
    startBtn.disabled = true;
    stopBtn.disabled = false;
}

function stopTimer() {
    clearInterval(timerInterval);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

function resetTimer() {
    clearInterval(timerInterval);
    display.textContent = '00:00:00';
    elapsedTime = 0;
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

function formatTime(time) {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    return (
        (minutes < 10 ? '0' + minutes : minutes) + ':' +
        (seconds < 10 ? '0' + seconds : seconds) + ':' +
        (milliseconds < 10 ? '0' : '') + milliseconds
    );
}

// Event listeners
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

// Initialize button states
stopBtn.disabled = true;
