function loadMap() {
    var mapContainer = document.getElementById('map-container');
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.async = true;
    script.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A2f5e00c0bd504187576c58dc4608feee77c9cb946f0ae8317a3319275d5306bd&amp;width=100%25&amp;height=500&amp;lang=ru_RU&amp;scroll=true';
  
    mapContainer.appendChild(script);
  }
  
  loadMap();