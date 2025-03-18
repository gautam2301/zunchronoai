const timezoneSelector = document.getElementById("timezoneSelector");

let selectedTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
updateClock();

timezoneSelector.addEventListener("change", () => {
    selectedTimezone = timezoneSelector.value;
    localStorage.setItem("selectedTimezone", selectedTimezone);
    updateClock(); // Refresh the clock immediately
});
