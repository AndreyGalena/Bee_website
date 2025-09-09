// Создание экземпляра библиотеки SimpleLightbox для фото галереи.
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    scrollZoom: true,
    disableRightClick: true,
});

function ghostEffectBlock() {
    /* Плавное появление всего блока после загрузки вех изображений */

    const galleryItems = document.querySelectorAll('.gallery-item');
    const images = Array.from(galleryItems).map(item => item.querySelector('img'));
    let loadedCount = 0;

    images.forEach(img => {
        const onLoad = () => {
            loadedCount++;
            if (loadedCount === images.length) {
                // Все изображения загружены — показываем весь блок
                // Добавление класса 'visible' с каскадом
                galleryItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('visible')
                    }, index * 200); // каскадная задержка
                });
            }
        };

        if (img.complete) {
            onLoad();
        } else {
            img.addEventListener('load', onLoad);
        }
    });
}