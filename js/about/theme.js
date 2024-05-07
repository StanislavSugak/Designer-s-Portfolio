const checkbox = document.getElementById('toggle_checkbox');
const theme = document.querySelector("#theme-link");

window.addEventListener('DOMContentLoaded', function() {
  const savedTheme = localStorage.getItem('selectedTheme');
  if (savedTheme) {
    theme.href = savedTheme;
    checkbox.checked = savedTheme === "../css/about/dark.css";
  }
});

checkbox.addEventListener('click', function() {
  if (theme.getAttribute("href") == "../css/about/light.css") {
    theme.href = "../css/about/dark.css";
    localStorage.setItem('selectedTheme', "../css/about/dark.css");
  } else {
    theme.href = "../css/about/light.css";
    localStorage.setItem('selectedTheme', "../css/about/light.css");
  }
});