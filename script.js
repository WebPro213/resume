// script.js

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling (Optional: For demonstration purposes)
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if(firstName && lastName && email && subject && message) {
        alert('Thank you for contacting me, ' + firstName + '!');
        // Normally, you would send the data to the server here.
    } else {
        alert('Please fill out all fields before submitting.');
    }
});
