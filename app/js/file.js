// Gulp все файлы JS собирает в file.min.js

// // Стрелочная функция
// let addClass = () => {
//     // добавляет класс n элементу в списке.
//     button_navMenu.classList.add("active");
// };
// let removeClasses = () => {
//     // Удаляет все классы active в списке. 
//     for (let elem of cards) {
//         elem.classList.remove("active");
//     }
// };
//---------------------------------------------------------------------------------
// Вешаем общее событие на всю страничку.
document.body.addEventListener("click", function(e) {
    // Возвращает элемент по которому кликнули.
    const directСlick = e.target;
    // Возвращает родительский элемент.
    const item = e.target.parentElement;

    // console.log(e.target.parentElement);           // возвращает элемент перед кликнутым
    // console.log(e.target.previousElementSibling); // возвращает элемент перед кликнутым
    // console.log(e.target.parentElement.parentElement.nextElementSibling); // .nextElementSibling - следующий элемент в DOM.

    /* Проверка на существующий классa. */
    // Бургер меню.
    if (directСlick.classList.contains("menu-btn")
        ||
        directСlick.classList.contains("span")) {
        addActiveMenu();
    };

    // Обрабатывает боковое меню (nav-menu).
    if (directСlick.classList.contains("button-nav-menu")) {
        reassignClass();
        reassignButton();
    };

    // Обрабатывает фото Галерею.
    fotoGallery(item);

    // Работа с выпадающим меню.
    popup_run(directСlick);
    clickBody (directСlick);
});