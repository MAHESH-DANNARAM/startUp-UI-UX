const menuToggler = document.querySelector('.menu-toggle')
const menu = document.querySelector('.main-menu')

window.onload = function () {
    var el = document.querySelector('.preloader');
    el.style.display = 'none';
};

menuToggler.addEventListener('click', function () {
    if (this.querySelector('i').classList.contains('bx-menu-alt-left')) {
        this.querySelector('i').classList.remove('bx-menu-alt-left')
        this.querySelector('i').classList.add('bx-x')

    } else {
        this.querySelector('i').classList.remove('bx-x')
        this.querySelector('i').classList.add('bx-menu-alt-left')
    }
    menu.classList.toggle('active');
})