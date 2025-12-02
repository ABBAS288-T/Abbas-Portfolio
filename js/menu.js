document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.mobile-nav-links a');

    function openMenu() {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    function closeMenuFunc() {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
        document.body.style.removeProperty('overflow'); // Double ensure
    }

    menuToggle.addEventListener('click', openMenu);
    closeMenu.addEventListener('click', closeMenuFunc);

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenuFunc);
    });

    // Close menu when clicking outside (optional, but good UX)
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            closeMenuFunc();
        }
    });
});
