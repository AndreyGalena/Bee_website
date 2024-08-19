function fotoGallery(item) {
    // Проверка на существования этого класса в элементе.
    if (item.classList.contains("box")) {
        // если "box" а не "box-active"
        // заменяет существующий класс на новый класс.
        item.classList.replace("box", "box-active");
    } else  {
        // если не "box" а "box-active"
        // заменяет существующий класс на новый класс.
        item.classList.replace("box-active", "box");
    }
};