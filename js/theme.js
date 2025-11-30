/**
 * Theme Manager
 * Enforces dark theme for the new design.
 */
document.addEventListener('DOMContentLoaded', () => {
    const htmlElement = document.documentElement;

    // Always enforce dark theme
    htmlElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
});
