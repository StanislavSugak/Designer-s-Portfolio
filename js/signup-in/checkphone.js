var formPhone = document.getElementById('phone');

var inputElementPhone = formPhone.querySelector('input');

var labelElementPhone = formPhone.querySelector('.input__error');

inputElementPhone.addEventListener('input', removeErrorClass);

function removeErrorClass() {
    var inputValue = inputElementPhone.value;
    console.log( inputValue);
    labelElementPhone.classList.add('active');
    labelElementPhone.classList.remove('active');

    if (inputValue.trim() === '' || inputValue.indexOf(' ') !== -1) {
        labelElementPhone.classList.add('active');
    }else{
        if(inputValue.startsWith('375') && inputValue.length === 12){
            labelElementPhone.classList.remove('active');
        }
        else{
            if(inputValue.startsWith('80') && inputValue.length === 11){
                labelElementPhone.classList.remove('active');
            }else{
                labelElementPhone.classList.add('active');
            }
        }
    }
}