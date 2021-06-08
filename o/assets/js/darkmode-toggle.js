const colorModeStyle = document.getElementById("color-mode-style");
var darkmodeToggle;

var isDarkMode = JSON.parse(localStorage.getItem("isDarkMode"));

// toggles
function toggleDarkmode() {
   isDarkMode = !isDarkMode;
   localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
   UpdateDarkmode();
}

// updates the button text and style sheet
function UpdateDarkmode() {
   if(isDarkMode) {
      darkmodeToggle.textContent = "Light";
      colorModeStyle.setAttribute("href", "/assets/css/dark-mode.css");
   } else {
      darkmodeToggle.textContent = "Dark";
      colorModeStyle.setAttribute("href", "/assets/css/light-mode.css");
   }
}

// immediately load the CSS before page initializes, that way avoids transition
if(isDarkMode) {
   colorModeStyle.setAttribute("href", "/assets/css/dark-mode.css");
} else {
   colorModeStyle.setAttribute("href", "/assets/css/light-mode.css");
}

window.onload = function() {
   darkmodeToggle = document.getElementById("darkmode-toggle");

   // update just the text now that the darkmodeToggle button exists
   if(isDarkMode) {
      darkmodeToggle.textContent = "Light";
   } else {
      darkmodeToggle.textContent = "Dark";
   }
}