fetch('js/signup-in/en-ru.json')
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