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
// MTG Card - Flip, Foil & 3D Tilt Effect
// ============================================
const mtgCard = document.getElementById('mtg-card');

// Rune ambient animation
const RUNES = ['ᛟ', '✦', '☽', '⊕', 'ᚦ', 'ᚲ', '✧', 'ᛉ', '✵', 'ᚹ', '⊛', '⟁', 'ᛞ', '᛫', '✴'];
const RUNE_COLORS = [
    { color: 'rgba(155,89,182,0.9)',  shadow: '0 0 8px rgba(155,89,182,1), 0 0 20px rgba(155,89,182,0.7)' },
    { color: 'rgba(46,204,113,0.9)',  shadow: '0 0 8px rgba(46,204,113,1),  0 0 20px rgba(46,204,113,0.6)' },
    { color: 'rgba(180,120,255,0.85)', shadow: '0 0 8px rgba(180,120,255,1), 0 0 18px rgba(155,89,182,0.6)' },
    { color: 'rgba(80,220,140,0.85)', shadow: '0 0 8px rgba(80,220,140,1),  0 0 18px rgba(46,204,113,0.5)' },
];
let _runeTimer = null;

function spawnCardRune() {
    const portrait = mtgCard ? mtgCard.closest('.character-portrait') : null;
    if (!portrait) return;
    const w = portrait.offsetWidth;
    const h = portrait.offsetHeight;
    const el = document.createElement('span');
    el.textContent = RUNES[Math.floor(Math.random() * RUNES.length)];
    // Spawn along bottom edge and sides, not in the middle of the card
    const zone = Math.random();
    let x, y;
    if (zone < 0.5) {
        // bottom strip
        x = (Math.random() * (w + 60)) - 30;
        y = h * 0.75 + Math.random() * (h * 0.3);
    } else if (zone < 0.75) {
        // left side
        x = -20 + Math.random() * 40;
        y = h * 0.2 + Math.random() * (h * 0.7);
    } else {
        // right side
        x = w - 20 + Math.random() * 40;
        y = h * 0.2 + Math.random() * (h * 0.7);
    }
    const drift = (Math.random() - 0.5) * 60;
    const rise  = 60 + Math.random() * 80;
    const size  = 18 + Math.random() * 21;
    const dur   = 3500 + Math.random() * 2500;
    const col   = RUNE_COLORS[Math.floor(Math.random() * RUNE_COLORS.length)];
    el.style.cssText = `
        position: absolute; left: ${x}px; top: ${y}px;
        font-size: ${size}px; color: ${col.color};
        pointer-events: none; z-index: 2; user-select: none;
        animation: runeFloat ${dur}ms ease-in-out forwards;
        --drift: ${drift}px; --rise: ${rise}px;
        text-shadow: ${col.shadow};
    `;
    portrait.appendChild(el);
    setTimeout(() => el.remove(), dur + 50);
}

if (mtgCard) {
    // Start rune ambient effect
    spawnCardRune();
    _runeTimer = setInterval(spawnCardRune, 290);

    mtgCard.addEventListener('mousemove', (e) => {
        const rect = mtgCard.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        // Posición del brillo (glare) y del gradiente foil
        mtgCard.style.setProperty('--mx', `${x * 100}%`);
        mtgCard.style.setProperty('--my', `${y * 100}%`);
        mtgCard.style.setProperty('--posx', `${50 + (x - 0.5) * 100}%`);

        // Inclinación 3D sutil (el giro completo lo hace el flipper en CSS)
        const rotateX = (0.5 - y) * 8;
        const rotateY = (x - 0.5) * 8;
        mtgCard.classList.add('foil-active');
        mtgCard.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    mtgCard.addEventListener('mouseleave', () => {
        mtgCard.classList.remove('foil-active');
        mtgCard.style.transform = '';
    });

    // Click para voltear la carta (los enlaces del dorso no voltean)
    mtgCard.addEventListener('click', (e) => {
        if (!e.target.closest('a')) {
            mtgCard.classList.toggle('flipped');
        }
    });
}

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
