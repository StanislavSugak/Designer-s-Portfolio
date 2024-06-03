var formAgree = document.getElementById('agree');

var inputAgree = formAgree.querySelector('input');
var labelElementAgree = formAgree.querySelector('.input__error');

inputAgree.addEventListener('change', function() {
    if (inputAgree.checked) {
        labelElementAgree.classList.remove('active');
    } else {
        labelElementAgree.classList.add('active');
    }
  });