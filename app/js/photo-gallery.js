function fotoGallery(item) {
    // Проверка на существования этого класса в элементе.
    if (item.classList.contains("box")) {
        // Находим активный элемент
        const box_active = document.querySelector(".box-active");
        // Если активный элемент есть меняем класс.
        if (box_active) {
            box_active.classList.replace("box-active", "box");
        }

        // заменяет существующий класс на новый класс.
        item.classList.replace("box", "box-active");
    } else  {
        item.classList.replace("box-active", "box");
    }
};