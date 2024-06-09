document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname.split('/').pop(); // Geçerli sayfanın dosya adını al
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active'); // Aktif linke "active" sınıfını ekle
        }
    });
});
