// Работает с выпадающем протоколом.
function popup_protocol_down(e, directСlick) {
    const contentItem = e.target.parentElement.parentElement.nextElementSibling;

    // заменяет существующий класс на новый класс.
    directСlick.classList.replace("protocol-down", "protocol-up");
    directСlick.classList.replace("fa-caret-down", "fa-caret-up");
    contentItem.classList.replace("hide-content", "show-content");
};

function popup_protocol_up(e, directСlick) {
    const contentItem = e.target.parentElement.parentElement.nextElementSibling;

    directСlick.classList.replace("protocol-up", "protocol-down");
    directСlick.classList.replace("fa-caret-up", "fa-caret-down");
    contentItem.classList.replace("show-content", "hide-content");
};