// Smooth scroll effect for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Form submission alert
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Example alert
    alert('Form submitted!');

    // You can add code here to process form data or send it to a server
});
