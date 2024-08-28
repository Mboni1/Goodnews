document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery');
    const items = document.querySelectorAll('.gallery-item');
    const totalItems = items.length;
    const itemWidth = items[0].offsetWidth + 20; // 20 is the margin
    let index = 0;

    document.querySelector('.right-arrow').addEventListener('click', function() {
        if (index < totalItems - 3) {
            index++;
            gallery.style.transform = `translateX(-${index * itemWidth}px)`;
        }
    });

    document.querySelector('.left-arrow').addEventListener('click', function() {
        if (index > 0) {
            index--;
            gallery.style.transform = `translateX(-${index * itemWidth}px)`;
        }
    });
});