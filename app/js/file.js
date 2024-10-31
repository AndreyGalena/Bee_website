// Gulp все файлы JS собирает в file.min.js

// Вешаем общее событие на всю страничку.
document.body.addEventListener("click", function(e) {
    // Возвращает элемент по которому кликнули.
    const directСlick = e.target;
    // Возвращает родительский элемент.
    const item = e.target.parentElement;

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

    // Работа с popup выпадающим меню.
    popup_run(directСlick);
    
    // Обработка выпадения протоколов.
    if (directСlick.classList.contains("protocol-down")) {
        popup_protocol_down(e, directСlick);
    } else if (directСlick.classList.contains("protocol-up")) {
        popup_protocol_up(e, directСlick);
    };
});