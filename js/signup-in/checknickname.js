var formNickname = document.getElementById('nickname');

var inputElementNickname = formNickname.querySelector('input');

var labelElementNickname = formNickname.querySelector('.input__error');

var button_nickname = formNickname.querySelector('button');

inputElementNickname.addEventListener('input', removeErrorClass);
button_nickname.addEventListener('click', autonickname);

function removeErrorClass() {
    var inputValue = inputElementNickname.value;
    console.log(inputValue);

    if (inputValue.length > 20 || inputValue.length < 2 || inputValue.trim() === '' || inputValue.indexOf(' ') !== -1) {
        labelElementNickname.classList.add('active');
    }else{
        labelElementNickname.classList.remove('active');
    }
}

function autonickname(event) {
    event.preventDefault();

    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var nickname = '';
  
    for (var i = 0; i < 16; i++) {
      var randomIndex = Math.floor(Math.random() * characters.length);
      nickname += characters.charAt(randomIndex);
    }

    inputElementNickname.value = ' ';
    setTimeout(() => {
        inputElementNickname.value = nickname;

        if (nickname.length > 20 || nickname.length < 2 || nickname.trim() === '' || nickname.indexOf(' ') !== -1) {
            labelElementNickname.classList.add('active');
        }else{
            labelElementNickname.classList.remove('active');
        }
    }, 250);
}
  