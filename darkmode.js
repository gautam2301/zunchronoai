const themeToggleBtn = document.getElementById("toggleTheme");
let isDarkMode = localStorage.getItem("isDarkMode") === "true"; 

if (isDarkMode) {
    document.body.classList.add("dark-mode");
    themeToggleBtn.innerText = "Enable ☀️ Mode";
}

themeToggleBtn.addEventListener("click", () => {
    isDarkMode = !isDarkMode; // Toggle dark mode
    localStorage.setItem("isDarkMode", isDarkMode); // Save preference
    document.body.classList.toggle("dark-mode"); // Apply class

    themeToggleBtn.innerText = isDarkMode ? "Enable ☀️ Mode" : "Enable 🌙 Mode"; // Update button text
});