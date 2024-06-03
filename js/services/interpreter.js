fetch('js/services/en-ru.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Ой, ошибка в fetch: ' + response.statusText);
    }
    return response.json();
  })
.then(jsonData => {
    langArr = jsonData; 
    loadLanguage();
})
.catch(error => console.error('Ошибка при исполнении запроса: ', error));