let activep = 0;

const paggination = document.querySelector('.slider-paggination');
const selector = paggination.querySelectorAll('li');

const btn = paggination.querySelectorAll('p');
const btnLeft = btn[0];
const btnRight = btn[1];

btnLeft.addEventListener('click', slideleft);
btnRight.addEventListener('click', slideright);

selector.forEach((item, index) => {
    item.addEventListener('click', () => active(index));
});

function active(index) {
    selector.forEach(item => item.classList.remove('active'));
    selector[index].classList.add('active');

    activep = index;
}

function slideleft(){
    if(activep === 0){
        activep = 4;
    }else{
        activep--;
    }

    active(activep);
}

function slideright(){
    if(activep === 4){
        activep = 0;
    }else{
        activep++;
    }

    active(activep);
}
