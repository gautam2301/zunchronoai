
let stopwatchTime = 0, stopwatchInterval, isStopwatchRunning = false;

function updateStopwatch() {
    let hours = Math.floor(stopwatchTime / 3600);
    let minutes = Math.floor((stopwatchTime % 3600) / 60);
    let seconds = stopwatchTime % 60;
    document.getElementById("stopwatchDisplay").innerText = 
        `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

document.getElementById("startStopwatch").addEventListener("click", () => {
    if (!isStopwatchRunning) {
        isStopwatchRunning = true;
        stopwatchInterval = setInterval(() => {
            stopwatchTime++;
            updateStopwatch();
        }, 1000);
    }
});

document.getElementById("pauseStopwatch").addEventListener("click", () => {
    isStopwatchRunning = false;
    clearInterval(stopwatchInterval);
});

document.getElementById("resetStopwatch").addEventListener("click", () => {
    isStopwatchRunning = false;
    clearInterval(stopwatchInterval);
    stopwatchTime = 0;
    updateStopwatch();
});

function pad(num) {
    return num.toString().padStart(2, "0");
}
