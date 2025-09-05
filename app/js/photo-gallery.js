// Создание экземпляра библиотеки SimpleLightbox для фото галереи.
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    scrollZoom: true,
    disableRightClick: true,
});