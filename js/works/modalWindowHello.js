const hsection = document.querySelector('.hello');
const hmodal = hsection.querySelector('.modal');
const htalkBtn = document.querySelector('.button-hello');
const hcloserBtn = hsection.querySelector('.closer');

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
