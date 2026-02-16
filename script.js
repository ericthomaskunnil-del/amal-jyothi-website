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
        navLinks.style.top = '80px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'rgba(10, 25, 47, 0.95)';
        navLinks.style.padding = '2rem';
        navLinks.style.alignItems = 'center';
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
    if (window.scrollY > 100) {
        nav.style.padding = '1rem 5%';
        nav.style.background = 'rgba(10, 25, 47, 0.9)';
    } else {
        nav.style.padding = '1.5rem 5%';
        nav.style.background = 'rgba(10, 25, 47, 0.7)';
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
