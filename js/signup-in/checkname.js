var formName = document.getElementById('name');

var inputElementName = formName.querySelector('input');

var labelElementName = formName.querySelector('.input__error');

inputElementName.addEventListener('input', removeErrorClass);

function removeErrorClass() {
    var inputValue = inputElementName.value;
    console.log( inputValue);

    if (inputValue.length > 20 || inputValue.length < 2 || inputValue.trim() === '' || inputValue.indexOf(' ') !== -1) {
        labelElementName.classList.add('active');
    }else{
        labelElementName.classList.remove('active');
    }
}