window.initializeScrollSpy = function () {
    var sections = document.querySelectorAll('section');
    var buttons = document.querySelectorAll('.mud-nav-link'); // Target MudButtons
    var currentSection = '';

    var observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Adjust the threshold as needed
    };

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                currentSection = entry.target.getAttribute('id');

                buttons.forEach(function (button) {
                    button.classList.remove('mud-button-filled');
                    button.classList.add('mud-button-text');

                    if (button.attributes['href'] != null && button.getAttribute('href').includes(currentSection)) {
                        button.classList.remove('mud-button-text');
                        button.classList.add('mud-button-filled');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(function (section) {
        observer.observe(section);
    });
};
