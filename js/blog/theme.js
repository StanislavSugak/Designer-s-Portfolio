const checkbox = document.getElementById('toggle_checkbox');
const theme = document.querySelector("#theme-link");

window.addEventListener('DOMContentLoaded', function() {
  const savedTheme = localStorage.getItem('selectedTheme');
  if (savedTheme) {
    theme.href = savedTheme;
    checkbox.checked = savedTheme === "../css/blog/dark.css";
  }
});

checkbox.addEventListener('click', function() {
  if (theme.getAttribute("href") == "../css/blog/light.css") {
    theme.href = "../css/blog/dark.css";
    
    localStorage.setItem('selectedTheme', "../css/blog/dark.css");
  } else {
    theme.href = "../css/blog/light.css";

    localStorage.setItem('selectedTheme', "../css/blog/light.css");
  }
});