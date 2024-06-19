// Работа с выпадающим меню.
function popup_run(directСlick) {
    const contentActions = document.querySelector('.sub-menu__list');

    // присутствует ли указанный класс в элементе,
    if (directСlick.classList.contains("fa-caret-down")) {
        // меняет класс.
        directСlick.classList.replace("fa-caret-down", "fa-caret-up");
        contentActions.classList.replace("hide-content", "show-content");
    }
    else  if (directСlick.classList.contains("fa-caret-up")) {
        directСlick.classList.replace("fa-caret-up", "fa-caret-down");
        contentActions.classList.replace("show-content", "hide-content");
    } // при нажатии по тексту(не по стрелке).
    else if (directСlick.classList.contains("menu__link")) {
        const item_up = document.querySelector('.fa-caret-up');
        const item_down = document.querySelector('.fa-caret-down');

        if(item_up) { // не null
            // присутствует ли указанный класс в элементе,
            if(item_up.classList.contains("fa-caret-up")) {
                item_up.classList.replace("fa-caret-up", "fa-caret-down");
                contentActions.classList.replace("show-content", "hide-content");
            }
        } 
        else if (item_down) { // не null
            // присутствует ли указанный класс в элементе,
            if(item_down.classList.contains("fa-caret-down")) {
                item_down.classList.replace("fa-caret-down", "fa-caret-up");
                contentActions.classList.replace("hide-content", "show-content");
            }
        }
    }
};

function clickBody (directСlick) {
    let item = document.querySelector('.show-content');
    let icon = document.querySelector('.fa-caret-up');

    // присутствует ли указанный класс в элементе,
    if (directСlick.classList.contains("fa-caret-down") != true &&
    directСlick.classList.contains("fa-caret-up") != true && 
    directСlick.classList.contains("menu__link") != true &&
        item != null) {
            item.classList.replace("show-content", "hide-content");
            icon.classList.replace("fa-caret-up", "fa-caret-down");
    }
};