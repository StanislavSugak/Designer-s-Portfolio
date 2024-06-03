const icon = document.querySelector('.icon-sign-up');
const dialog = document.querySelector('dialog');
const allp = dialog.querySelector('.text-RedHat20');
const mynick = dialog.querySelector('.text-RedHat16');
const logout = dialog.querySelector('.text-RedHat24');

icon.addEventListener('click', iconsign);
allp.addEventListener('click', closeiconsign);
logout.addEventListener('click', logoutf);

function iconsign() {
    const activeUString = localStorage.getItem('ActiveUser');
    const activeU = activeUString ? JSON.parse(activeUString) : null;

    if (activeU) {
        if (!dialog.open) {
            dialog.show();

            mynick.textContent = activeU.nickname;
        }
        else {
            dialog.close();
        }
    } else {
        console.log('no');
        window.location.href = "pages/signup-sin.html"
    }


}

function closeiconsign() {
    dialog.close();
}

window.addEventListener('scroll', function () {
    dialog.close();
});

function logoutf(){
    localStorage.setItem('ActiveUser', '');
    location.href = "index.html";
}