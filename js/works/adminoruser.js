const corse = document.querySelector('.courses');

window.addEventListener('DOMContentLoaded', function() {
    const activeUserString = localStorage.getItem('ActiveUser');
    const activeU = activeUserString ? JSON.parse(activeUserString) : null;

    if (activeU) {
        if(activeU.role === "admin"){
            corse.classList.add('active');
        }
        else{
            corse.classList.remove('active');
        }
    }
    else{
        corse.classList.remove('active');
    }
});