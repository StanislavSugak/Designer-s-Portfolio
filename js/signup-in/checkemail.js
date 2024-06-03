var formEmail = document.getElementById('email');

var inputElementEmail = formEmail.querySelector('input');

var labelElementEmail = formEmail.querySelector('.input__error');

inputElementEmail.addEventListener('input', removeErrorClass);

function removeErrorClass() {
    var inputValue = inputElementEmail.value;

    if (inputValue.trim() === '' || inputValue.indexOf(' ') !== -1 || inputValue.indexOf('@') === -1 || inputValue.lastIndexOf('.') <  inputValue.indexOf('@')){
        labelElementEmail.classList.add('active');
    }else{
        labelElementEmail.classList.remove('active');
    }
}