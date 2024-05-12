var formNameIN = document.getElementById('nicknameIN');
var formPasswordIN = document.getElementById('passwordIN');

var inputElementNameIN = formNameIN.querySelector('input');
var inputElementPasswordIN = formPasswordIN.querySelector('input');

var labelElementNameIN = formNameIN.querySelector('.input__error');
var labelElementPasswordIN = formPasswordIN.querySelector('.input__error');

var signBtnIn = signBtnUpAll[1];

signBtnIn.addEventListener('click', checkuser);

const storedData = localStorage.getItem('user');
user = JSON.parse(storedData);

var id = 0;

function checkuser(){
    var namevalue = inputElementNameIN.value;
    var passwordvalue = inputElementPasswordIN.value;

    var bnickname = false;
    var bpassword = false;

    if(namevalue === ''){
        labelElementNameIN.classList.add('active');
    }
    if(passwordvalue === ''){
        labelElementPasswordIN.classList.add('active');
    }

    for(let i = 0; i < user.length; i++){

        if(user[i].nickname == namevalue){
            bnickname = true;
            if(user[i].password == passwordvalue){
                bpassword = true;
                id = i;
                i = user.length;
            }
            else{
                bnickname = false;
                bpassword = false;
            }
        }
    }

    if(bnickname == true && bpassword == true){
        var ActiveUser = user[id];
        const actuser = JSON.stringify(ActiveUser);
        localStorage.setItem('ActiveUser', actuser);
        location.reload(); 
    }
    else{
        labelElementNameIN.classList.add('active');
        labelElementPasswordIN.classList.add('active');
    }
}