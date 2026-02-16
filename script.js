// Custom Cursor
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Outline follows with lag
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    if (navLinks.style.display === 'flex') {
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'white';
        navLinks.style.padding = '2rem';
        navLinks.style.alignItems = 'center';
        navLinks.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
        navLinks.style.borderBottom = '1px solid rgba(0,0,0,0.05)';
    }
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.glass-card, .story-circle, .section-title, .admission-content, .about-content, .contact-info-card, .contact-form-card');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 150;

    revealElements.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
            reveal.style.opacity = '1';
            reveal.style.transform = 'translateY(0)';
        }
    });
};

// Initial styles for reveal
revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'all 0.6s ease-out';
});

window.addEventListener('scroll', revealOnScroll);

// Header Scroll Effect
const nav = document.querySelector('.glass-nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.padding = '0.5rem 5%';
        nav.style.height = '60px'; // Compact on scroll
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
        nav.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.padding = '0.8rem 5%';
        nav.style.height = '70px'; // Default compact size
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
});

// Contact RSVP Form Submission
const contactForm = document.getElementById('contact-rsvp-form');
const formConfirmation = document.getElementById('form-confirmation');

if (contactForm && formConfirmation) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        contactForm.style.display = 'none';
        formConfirmation.style.display = 'block';
    });
}

// Magnetic Buttons Effect
const magneticButtons = document.querySelectorAll('.btn-magnetic');

magneticButtons.forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
        const position = btn.getBoundingClientRect();
        const x = e.clientX - position.left - position.width / 2;
        const y = e.clientY - position.top - position.height / 2;

        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.5}px)`;

        const btnText = btn.querySelector('.btn-text');
        if (btnText) {
            btnText.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        }
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0px, 0px)';

        const btnText = btn.querySelector('.btn-text');
        if (btnText) {
            btnText.style.transform = 'translate(0px, 0px)';
        }
    });
});
