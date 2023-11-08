window.addEventListener('scroll', function() {
    const parallaxBackground = document.querySelector('.parallax-background');
    const scrollPosition = window.scrollY;

    parallaxBackground.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
});
