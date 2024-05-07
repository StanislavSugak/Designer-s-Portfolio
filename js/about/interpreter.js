const langArr = {
   "about":{
        "ru": "О себе",
        "en": "About",
   },
   "services":{
        "ru": "Сервис",
        "en": "Services",
    },
    "works":{
        "ru": "Работа",
        "en": "Works",
    },
    "blog":{
        "ru": "Блог",
        "en": "Blog",
    },
    "about1":{
        "ru": "О себе",
        "en": "About",
   },
   "services1":{
        "ru": "Сервис",
        "en": "Services",
    },
    "works1":{
        "ru": "Работа",
        "en": "Works",
    },
    "blog1":{
        "ru": "Блог",
        "en": "Blog",
    },
    "language":{
        "ru": "Язык",
        "en": "Language",
    },
    "russian":{
        "ru": "Русский",
        "en": "Russia",
    },
    "english":{
        "ru": "Английский",
        "en": "English",
    },
    "authorization":{
        "ru": "Авторизация",
        "en": "Authorization",
    },
    "sign-up":{
        "ru": "Вход",
        "en": "Sign up",
    },
    "registration":{
        "ru": "Регистрация",
        "en": "Registration",
    },
    "theme":{
        "ru": "Тема",
        "en": "Theme",
    },
    "hello":{
        "ru": "Привет,",
        "en": "Hello,",
    },
    "adam":{
        "ru": "Адам Закоб",
        "en": "Adam Zakob",
    },
    "freelance":{
        "ru": "внештатный UX-дизайнер",
        "en": "a freelance UX Designer",
    },
    "talk":{
        "ru": "Поговорим?",
        "en": "Let&#39s Talk",
    },
    "happiness":{
        "ru": "Блаженство",
        "en": "Happiness",
    },
    "take-a-look":{
        "ru": "Загляните на сайт, а затем внизу вы сможете пообщаться со мной поближе",
        "en": "Take a look at the site, and then at the bottom you can chat with me closer",
    },
    "portfolio":{
        "ru": "Портфолио",
        "en": "Portfolio",
    },
    "all-creative":{
        "ru": "Все лучшие проекты",
        "en": "All Creative Projects",
    },
    "explore":{
        "ru": "Больше",
        "en": "Explore More",
    },
    "oops":{
        "ru": "Упсс",
        "en": "Oops",
    },
    "there-are-no-more":{
        "ru": "На этой странице пока больше нет работ, но вы можете найти больше в моих социальных сетях",
        "en": "There are no more works on this page yet, but you can find more on my social networks",
    },
    "my-instagram":{
        "ru": "Мой инстаграм",
        "en": "My instagram",
    },
    "clients":{
        "ru": "Клиенты",
        "en": "Clients",
    },
    "big-deal":{
        "ru": "Проекты вместе с",
        "en": "Big Deal With",
    },
    "testimonials":{
        "ru": "Рекомендации",
        "en": "Testimonials",
    },
    "what-people":{
        "ru": "Что говорят люди",
        "en": "What People Says",
    },
    "quote-testimonials":{
        "ru": "Цитируйте отзывы, демонстрирующие поддержку вашего продукта или функции пользователем, знающие это. Это будет лучше некоторых методов рекламы, поскольку потребители будут доверять вам.",
        "en": "Quote testimonials demonstrate support for your product or feature from a user who has experience with it. This can be significantly more effective than traditional advertising methods as most consumers will trust.",
    },
    "address":{
        "ru": "Адрес",
        "en": "Address",
    },
    "where-you":{
        "ru": "Где найдете вы меня",
        "en": "Where you'll find me",
    },
    "contact-me":{
        "ru": "Свяжитесь со мной",
        "en": "Contact Me",
    },
    "let-me":{
        "ru": "Дайте мне знать, если захотите узнать о совместном проекте. Я готов работать фрилансером.",
        "en": "Let me know if you want to talk about a potential collaboration. I'm available for freelance work.",
    },
    "your-name":{
        "ru": "Как тебя зовут?",
        "en": "What's your name?",
    },
    "your-email":{
        "ru": "Ваш электронный адрес?",
        "en": "Your email?",
    },
    "your-project":{
        "ru": "Расскажите мне о проекте",
        "en": "Tell me about your project",
    },
    "get-quote":{
        "ru": "Мое предложение",
        "en": "Get a Quote",
    },
    "friends":{
        "ru": "Давай дружить",
        "en": "Let's be Friends",
    },
}

const myLang = ['ru', 'en'];

const russian = document.querySelector('.lng-russian');
const english = document.querySelector('.lng-english');

russian.addEventListener('click', changeURLLanguage);
english.addEventListener('click', changeURLLanguage);

function changeURLLanguage(event){
    let lang = event.target.getAttribute('data-value');
    console.log(lang);
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage(){
    let hash = window.location.hash;
    hash = hash.substring(1);
    console.log(hash);
    if(!myLang.includes(hash)){
        location.href = window.location.pathname + '#en';
        location.reload();
    }

    for(let key in langArr){
        document.querySelector('.lng-' + key).innerHTML = langArr[key][hash];
    }
}

changeLanguage();
