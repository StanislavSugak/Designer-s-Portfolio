var formPassword= document.getElementById('password');
var formPasswordRepeat = document.getElementById('passwordRepead');

var inputElementPassword = formPassword.querySelector('input');
var inputElementPasswordRepeat = formPasswordRepeat.querySelector('input');

var labelElementPassword = formPassword.querySelector('.input__error');
var labelElementPasswordRepeat = formPasswordRepeat.querySelector('.input__error');

var button_password = formPassword.querySelector('button');
var button_show = formPassword.querySelector('img');

inputElementPassword.addEventListener('input', removeErrorClass);
inputElementPasswordRepeat.addEventListener('input', removeErrorClassMust);
button_password.addEventListener('click', autonpassword);
button_show.addEventListener('click', showpassword);

function removeErrorClass() {
    var inputValue = inputElementPassword.value;

    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!"#$%&*+,\-()./:;<=>?@[\]^_{|}~])/;

    if(regex.test(inputValue) && inputValue.length > 7 && inputValue.length < 21){
        labelElementPassword.classList.remove('active');
    }else{
        labelElementPassword.classList.add('active');
    }

    removeErrorClassMust();
}

function removeErrorClassMust(){
    var inputValue = inputElementPasswordRepeat.value;
    
    if(inputElementPasswordRepeat.value === inputElementPassword.value){
        labelElementPasswordRepeat.classList.remove('active');
    }else{
        labelElementPasswordRepeat.classList.add('active');
    }
}

function autonpassword(event) {
    event.preventDefault();

    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!"#$%&*+,-.()/:;<=>?@[\]^_{|}~';
    var password = '';
  
    for (var i = 0; i < 16; i++) {
      var randomIndex = Math.floor(Math.random() * characters.length);
      password += characters.charAt(randomIndex);
    }
  
    inputElementPassword.value = ' ';
    inputElementPasswordRepeat.value = ' ';
    setTimeout(() => {
        inputElementPassword.value = password;
        inputElementPasswordRepeat.value = password;

        removeErrorClass();
        removeErrorClassMust();
    }, 250);

}

function showpassword(event){
    event.preventDefault();

    if (inputElementPassword.type === 'password') {
        inputElementPassword.type = 'text';
        inputElementPasswordRepeat.type = 'text';
      } else {
        inputElementPassword.type = 'password';
        inputElementPasswordRepeat.type = 'password';
      }
}
  