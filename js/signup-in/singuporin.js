var singuporin = document.querySelectorAll('.sign-up-content');
var singbox = document.querySelector('.sign-up-box'); 

var SignUpInBtnText = document.querySelector('.upper-btn-text');
var SignUpInBtn = SignUpInBtnText.querySelectorAll('p');

var SignUpBtn = SignUpInBtn[0];
var SignInBtn = SignUpInBtn[1];

SignUpBtn.addEventListener('click', addsignup);
SignInBtn.addEventListener('click', addsignin);

function addsignup(){
    singuporin[0].classList.remove('no-active');
    singuporin[1].classList.add('no-active');
    signBtnUpAll[0].classList.remove('no-active');
    signBtnUpAll[1].classList.add('no-active');
    singbox.classList.remove('in');
}

function addsignin(){
    singuporin[0].classList.add('no-active');
    singuporin[1].classList.remove('no-active');
    signBtnUpAll[0].classList.add('no-active');
    signBtnUpAll[1].classList.remove('no-active');
    singbox.classList.add('in');
}