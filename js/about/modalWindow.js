const modal = document.querySelector('.modal');
const talkBtn = document.querySelector('.button-hello');
const closerBtn = document.querySelector('.closer');

const body = document.querySelector('body');

talkBtn.addEventListener('click', () => {
    modal.classList.toggle('show');
    disableScroll();
});

closerBtn.addEventListener('click', () => {
    modal.classList.toggle('show');
    enableScroll();
});

function disableScroll() {
    body.style.overflow = 'hidden';
}

function enableScroll() {
    body.style.overflow = '';
}
