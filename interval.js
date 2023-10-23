/* let start = 0;
const intervalId = setInterval(() => {
    console.log(++start);
    if (start === 10) {
        clearInterval(intervalId);
    }
}, 1000);
 */

let start = 0;
let intervalId;
let remainingTime = 0; // Track the remaining time

const updateDisplayClock = value => {
    const displayClock = document.getElementById('display-clock');
    displayClock.textContent = `${value}`;
};

document.getElementById('start-btn').addEventListener('click', function () {
    if (!intervalId) {
        if (remainingTime > 0) {
            // If there's remaining time, start the countdown from there
            start = remainingTime;
        } else {
            start = 1;
        }

        updateDisplayClock(start);

        intervalId = setInterval(() => {
            start++;
            updateDisplayClock(start);

            if (start === 20) {
                clearInterval(intervalId);
                intervalId = null;
            }
        }, 1000);
    }
});

document.getElementById('stop-btn').addEventListener('click', function () {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
        remainingTime = start;
    }
});

document.getElementById('reset-btn').addEventListener('click', function () {
    start = 0;
    remainingTime = 0; // Reset the remaining time
    updateDisplayClock(start);
});
