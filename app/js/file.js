// Gulp все файлы JS собирает в file.min.js

// Создаёт список элементов
let cards = document.querySelectorAll('.comment');
//--------------------------------------------------------------------------------
// Функция
function nameClass() {

}
// Стрелочная функция
let addClass = () => {
    // добавляет класс n элементу в списке.
    cards[n].classList.add("active");
}
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
    if (directСlick.classList.contains("left")) {
        nameClass();
    } else if (directСlick.classList.contains("right")) {
        removeClasses();
        addClass();
    }
})