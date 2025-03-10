function setLanguage(lang) {
    document.querySelectorAll('[data-lang]').forEach(el => {
        el.style.display = el.getAttribute('data-lang') === lang ? 'block' : 'none';
    });
    localStorage.setItem('language', lang); // Save preference
}

// Load saved language on page load
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);
});
