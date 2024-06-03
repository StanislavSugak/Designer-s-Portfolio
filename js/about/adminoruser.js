const map = document.querySelector('.address');

window.addEventListener('DOMContentLoaded', function() {
    const activeUserString = localStorage.getItem('ActiveUser');
    const activeU = activeUserString ? JSON.parse(activeUserString) : null;

    if (activeU) {
        if(activeU.role === "admin"){
            map.classList.add('active');
        }
        else{
            map.classList.remove('active');
        }
    }
    else{
        map.classList.remove('active');
    }
});