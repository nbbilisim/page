document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Navigation
    const navItems = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('.section');

    function setActiveSection(sectionId) {
        sections.forEach(section => {
            section.classList.remove('active');
            if (section.id === sectionId) {
                section.classList.add('active');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === '#' + sectionId) {
                item.classList.add('active');
            }
        });
    }

    // Set initial active section based on URL hash
    const initialSection = window.location.hash.slice(1) || 'home';
    setActiveSection(initialSection);

    // Handle navigation clicks
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = item.getAttribute('href').slice(1);
            setActiveSection(sectionId);
            window.history.pushState(null, '', '#' + sectionId);
            navLinks.classList.remove('active'); // Close mobile menu
        });
    });

    // Handle browser back/forward
    window.addEventListener('popstate', () => {
        const sectionId = window.location.hash.slice(1) || 'home';
        setActiveSection(sectionId);
    });
});