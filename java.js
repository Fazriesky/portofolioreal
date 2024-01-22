const projectCardImgs = document.querySelectorAll('.project-card img');

projectCardImgs.forEach(img => {
    img.addEventListener('mouseover', () => {
        const figcaption = img.parentElement.nextElementSibling;
        figcaption.style.opacity = 1;
    });

    img.addEventListener('mouseout', () => {
        const figcaption = img.parentElement.nextElementSibling;
        figcaption.style.opacity = 0;
    });
});

const serviceItems = document.querySelectorAll('.service-item');

serviceItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        item.style.backgroundColor = randomColor;
    });

    item.addEventListener('mouseout', () => {
        item.style.backgroundColor = '';
    });
});