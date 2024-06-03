var people;

fetch('/js/about/testimonials.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Ой, ошибка в fetch: ' + response.statusText);
    }
    return response.json();
  })
.then(jsonData => {people = jsonData;})
.catch(error => console.error('Ошибка при исполнении запроса: ', error));

const section = document.querySelector('.testimonials-content');
const img = section.querySelectorAll('img:not(.cov-container img)');
const alltext = section.querySelector('.main-text-content');
const text = alltext.querySelectorAll('p');

let activep = 0;

const paggination = document.querySelector('.slider-paggination');
const selector = paggination.querySelectorAll('li');

const btn = paggination.querySelectorAll('p');
const btnLeft = btn[0];
const btnRight = btn[1];

btnLeft.addEventListener('click', slideleft);
btnRight.addEventListener('click', slideright);

selector.forEach((item, index) => {
    item.addEventListener('click', () => active(index, false));
});

function active(index, slide) {
  if(slide === true){
    selector.forEach(item => item.classList.remove('active'));
    selector[index].classList.add('active');
  }
  else{
    if(activep < index){
      
      let how = index - activep;
      for(let i = 0; i < how; i++){
        slideright();
      }

    }
    else{

      if(activep > index){

        let how = activep - index;
        for(let i = 0; i < how; i++){
          slideleft();
        }
      }

    }

    
  }
}

function slideleft(){
    if(activep === 0){
        activep = 4;
    }else{
        activep--;
    }

    active(activep, true);

    setdataleft();
}

function slideright(){
    if(activep === 4){
        activep = 0;
    }else{
        activep++;
    }

    active(activep, true);

    setdataright();
}

function setdataright(){
  people.unshift(people.pop());

  setdata();
}

function setdataleft(){
  people.push(people.shift());

  setdata();
}

function setdata(){
 for (let i = 0; i < 5; i++) {
    img[i].src = people[i].src;

    img[i].classList.remove('visible');
    void img[i].offsetHeight;
    img[i].classList.add('visible');

    if(i === 4){
      text[0].textContent = people[i].p1;
      text[1].textContent = people[i].p2;
    }
  }
}
