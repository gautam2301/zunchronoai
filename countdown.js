
let countdownTime = 0, countdownInterval, isCountdownRunning = false;

function updateCountdown() {
    let minutes = Math.floor(countdownTime / 60);
    let seconds = countdownTime % 60;
    document.getElementById("countdownDisplay").innerText = 
        `${pad(minutes)}:${pad(seconds)}`;
}

document.getElementById("startCountdown").addEventListener("click", () => {
    let inputMinutes = parseInt(document.getElementById("countdownMinutes").value);
    if (!isCountdownRunning && inputMinutes > 0) {
        countdownTime = inputMinutes * 60;
        isCountdownRunning = true;
        countdownInterval = setInterval(() => {
            if (countdownTime > 0) {
                countdownTime--;
                updateCountdown();
            } else {
                clearInterval(countdownInterval);
                alert("⏰ Time's up!");
                isCountdownRunning = false;
            }
        }, 1000);
    }
});

document.getElementById("pauseCountdown").addEventListener("click", () => {
    isCountdownRunning = false;
    clearInterval(countdownInterval);
});

document.getElementById("resetCountdown").addEventListener("click", () => {
    isCountdownRunning = false;
    clearInterval(countdownInterval);
    countdownTime = 0;
    updateCountdown();
});

function pad(num) {
    return num.toString().padStart(2, "0");
}
