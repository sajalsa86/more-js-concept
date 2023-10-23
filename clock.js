let start = 0;
let intervalId;
let remainingTime;

const updateDisplayClock = value => {
    const displayClock = document.getElementById('display-clock');
    displayClock.innerText = value;
}

document.getElementById('start-btn').addEventListener('click', function () {
    if (!intervalId) {
        if (remainingTime > 0) {
            start = remainingTime;
        } else {
            start = 1;
        }
        updateDisplayClock(start)
        intervalId = setInterval(() => {
            start++;
            updateDisplayClock(start);
            if (start === 15) {
                clearInterval(intervalId)
                intervalId = null;
            }
        }, 1000)
    }
});
document.getElementById('stop-btn').addEventListener('click', function () {
    if (intervalId) {
        clearInterval(intervalId)
        intervalId = null;
        remainingTime = start
    }
});
document.getElementById('reset-btn').addEventListener('click', function () {
    start = 0;
    remainingTime = 0;
    updateDisplayClock(start)
});