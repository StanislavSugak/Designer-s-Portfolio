const langArr = {
   "about":{
        "ru": "Обо мне",
        "en": "About",
   },
   "services":{
        "ru": "Сервисы",
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
        "ru": "Обо мне",
        "en": "About",
   },
   "services1":{
        "ru": "Сервисы",
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
        "ru": "dg",
        "en": "Hello,",
    },
    "adam":{
        "ru": "dg",
        "en": "Adam Zakob",
    },
    "freelance":{
        "ru": "dg",
        "en": "a freelance UX Designer",
    },
    "talk":{
        "ru": "dg",
        "en": "Let&#39s Talk",
    },
    "happiness":{
        "ru": "dg",
        "en": "Happiness",
    },
    "take-a-look":{
        "ru": "dg",
        "en": "Take a look at the site, and then at the bottom you can chat with me closer",
    },
    "portfolio":{
        "ru": "dg",
        "en": "Portfolio",
    },
    "all-creative":{
        "ru": "dg",
        "en": "All Creative Projects",
    },
    "explore":{
        "ru": "dg",
        "en": "Explore More",
    },
    "oops":{
        "ru": "dg",
        "en": "Oops",
    },
    "there-are-no-more":{
        "ru": "dg",
        "en": "There are no more works on this page yet, but you can find more on my social networks",
    },
    "my-instagram":{
        "ru": "dg",
        "en": "My instagram",
    },
    "clients":{
        "ru": "dg",
        "en": "Clients",
    },
    "big-deal":{
        "ru": "dg",
        "en": "Big Deal With",
    },
    "slack":{
        "ru": "dg",
        "en": "Slack",
    },
    "medium":{
        "ru": "dg",
        "en": "Medium",
    },
    "microsoft":{
        "ru": "dg",
        "en": "Microsoft",
    },
    "zeplin":{
        "ru": "dg",
        "en": "Zeplin",
    },
    "shopify":{
        "ru": "dg",
        "en": "Shopify",
    },
    "testimonials":{
        "ru": "dg",
        "en": "Testimonials",
    },
    "what-people":{
        "ru": "dg",
        "en": "What People Says",
    },
    "quote-testimonials":{
        "ru": "dg",
        "en": "Quote testimonials demonstrate support for your product or feature from a user who has experience with it. This can be significantly more effective than traditional advertising methods as most consumers will trust.",
    },
    "address":{
        "ru": "dg",
        "en": "Address",
    },
    "where-you":{
        "ru": "dg",
        "en": "Where you'll find me",
    },
    "contact-me":{
        "ru": "dg",
        "en": "Contact Me",
    },
    "let-me":{
        "ru": "dg",
        "en": "Let me know if you want to talk about a potential collaboration. I'm available for freelance work.",
    },
    "your-name":{
        "ru": "dg",
        "en": "What's your name?",
    },
    "your-email":{
        "ru": "dg",
        "en": "Your email?",
    },
    "your-project":{
        "ru": "dg",
        "en": "Tell me about your project",
    },
    "get-quote":{
        "ru": "dg",
        "en": "Get a Quote",
    },
    "friends":{
        "ru": "dg",
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
