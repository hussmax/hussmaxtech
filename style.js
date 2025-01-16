// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission Handler
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    
    // Here you would typically send the form data to a server
    // For now, we'll just show an alert
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    this.reset();
});

// Navbar Background Change on Scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#fff';
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.boxShadow = 'none';
    }
});

// Animation on Scroll for Service Cards
const serviceCards = document.querySelectorAll('.service-card');

const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

serviceCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'all 0.5s ease-out';
    observer.observe(card);
});

// Scroll to Top Button
const scrollTop = document.createElement('div');
scrollTop.classList.add('scroll-top');
scrollTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(scrollTop);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 200) {
        scrollTop.classList.add('visible');
    } else {
        scrollTop.classList.remove('visible');
    }
});

scrollTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Loading Animation
window.addEventListener('load', () => {
    const loading = document.querySelector('.loading');
    if (loading) {
        loading.style.opacity = '0';
        setTimeout(() => {
            loading.style.display = 'none';
        }, 500);
    }
});

// Enhanced Hamburger Menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
});

// Animate Service Cards on Hover
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Form Input Animation
const formInputs = document.querySelectorAll('#contact-form input, #contact-form textarea');

formInputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', () => {
        if (!input.value) {
            input.parentElement.classList.remove('focused');
        }
    });
});

// Enhanced Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const logo = document.querySelector('.logo-3d');
    
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        logo.style.transform = 'scale(0.9)';
    } else {
        navbar.classList.remove('scrolled');
        logo.style.transform = 'scale(1)';
    }
});

// Add 3D tilt effect to logo
const logo = document.querySelector('.logo-3d');

logo.addEventListener('mousemove', (e) => {
    const rect = logo.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    logo.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

logo.addEventListener('mouseleave', () => {
    logo.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
});

// Add Particle Background
const particlesConfig = {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.5,
            random: false
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        }
    },
    retina_detect: true
};

// Initialize particles
particlesJS('particles-js', particlesConfig);

// Toggle Features
const toggleBtn = document.getElementById('toggleFeatures');
const featuresContainer = document.getElementById('featuresContainer');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    featuresContainer.classList.toggle('show');
    
    // Change button text based on state
    const btnText = toggleBtn.querySelector('span');
    if (featuresContainer.classList.contains('show')) {
        btnText.textContent = 'Hide Services';
    } else {
        btnText.textContent = 'Our Services';
    }
});

// Close features when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.features-toggle') && featuresContainer.classList.contains('show')) {
        toggleBtn.classList.remove('active');
        featuresContainer.classList.remove('show');
        toggleBtn.querySelector('span').textContent = 'Our Services';
    }
});

// Add hover effect for features
const features = document.querySelectorAll('.feature');
features.forEach(feature => {
    feature.addEventListener('mouseenter', () => {
        if (featuresContainer.classList.contains('show')) {
            feature.style.transform = 'scale(1.05)';
        }
    });
    
    feature.addEventListener('mouseleave', () => {
        if (featuresContainer.classList.contains('show')) {
            feature.style.transform = 'scale(1)';
        }
    });
});

// Enhanced icon animations
document.querySelectorAll('.icon-item').forEach((icon, index) => {
    icon.style.setProperty('--i', index);
    
    // Add hover effect with label animation
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.1) translateY(-5px)';
        const label = icon.querySelector('.icon-label');
        if (label) {
            label.style.opacity = '1';
            label.style.transform = 'translateX(-50%) scale(1.1)';
        }
    });
    
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1) translateY(0)';
        const label = icon.querySelector('.icon-label');
        if (label) {
            label.style.opacity = '0';
            label.style.transform = 'translateX(-50%) scale(1)';
        }
    });
});
