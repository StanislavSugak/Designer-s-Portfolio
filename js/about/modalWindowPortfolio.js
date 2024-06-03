const psection = document.querySelector('.portfolio');
const pmodal = psection.querySelector('.modal');
const ptalkBtn = document.querySelector('.portfolio-explore');
const pcloserBtn = psection.querySelector('.closer');

const pbody = document.querySelector('body');

ptalkBtn.addEventListener('click', () => {
    pmodal.classList.toggle('show');
    disableScroll();
});

pcloserBtn.addEventListener('click', () => {
    pmodal.classList.toggle('show');
    enableScroll();
});

function disableScroll() {
    pbody.style.overflow = 'hidden';
}

function enableScroll() {
    pbody.style.overflow = '';
}
