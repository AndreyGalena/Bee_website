// Gulp все файлы JS собирает в file.min.js

// Создаёт список элементов
let cards = document.querySelectorAll('.comment');
// nav-menu
let navMenu = document.querySelector('.main__nav-menu');
// Кнопка nav-menu
let button_navMenu = document.querySelector('.button-nav-menu');

//--------------------------------------------------------------------------------
// Функция добовляет/убирает класс.
function reassignClass() {
    navMenu.classList.toggle("active-nav-menu");
}

// Меняет стрелку на кнопке.
function reassignButton() {
    if (button_navMenu.innerText == '❯') {
        button_navMenu.innerText = '❮';
    } else {
        button_navMenu.innerText = '❯'
    };
}

// // Стрелочная функция
// let addClass = () => {
//     // добавляет класс n элементу в списке.
//     button_navMenu.classList.add("active");
// }
let removeClasses = () => {
    // Удаляет все классы active в списке. 
    for (let elem of cards) {
        elem.classList.remove("active");
    }
}
//---------------------------------------------------------------------------------
// Вешаем общее событие на всю страничку.
document.body.addEventListener("click", function(e) {
    // Возвращает элемент по которому кликнули.
    const directСlick = e.target; // это исходный элемент, на котором 
                              // произошло событие, в процессе всплытия он неизменен.

    // Возвращает родительский элемент.
    const parentСlick = e.target.parentElement;

    // console.log(e.target.parentElement);           // возвращает элемент перед кликнутым
    // console.log(e.target.previousElementSibling); // возвращает элемент перед кликнутым
    // console.log(e.target.parentElement.parentElement.nextElementSibling); // .nextElementSibling - следующий элемент в DOM.

    /* Проверка на существующий классa. */
    // Бургер меню.
    if (directСlick.classList.contains("menu-btn")
        ||
        directСlick.classList.contains("span")) {
        addActiveMenu();
    }

    // Последующие действия.
    if (directСlick.classList.contains("button-nav-menu")) {
        reassignClass();
        // console.log(`тут должно быть value ${ button_navMenu.innerText }`);
        reassignButton();

    } 
    // else if (directСlick.classList.contains("right")) {
    //     removeClasses();
    //     addClass();
    // }
})