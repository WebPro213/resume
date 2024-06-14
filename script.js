// scripts.js

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Validate and submit the contact form
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Perform form validation if necessary
    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    if (firstName && lastName && email && subject && message) {
        // If form is valid, send the email (you may want to integrate an email service)
        window.location.href = `mailto:developmentw82@gmail.com?subject=${subject}&body=From: ${firstName} ${lastName}, Email: ${email}, Message: ${message}`;
    } else {
        alert('Please fill out all fields before submitting.');
    }
});
