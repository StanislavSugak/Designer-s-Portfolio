const checkbox = document.getElementById('toggle_checkbox');
const theme = document.querySelector("#theme-link");

for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  console.log(`${key}: ${value}`);
}

window.addEventListener('DOMContentLoaded', function() {
  const savedTheme = localStorage.getItem('selectedTheme');
  if (savedTheme && (savedTheme === "dark" || savedTheme === "light")) {
    checkbox.checked = savedTheme === "dark";

    var lastIndex = theme.href.lastIndexOf("/");
    var newTheme = theme.href.substring(0, lastIndex + 1) + savedTheme + theme.href.substring(theme.href.lastIndexOf("."));

    theme.href = newTheme;
  } else {
    checkbox.checked = false;
    theme.href = theme.href.replace("dark", "light");
    localStorage.setItem('selectedTheme', "light");
  }
  iconuser();
});

checkbox.addEventListener('click', function() {
  if (theme.getAttribute("href").includes("light")) {
    theme.href = theme.href.replace("light", "dark");
    
    localStorage.setItem('selectedTheme', "dark");
  } else {
    theme.href = theme.href.replace("dark", "light");

    localStorage.setItem('selectedTheme', "light"); 
  }
  iconuser();
});

function iconuser() {
  const activeUserString = localStorage.getItem('ActiveUser');
  const activeU = activeUserString ? JSON.parse(activeUserString) : null;

  const theme = localStorage.getItem('selectedTheme');

  if (activeU) {
    const role = activeU.role;
  
    if (role === 'admin') {
      if(theme === 'light'){
        icon.src = 'images/common/adminlight.svg';
      }else{
        icon.src = 'images/common/admindark.svg';
      }
    } 
    else {
      if (role === 'user') {
          if(theme === 'light'){
              icon.src = 'images/common/personlight.svg';
          }else{
            console.log('dark');
              icon.src = 'images/common/persondark.svg';
          }

      }
      else{
          icon.src = 'images/common/registration.png';
      }
    }    
  }
  else{
    icon.src = 'images/common/registration.png';
  }
};