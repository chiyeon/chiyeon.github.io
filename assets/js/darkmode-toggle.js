const darkmodeToggle = document.getElementById("darkmode-toggle");
const colorModeStyle = document.getElementById("color-mode-style");

var isDarkMode = false;

function toggleDarkmode() {
   isDarkMode = !isDarkMode;

   if(isDarkMode) {
      darkmodeToggle.textContent = "Light Mode"
      colorModeStyle.setAttribute("href", "/assets/css/dark-mode.css");
   } else {
      darkmodeToggle.textContent = "Dark Mode";
      colorModeStyle.setAttribute("href", "/assets/css/light-mode.css");
   }
}