var signupCont = document.querySelector('.lower-btn');

var signBtn = signupCont.querySelector('p');

signBtn.addEventListener('click', readdata);

var field = ['name', 'surname', 'patronymic','phone','email','birth','nickname', 'password', 'passwordRepead','agree'];
var check = true;

function readdata(){
    if(checkdata()){
        console.log('if' + check);
    }
    else{
        console.log('else' + check)
    }
}

function checkdata(){
    check = true;

    var contant = document.querySelector('.sign-up-content');
    var act = document.querySelectorAll('.active');

    console.log(act);
    if(act.length === 0){
        for(let i = 0; i  < field.length; i++){
            var form = document.getElementById(field[i]);
            var input_error = form.querySelector('.input__error');
            
            if(i !== 2){    
                if(i != 5 && i != 9){
                    var input = form.querySelector('input');

                    if(input.value == ''){
                        input_error.classList.add('active');
                        check = false;
                    }
                }else{
                    if(i == 5){
                        var input = form.querySelectorAll('input');
                        
                        for(let i = 0; i < input.length; i++){
                            if(input.value == ''){
                                input_error.classList.add('active');
                                check = false;
                            }
                        }
                    }
                    else{
                        var input = form.querySelector('input');

                        if(!input.checked){
                            input_error.classList.add('active');
                            check = false;
                        }
                    }
                }
            }
        }
    }
    else{
        check = false;
    }

    return check;
}