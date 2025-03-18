const toggleBtn = document.getElementById("toggleFormat");
const formatLabel = document.getElementById("formatLabel");

let is24HourFormat = localStorage.getItem("is24HourFormat") === "true";

// Toggle Format Button
toggleBtn.addEventListener("click", () => {
    is24HourFormat = !is24HourFormat;
    localStorage.setItem("is24HourFormat", is24HourFormat);
    toggleBtn.innerText = is24HourFormat ? "Switch to 12-hour" : "Switch to 24-hour";
    updateClock(); // Refresh clock display with animation
});