// JavaScript for smooth scrolling (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// JavaScript to add animation when scrolling
document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.slide-in-left');

    function checkSlide() {
        elements.forEach(element => {
            const slideInAt = (window.scrollY + window.innerHeight) - element.clientHeight / 2;
            const elementBottom = element.offsetTop + element.clientHeight;
            const isHalfShown = slideInAt > element.offsetTop;
            const isNotScrolledPast = window.scrollY < elementBottom;

            if (isHalfShown && isNotScrolledPast) {
                element.classList.add('appear');
            }
        });
    }

    window.addEventListener('scroll', checkSlide);
});

document.addEventListener('DOMContentLoaded', () => {
    const typingElement = document.querySelector('.typing-animation');
    
    setInterval(() => {
        typingElement.classList.remove('repeat-animation');
        void typingElement.offsetWidth; // Trigger reflow to restart animation
        typingElement.classList.add('repeat-animation');
    }, 5000); // Mengulang setiap 5 detik
});