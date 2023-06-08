const elements = document.querySelectorAll('.reveal-animation');

for (const item of elements) {
    window.addEventListener('scroll', () => {
        const y = window.scrollY;
        const threshold = item.offsetTop - window.innerHeight * 0.8;
        if (y >= threshold) {
            item.classList.add('show');
        }
    });
}






