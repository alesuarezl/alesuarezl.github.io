// ============================================
// D&D CHARACTER SHEET - JavaScript
// Animaciones sutiles y elegantes
// ============================================

// ============================================
// Navigation Toggle (Mobile)
// ============================================
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// ============================================
// Smooth Scroll
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 70;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Navbar Background on Scroll
// ============================================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
        navbar.style.borderBottomColor = 'rgba(155, 89, 182, 0.3)';
    } else {
        navbar.style.borderBottomColor = 'var(--border-dark)';
    }
});

// ============================================
// Intersection Observer - Fade In Elements
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Elementos a animar
const animatedElements = document.querySelectorAll(
    '.stat-block, .proficiency-block, .quest-card, .parchment-block, .contact-card'
);

animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObserver.observe(el);
});

// Añadir estilos para elementos visibles
const style = document.createElement('style');
style.textContent = `
    .visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// ============================================
// Active Navigation Link Highlight
// ============================================
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                navLink.classList.add('active');
            }
        }
    });
});

// Añadir estilos para nav activo
const navStyle = document.createElement('style');
navStyle.textContent = `
    .nav-link.active {
        color: var(--gold) !important;
    }
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(navStyle);

// ============================================
// Attribute Hover Effect
// ============================================
document.querySelectorAll('.attribute').forEach(attr => {
    attr.addEventListener('mouseenter', function() {
        this.style.borderColor = 'var(--gold)';
        this.style.transform = 'scale(1.02)';
    });

    attr.addEventListener('mouseleave', function() {
        this.style.borderColor = 'var(--border-dark)';
        this.style.transform = 'scale(1)';
    });
});

// ============================================
// Counter Animation for Stats
// ============================================
function animateValue(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            element.textContent = end + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 16);
}

// Observar stats para animarlos
const statValues = document.querySelectorAll('.combat-value');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const value = entry.target.textContent;
            const numValue = parseInt(value);
            if (!isNaN(numValue) && numValue > 0) {
                animateValue(entry.target, 0, numValue, 1500);
            }
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statValues.forEach(stat => {
    const originalValue = stat.textContent;
    // Solo animar si es un número
    if (!isNaN(parseInt(originalValue))) {
        statsObserver.observe(stat);
    }
});

// ============================================
// Proficiency Dots Animation
// ============================================
const profDots = document.querySelectorAll('.prof-dot');
const dotsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const dots = entry.target.querySelectorAll('.prof-dot');
            dots.forEach((dot, index) => {
                setTimeout(() => {
                    dot.style.transform = 'scale(1)';
                    dot.style.opacity = '1';
                }, index * 100);
            });
            dotsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.proficiency-block').forEach(block => {
    const dots = block.querySelectorAll('.prof-dot');
    dots.forEach(dot => {
        dot.style.transform = 'scale(0)';
        dot.style.opacity = '0';
        dot.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
    });
    dotsObserver.observe(block);
});


// ============================================
// Parallax Effect for Header (sutil) - Solo en desktop
// ============================================
const characterHeader = document.querySelector('.character-header');
const headerContent = document.querySelector('.header-content');

if (characterHeader && headerContent && window.innerWidth > 768) {
    window.addEventListener('scroll', () => {
        if (window.innerWidth > 768) {
            const scrolled = window.pageYOffset;
            const headerHeight = characterHeader.offsetHeight;

            if (scrolled < headerHeight) {
                const opacity = 1 - (scrolled / headerHeight) * 0.5;
                const translateY = scrolled * 0.2;
                headerContent.style.opacity = opacity;
                headerContent.style.transform = `translateY(${translateY}px)`;
            }
        }
    });
}


// ============================================
// Level Badge Pulse (muy sutil)
// ============================================
const levelBadge = document.querySelector('.level-badge');

if (levelBadge) {
    setInterval(() => {
        levelBadge.style.boxShadow = '0 0 15px rgba(139, 0, 0, 0.4)';
        setTimeout(() => {
            levelBadge.style.boxShadow = 'none';
        }, 1500);
    }, 4000);
}

// ============================================
// Tooltip for Attributes
// ============================================
document.querySelectorAll('.attribute').forEach(attr => {
    const fullName = attr.querySelector('.attr-full');
    if (fullName) {
        fullName.style.transition = 'opacity 0.3s ease';
    }
});

// ============================================
// Print Character Sheet (Easter Egg)
// ============================================
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + P para imprimir
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        // El navegador manejará la impresión
        console.log('Imprimiendo ficha de personaje...');
    }
});

// ============================================
// Console Message
// ============================================
console.log('%c⚔ Ficha de Personaje ⚔', 'color: #b8860b; font-size: 16px; font-weight: bold;');
console.log('%cGuardián de Identidades Digitales', 'color: #a89b84; font-style: italic;');
console.log('%c"La identidad es el tesoro más valioso del reino digital"', 'color: #6b5f4d; font-size: 12px;');
