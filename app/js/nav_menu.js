// nav-menu
let navMenu = document.querySelector('.main__nav-menu');
// Кнопка nav-menu
let button_navMenu = document.querySelector('.button-nav-menu');

// Функция добовляет/убирает класс.
function reassignClass() {
    navMenu.classList.toggle("active-nav-menu");
};

// Меняет стрелку на кнопке.
function reassignButton() {
    if (button_navMenu.innerText == '❯') {
        button_navMenu.innerText = '❮';
    } else {
        button_navMenu.innerText = '❯'
    };
};