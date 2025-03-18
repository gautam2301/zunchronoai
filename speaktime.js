// Function to announce the current time using Web Speech API
function speakTime() {
    if ('speechSynthesis' in window) {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        let ampm = hours >= 12 ? "PM" : "AM";

        // Convert to 12-hour format if needed
        if (!is24HourFormat) {
            hours = hours % 12 || 12;
        }

        const timeText = is24HourFormat
            ? `The time is ${hours} hours, ${minutes} minutes, and ${seconds} seconds`
            : `The time is ${hours} ${minutes} ${seconds} ${ampm}`;

        const utterance = new SpeechSynthesisUtterance(timeText);
        utterance.lang = 'en-US'; // Set language
        speechSynthesis.speak(utterance); // Speak the time
    } else {
        alert("Sorry, your browser does not support speech synthesis.");
    }
}

// Attach event listener to the button
document.getElementById("speakTime").addEventListener("click", speakTime);

// setInterval(() => {
//     updateClock();
//     speakTime(); // Announce time every minute
// }, 60000);
