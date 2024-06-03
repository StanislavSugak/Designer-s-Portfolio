const registrationBtn = document.querySelector('.lng-registration');
const signInBtn = document.querySelector('.lng-sign-up');

registrationBtn.addEventListener('click', registrationlink);
signInBtn.addEventListener('click', signinlink);

function registrationlink(){
    location.href = "../pages/signup-sin.html";
}

function signinlink(){
    localStorage.setItem('simulateClick', 'true');
    location.href = "../pages/signup-sin.html";
}