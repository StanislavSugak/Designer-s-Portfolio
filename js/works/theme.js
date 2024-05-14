const checkbox = document.getElementById('toggle_checkbox');
const theme = document.querySelector("#theme-link");

window.addEventListener('DOMContentLoaded', function() {
  const savedTheme = localStorage.getItem('selectedTheme');
  if (savedTheme) {
    theme.href = savedTheme;
    checkbox.checked = savedTheme === "../css/works/dark.css";
  }
});

checkbox.addEventListener('click', function() {
  if (theme.getAttribute("href") == "../css/works/light.css") {
    theme.href = "../css/works/dark.css";
    
    localStorage.setItem('selectedTheme', "../css/works/dark.css");
  } else {
    theme.href = "../css/works/light.css";

    localStorage.setItem('selectedTheme', "../css/works/light.css");
  }
});