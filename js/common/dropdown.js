function dropdown() {
    document.querySelector(".dropdown-menu").classList.toggle("dropdown-menu-show");
}

const dropBtn = document.querySelector('.dropdown-toggle');

dropBtn.addEventListener('dblclick', function(){
    location.href = "/index.html";
});