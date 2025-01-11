// highlighting navlinks
function highlightNavLinks() {
    const navLinks = document.querySelectorAll('header nav ul li a');
    const sect = document.querySelectorAll('section');

    const observer = new IntersectionObserver((sections) => {
        sections.forEach(sec => {
            if (sec.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === sec.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.7 });

    sect.forEach(section => {
        observer.observe(section);
    });
}

// Call the function on page load
highlightNavLinks();