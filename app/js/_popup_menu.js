// Работа с выпадающим меню.

// Закрываем все открытые элементы меню.
function closedAll() {
    // находим все открытые элементы
    let items = document.querySelectorAll('.show-content');
    // и закрываем их.
    for (let i = 0; i < items.length; i++) {
        items[i].classList.replace("show-content", "hide-content");
    }
};

function popup_run(directСlick) {
    // если кликнул по тексту первого слоя.
    if (directСlick.classList.contains("one-element")) {
        // находим второй слой (sub-menu__list)
        const subMenu = document.querySelector(".sub-menu__list");
        // проверяем в каком состоянии (открыто/закрыто).
        if (subMenu.classList.contains("hide-content")) {
            subMenu.classList.replace("hide-content", "show-content");
        } else {
            // закрываем все открытые элементы меню.
            closedAll ();
        }
    } // если я кликну по тексту второго слоя.
    else if (directСlick.classList.contains("two-element")) {
        // находим третий слой (sub-sub-menu__list)
        const subSubMenu = document.querySelector(".sub-sub-menu__list");
        // проверяем в каком состоянии (открыто/закрыто).
        if (subSubMenu.classList.contains("hide-content")) {
            subSubMenu.classList.replace("hide-content", "show-content");
        } else {
            subSubMenu.classList.replace("show-content", "hide-content");
        }
    } // если кликнул по body
    else {
        // закрываем все открытые элементы меню.
        closedAll();
    }
};