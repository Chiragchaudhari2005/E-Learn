// Countdown timer
function updateCountdown() {
    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');
    
    let daysVal = parseInt(days.textContent);
    let hoursVal = parseInt(hours.textContent);
    let minutesVal = parseInt(minutes.textContent);
    let secondsVal = parseInt(seconds.textContent);
    
    if (secondsVal > 0) {
        secondsVal--;
    } else {
        secondsVal = 59;
        if (minutesVal > 0) {
            minutesVal--;
        } else {
            minutesVal = 59;
            if (hoursVal > 0) {
                hoursVal--;
            } else {
                hoursVal = 23;
                if (daysVal > 0) {
                    daysVal--;
                }
            }
        }
    }
    
    days.textContent = daysVal.toString().padStart(2, '0');
    hours.textContent = hoursVal.toString().padStart(2, '0');
    minutes.textContent = minutesVal.toString().padStart(2, '0');
    seconds.textContent = secondsVal.toString().padStart(2, '0');
}

// Initialize countdown timer
setInterval(updateCountdown, 1000);

// Animation for elements on scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate course cards
document.querySelectorAll('.course-card').forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s, transform 0.5s';
    observer.observe(card);
});

// Animate feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s, transform 0.5s';
    observer.observe(card);
});

// Animate testimonial cards
document.querySelectorAll('.testimonial-card').forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s, transform 0.5s';
    observer.observe(card);
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for header height
                behavior: 'smooth'
            });
        }
    });
});

// Form validation for any forms on the page
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        let isValid = true;
        
        // Check required fields
        this.querySelectorAll('[required]').forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.style.borderColor = 'red';
            } else {
                field.style.borderColor = '';
            }
        });
        
        // Email validation
        const emailFields = this.querySelectorAll('input[type="email"]');
        emailFields.forEach(field => {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (field.value && !emailPattern.test(field.value)) {
                isValid = false;
                field.style.borderColor = 'red';
            }
        });
        
        if (!isValid) {
            e.preventDefault();
            alert('Please fill in all required fields correctly.');
        }
    });
});

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Set initial state for animated elements
    document.querySelectorAll('.course-card, .feature-card, .testimonial-card').forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
    });
    
    // Trigger animations for elements already in view
    setTimeout(() => {
        document.querySelectorAll('.course-card, .feature-card, .testimonial-card').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.style.opacity = 1;
                el.style.transform = 'translateY(0)';
            }
        });
    }, 100);
});