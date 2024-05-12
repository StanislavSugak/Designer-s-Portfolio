var langArr;
const myLang = ['ru', 'en'];

fetch('../js/signup-in/en-ru.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Ой, ошибка в fetch: ' + response.statusText);
    }
    return response.json();
  })
.then(jsonData => {
    langArr = jsonData; 
    console.log(langArr);
    loadLanguage();
})
.catch(error => console.error('Ошибка при исполнении запроса: ', error));

const russian = document.querySelector('.lng-russian');
const english = document.querySelector('.lng-english');

russian.addEventListener('click', changeLanguage);
english.addEventListener('click', changeLanguage);

function changeLanguage(event) {
  let lang = event.target.getAttribute('data-value');

  localStorage.setItem('selectedLanguage', lang);

  location.href = window.location.pathname + '#' + lang;

  localStorage.setItem('selectedLanguage', lang);

  location.reload();
}

window.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    const currentLanguage = window.location.hash.substring(1);
    
    if (savedLanguage) {
      if (currentLanguage !== savedLanguage) {
        location.href = window.location.pathname + '#' + savedLanguage;
        location.reload();
      }
    }
});

function loadLanguage() {
    let hash = window.location.hash;
    hash = hash.substring(1);
    console.log(hash);
  
    if (!myLang.includes(hash)) {
      location.href = window.location.pathname + '#en';
      location.reload();
    }
  
    for (let key in langArr) {
    console.log(key);
      document.querySelector('.lng-' + key).innerHTML = langArr[key][hash];
    }
  }