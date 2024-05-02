const modal = document.querySelector('.modal');
const talkBtn = document.querySelector('.button-hello');
const closerBtn = document.querySelector('.closer');

const hbody = document.querySelector('body');

htalkBtn.addEventListener('click', () => {
    hmodal.classList.toggle('show');
    disableScroll();
});

hcloserBtn.addEventListener('click', () => {
    hmodal.classList.toggle('show');
    enableScroll();
});

function disableScroll() {
    hbody.style.overflow = 'hidden';
}

function enableScroll() {
    hbody.style.overflow = '';
}
