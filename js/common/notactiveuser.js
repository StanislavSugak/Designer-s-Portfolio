const nav_bar_header = document.querySelector('.nav-bar');
const nav_bar_header_a = nav_bar_header.querySelectorAll('a');

const drop_down = document.querySelector('.dropdown-menu');
const drop_down_p = drop_down.querySelectorAll('a');

for (let i = 1; i < nav_bar_header_a.length; i++) {
    nav_bar_header_a[i].addEventListener('click', not_click_link);
}

drop_down_p.forEach(item => item.addEventListener('click', not_click_link));

function not_click_link(event){
    const activeUser = localStorage.getItem('ActiveUser');

    if(!activeUser || activeUser == null || activeUser == ''){
        event.preventDefault();
    }
}