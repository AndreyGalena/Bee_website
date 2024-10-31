// Работает с выпадающем протоколом.

// протокол в низ
function popup_protocol_down(e, directСlick) {
    const contentItem = e.target.parentElement.nextElementSibling;

    // заменяет существующий класс на новый класс.
    directСlick.classList.replace("protocol-down", "protocol-up");
    contentItem.classList.replace("hide-content", "show-content");
};

// протокол в верх
function popup_protocol_up(e, directСlick) {
    const contentItem = e.target.parentElement.nextElementSibling;

    directСlick.classList.replace("protocol-up", "protocol-down");
    contentItem.classList.replace("show-content", "hide-content");
};