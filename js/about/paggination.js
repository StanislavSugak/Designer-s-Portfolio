const people = [
  {
    src: "../images/about/person1.png",
    p1: "Michal John",
    p2: "CEO of MZP"
  },
  {
    src: "../images/about/person2.png",
    p1: "Sarahh Lily",
    p2: "CMO of GHI"
  },
  {
    src: "../images/about/person3.png",
    p1: "Peters Mark",
    p2: "CRO of WXY"
  },
  {
    src: "../images/about/person4.png",
    p1: "Kevin Owens",
    p2: "CIO of JKL"
  },
  {
    src: "../images/about/person5.png",
    p1: "Daniel Luke",
    p2: "COO of DEF"
  }
];

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