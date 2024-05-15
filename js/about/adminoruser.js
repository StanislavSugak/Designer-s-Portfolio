const map = document.querySelector('.address');

const footercontainer = document.querySelector('.footer-container');
const footerfield = document.querySelector('.footer-field');
const footerlink = document.querySelector('.footer-link');
const adminfooter = document.querySelector('.admin-footer');

window.addEventListener('DOMContentLoaded', function() {
    const activeUserString = localStorage.getItem('ActiveUser');
    const activeU = activeUserString ? JSON.parse(activeUserString) : null;

    if (activeU) {
        if(activeU.role === "admin"){
            footerfield.classList.add('active');
            footerlink.classList.add('active');
            adminfooter.classList.add('active');
            footercontainer.classList.add('active');
            map.classList.add('active');
        }
        else{
            footerfield.classList.remove('active');
            footerlink.classList.remove('active');
            adminfooter.classList.remove('active');
            footercontainer.classList.remove('active');
            map.classList.remove('active');
        }
    }
    else{
        footerfield.classList.remove('active');
        footerlink.classList.remove('active');
        adminfooter.classList.remove('active');
        footercontainer.classList.remove('active');
        map.classList.remove('active');
    }
});