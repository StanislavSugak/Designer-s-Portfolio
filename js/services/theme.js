const checkbox = document.getElementById('toggle_checkbox');
const theme = document.querySelector("#theme-link");

window.addEventListener('DOMContentLoaded', function() {
  const savedTheme = localStorage.getItem('selectedTheme');
  if (savedTheme) {
    theme.href = savedTheme;
    checkbox.checked = savedTheme === "../css/services/dark.css";
  }
});

checkbox.addEventListener('click', function() {
  if (theme.getAttribute("href") == "../css/services/light.css") {
    theme.href = "../css/services/dark.css";
    
    localStorage.setItem('selectedTheme', "../css/services/dark.css");
  } else {
    theme.href = "../css/services/light.css";

    localStorage.setItem('selectedTheme', "../css/services/light.css");
  }
});