var formSurname = document.getElementById('surname');

var inputElementSurname = formSurname.querySelector('input');

var labelElementSurname = formSurname.querySelector('.input__error');

inputElementSurname.addEventListener('input', removeErrorClass);

function removeErrorClass() {
    var inputValue = inputElementSurname.value;
    console.log( inputValue);

    if (inputValue.length > 20 || inputValue.length < 2 || inputValue.trim() === '' || inputValue.indexOf(' ') !== -1) {
        labelElementSurname.classList.add('active');
    }else{
        labelElementSurname.classList.remove('active');
    }
}