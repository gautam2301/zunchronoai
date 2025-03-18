const alarmTimeInput = document.getElementById("alarmTime");
const setAlarmBtn = document.getElementById("setAlarm");
const clearAlarmBtn = document.getElementById("clearAlarm");
const alarmStatus = document.getElementById("alarmStatus");
const alarmSound = document.getElementById("alarmSound");
let alarmTime = null;
let alarmTimeout = null;

 
setAlarmBtn.addEventListener("click", () => {
    setAlarmBtn.addEventListener("click", () => {
        let [hours, minutes] = alarmTimeInput.value.split(":"); // Extract hours & minutes
        hours = parseInt(hours);
    
        // If in 12-hour format, convert input to 24-hour format
        if (!is24HourFormat) {
            let currentHours = new Date().getHours(); // Get current hour in 24-hour format
            let isPM = currentHours >= 12; // Check if it's PM
    
            if (isPM && hours < 12) {
                hours += 12; // Convert AM/PM to 24-hour
            } else if (!isPM && hours === 12) {
                hours = 0; // Convert 12 AM to 00
            }
        }
    
        // Store alarm time in 24-hour format
        alarmTime = `${pad(hours)}:${pad(minutes)}`;
        localStorage.setItem("alarmTime", alarmTime);
        alarmStatus.innerText = `Alarm set for ${alarmTime} (24-hour format)`;
    
        checkAlarm();
    });
    
});

clearAlarmBtn.addEventListener("click", () => {
    localStorage.removeItem("alarmTime");
    alarmStatus.innerText = "No alarm set";
    alarmTime = null;
    clearTimeout(alarmTimeout);
    alarmSound.pause();
    alarmSound.currentTime = 0;
});

let hasAlarmRung = false; // Flag to track if alarm has played

// Function to Check Alarm Every Second
function checkAlarm() {
    if (!alarmTime||hasAlarmRung) return;

    const now = new Date();
    const currentTime = now.toTimeString().slice(0, 5); // Get HH:MM format

    if (currentTime === alarmTime) {
        hasAlarmRung = true; // Mark alarm as played
        alarmSound.play();
        showAlarmPopup(); // Show the popup instead of alert()
    }

    // Keep checking every second
    alarmTimeout = setTimeout(checkAlarm, 1000);
}

// Function to show the alarm popup
function showAlarmPopup() {
    const popup = document.getElementById("alarmPopup");
    popup.style.display = "block";
}

// Dismiss button functionality
document.getElementById("dismissAlarm").addEventListener("click", () => {
    document.getElementById("alarmPopup").style.display = "none";
    alarmSound.pause();
    alarmSound.currentTime = 0;
    hasAlarmRung = false; // Reset flag so the alarm can ring the next time it's set
});

// Load any saved alarm on page refresh
window.onload = () => {
    alarmTime = localStorage.getItem("alarmTime");
    if (alarmTime) {
        alarmStatus.innerText = `Alarm set for ${alarmTime}`;
        checkAlarm(); // Resume alarm checking
    }
};
