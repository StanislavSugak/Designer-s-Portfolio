const menu = document.querySelector('.burger-menu');
const menuBtn = document.querySelector('.burger-icon');


menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
    menuBtn.classList.toggle('active')
}
)

window.addEventListener('scroll', () => {
    if(menu.classList.contains('active')){
        menu.classList.remove('active');
        menuBtn.classList.remove('active');
    }
});