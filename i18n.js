// ============================================
// Internationalization (i18n) System
// Spanish / English based on browser language
// ============================================

const translations = {
    en: {
        // Navigation
        'nav.characterSheet': 'Alejandro',
        'nav.background': 'Background',
        'nav.education': 'Education',
        'nav.proficiencies': 'Proficiencies',
        'nav.quests': 'Quests',
        'nav.contact': 'Contact',

        // Header
        'header.title': 'Guardian of Digital Identities',
        'header.classLabel': 'Class',
        'header.class': 'Telecommunications + Cybersecurity Engineer',
        'header.specializationLabel': 'Specialization',
        'header.specialization': 'Identity & Access Management',
        'header.yearsLabel': 'Years in Industry',
        'header.techLabel': 'IAM Technologies',
        'header.viewQuests': 'View Quests',
        'header.contact': 'Contact',
        'header.scrollHint': 'Scroll down to see more',

        // Quest dates
        'quest.present': 'Present',

        // MTG Card
        'card.type': 'Legendary Creature — Identity Guardian',
        'card.ability1': '<strong>Vigilance, hexproof</strong>',
        'card.ability2': 'Whenever an identity enters the realm, you may automate its lifecycle.',
        'card.flavor': '"None shall pass without proper authentication."',
        'card.rarity': 'IAM · Mythic Rare',
        'cardBack.title': 'Establish Contact',
        'cardBack.quote': '"Identity is the most valuable treasure in the digital realm"',

        // Background Section
        'section.background': 'Background',
        'background.p1': '<span class="drop-cap">F</span>orged in the ancient arts of <strong>Telecommunications Engineering</strong>, this guardian has dedicated their existence to protecting digital realms from the forces of chaos. Their mastery of <strong>Identity & Access Management (IAM)</strong> allows them to safeguard the lifecycle of digital identities in this vast and perilous world.',
        'background.p2': 'Their magic extends through both the <strong>celestial Cloud realms</strong> and the <strong>earthly On-Premise fortresses</strong>, weaving enchantments of authentication, authorization, and identity governance under the most sacred protection standards.',
        'background.p3': 'Driven by an <strong>obsessive quest for automation</strong>, this guardian seeks to eliminate repetitive toil through the arcane power of scripting and orchestration, freeing mortals from mundane labor and allowing them to focus on more strategic endeavors. Every manual task discovered is seen as a challenge to be conquered.',
        'background.idealLabel': 'Ideal',
        'background.idealValue': 'Protect the identity of every digital soul',
        'background.bondLabel': 'Bond',
        'background.bondValue': "The realm's security above all else",
        'background.flawLabel': 'Flaw',
        'background.flawValue': 'Perfectionist to the point of obsession',

        // Education Section
        'section.education': 'Education',
        'edu.master': "Master's Degree in Cybersecurity",
        'edu.masterDetail': "Distinction in Master's Thesis CNN-based network intrusion detection over encrypted traffic",
        'edu.bachelor': 'Telecommunications Engineering',
        'edu.bachelorDetail1': 'Distinction in Network Protocols',
        'edu.bachelorDetail2': "Distinction in Bachelor's Thesis: Deep Learning for histological images",

        // Proficiencies Section
        'section.proficiencies': 'Proficiencies',
        'prof.coreAbilities': 'Core Abilities',
        'prof.mainSkills': 'Main Skills',
        'prof.identityMagic': 'Identity Magic',
        'prof.iamPamSso': 'IAM / PAM / SSO',
        'prof.celestialRealm': 'Celestial Realm',
        'prof.awsCloud': 'AWS Cloud',
        'prof.arcaneScripts': 'Arcane Scripts',
        'prof.development': 'Development',
        'prof.iam': 'IAM',
        'prof.cybersecurity': 'Cybersecurity',
        'prof.softwareDev': 'Software Development',

        // Quest Section
        'section.quests': 'Quest Log',
        'quest.inProgress': 'In Progress',
        'quest.completed': 'Completed',
        'quest.skills': 'Skills:',

        // Quest 1 - iC Consult
        'quest1.title': 'The Cloud Identity Architects',
        'quest1.description': 'Joining an elite guild of identity sorcerers, implementing and customizing SailPoint Identity Security Cloud instances across multiple realms.',

        // Quest 2 - Holcim
        'quest2.title': 'The Guardian of the Lifecycle',
        'quest2.description': 'Over three years defending the identity fortress: customizing SailPoint IIQ, automating user lifecycle rituals with Python and AWS, managing cloud infrastructure, and providing Level 3 support to the realm\'s defenders.',

        // Quest 3 - Deloitte
        'quest3.title': 'The Senior Consul of Identities',
        'quest3.description': 'Ascending to senior rank, analyzing and implementing IGA enchantments with SailPoint IIQ, and weaving Single Sign-On spells with Okta for various kingdoms.',

        // Quest 4 - Minsait
        'quest4.title': 'The Keeper of the Gates',
        'quest4.description': 'First steps into the realm of security: implementing access control barriers, authentication wards, monitoring sacred applications, and conducting audit rituals.',

        // Quest 5 - Emergya
        'quest5.title': "The Apprentice's Trial",
        'quest5.description': 'Beginning the journey as a Python craftsman, forging web applications and services with Django in the workshops of Emergya.',

        // Contact Section
        'section.contact': 'Establish Contact',
        'contact.intro': 'Do you have a quest that requires my skills? Do you wish to forge an alliance?<br>Send a message and I shall respond when the stars align.',
        'contact.scroll': 'Scroll',
        'contact.guild': 'Guild',
        'contact.grimoire': 'Grimoire',

        // Footer
        'footer.rights': '© 2026 Alejandro Suárez Lamadrid. All rights reserved.',
        'footer.quote': '"Identity is the most valuable treasure in the digital realm"'
    },
    es: {
        // Navigation
        'nav.characterSheet': 'Alejandro',
        'nav.background': 'Trasfondo',
        'nav.education': 'Educación',
        'nav.proficiencies': 'Competencias',
        'nav.quests': 'Misiones',
        'nav.contact': 'Contacto',

        // Header
        'header.title': 'Guardián de Identidades Digitales',
        'header.classLabel': 'Clase',
        'header.class': 'Ingeniero de Telecomunicaciones + Ciberseguridad',
        'header.specializationLabel': 'Especialización',
        'header.specialization': 'Gestión de Identidades y Accesos',
        'header.yearsLabel': 'Años en el Sector',
        'header.techLabel': 'Tecnologías IAM',
        'header.viewQuests': 'Ver Misiones',
        'header.contact': 'Contacto',
        'header.scrollHint': 'Desplázate para ver más',

        // Quest dates
        'quest.present': 'Actualidad',

        // MTG Card
        'card.type': 'Criatura Legendaria — Guardián de Identidades',
        'card.ability1': '<strong>Vigilancia, antimaleficio</strong>',
        'card.ability2': 'Siempre que una identidad entre al reino, puedes automatizar su ciclo de vida.',
        'card.flavor': '"Nadie pasará sin la debida autenticación."',
        'card.rarity': 'IAM · Rara Mítica',
        'cardBack.title': 'Establecer Contacto',
        'cardBack.quote': '"La identidad es el tesoro más valioso del reino digital"',

        // Background Section
        'section.background': 'Trasfondo',
        'background.p1': '<span class="drop-cap">F</span>orjado en las antiguas artes de la <strong>Ingeniería de Telecomunicaciones</strong>, este guardián ha dedicado su existencia a proteger los reinos digitales de las fuerzas del caos. Su dominio de la <strong>Gestión de Identidades y Accesos (IAM)</strong> le permite salvaguardar el ciclo de vida de las identidades digitales en este vasto y peligroso mundo.',
        'background.p2': 'Su magia se extiende tanto por los <strong>reinos celestiales del Cloud</strong> como por las <strong>fortalezas terrenales On-Premise</strong>, tejiendo encantamientos de autenticación, autorización y gobernanza de identidades bajo los más sagrados estándares de protección.',
        'background.p3': 'Impulsado por una <strong>obsesiva búsqueda de la automatización</strong>, este guardián busca eliminar el trabajo repetitivo mediante el poder arcano del scripting y la orquestación, liberando a los mortales del trabajo mundano y permitiéndoles centrarse en tareas más estratégicas. Cada tarea manual descubierta es vista como un desafío a conquistar.',
        'background.idealLabel': 'Ideal',
        'background.idealValue': 'Proteger la identidad de cada alma digital',
        'background.bondLabel': 'Vínculo',
        'background.bondValue': 'La seguridad del reino por encima de todo',
        'background.flawLabel': 'Defecto',
        'background.flawValue': 'Perfeccionista hasta la obsesión',

        // Education Section
        'section.education': 'Educación',
        'edu.master': 'Máster en Ciberseguridad',
        'edu.masterDetail': 'Matrícula de Honor en TFM: Detección de intrusiones en red mediante CNN sobre tráfico cifrado',
        'edu.bachelor': 'Ingeniería de Telecomunicación',
        'edu.bachelorDetail1': 'Matrícula de Honor en Protocolos de Red',
        'edu.bachelorDetail2': 'Matrícula de Honor en TFG: Deep Learning para imágenes histológicas',

        // Proficiencies Section
        'section.proficiencies': 'Competencias',
        'prof.coreAbilities': 'Habilidades Principales',
        'prof.mainSkills': 'Skills Principales',
        'prof.identityMagic': 'Magia de Identidad',
        'prof.iamPamSso': 'IAM / PAM / SSO',
        'prof.celestialRealm': 'Reino Celestial',
        'prof.awsCloud': 'AWS Cloud',
        'prof.arcaneScripts': 'Scripts Arcanos',
        'prof.development': 'Desarrollo',
        'prof.iam': 'IAM',
        'prof.cybersecurity': 'Ciberseguridad',
        'prof.softwareDev': 'Desarrollo de Software',

        // Quest Section
        'section.quests': 'Registro de Misiones',
        'quest.inProgress': 'En Progreso',
        'quest.completed': 'Completada',
        'quest.skills': 'Habilidades:',

        // Quest 1 - iC Consult
        'quest1.title': 'Los Arquitectos de Identidad Cloud',
        'quest1.description': 'Uniéndose a un gremio de élite de hechiceros de identidad, implementando y personalizando instancias de SailPoint Identity Security Cloud en múltiples reinos.',

        // Quest 2 - Holcim
        'quest2.title': 'El Guardián del Ciclo de Vida',
        'quest2.description': 'Más de tres años defendiendo la fortaleza de identidad: personalizando SailPoint IIQ, automatizando rituales del ciclo de vida de usuarios con Python y AWS, gestionando infraestructura cloud y proporcionando soporte de Nivel 3 a los defensores del reino.',

        // Quest 3 - Deloitte
        'quest3.title': 'El Cónsul Senior de Identidades',
        'quest3.description': 'Ascendiendo al rango senior, analizando e implementando encantamientos IGA con SailPoint IIQ, y tejiendo hechizos de Single Sign-On con Okta para varios reinos.',

        // Quest 4 - Minsait
        'quest4.title': 'El Guardián de las Puertas',
        'quest4.description': 'Primeros pasos en el reino de la seguridad: implementando barreras de control de acceso, protecciones de autenticación, monitorizando aplicaciones sagradas y realizando rituales de auditoría.',

        // Quest 5 - Emergya
        'quest5.title': 'La Prueba del Aprendiz',
        'quest5.description': 'Comenzando el viaje como artesano de Python, forjando aplicaciones web y servicios con Django en los talleres de Emergya.',

        // Contact Section
        'section.contact': 'Establecer Contacto',
        'contact.intro': '¿Tienes una misión que requiera mis habilidades? ¿Deseas forjar una alianza?<br>Envía un mensaje y responderé cuando los astros se alineen.',
        'contact.scroll': 'Pergamino',
        'contact.guild': 'Gremio',
        'contact.grimoire': 'Grimorio',

        // Footer
        'footer.rights': '© 2026 Alejandro Suárez Lamadrid. Todos los derechos reservados.',
        'footer.quote': '"La identidad es el tesoro más valioso del reino digital"'
    }
};

// Detect browser language and return 'es' or 'en'
function detectLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    return browserLang.startsWith('es') ? 'es' : 'en';
}

// Get current language (from localStorage or detect)
function getCurrentLanguage() {
    return localStorage.getItem('preferredLanguage') || detectLanguage();
}

// Set language preference
function setLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);
    applyTranslations(lang);
}

// Apply translations to the page
function applyTranslations(lang) {
    const t = translations[lang];

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Update page title
    document.title = lang === 'es' ? 'Alejandro | Guardián de Identidades' : 'Alejandro | Identity Guardian';

    // Translate all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (t[key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = t[key];
            } else {
                element.innerHTML = t[key];
            }
        }
    });

    // Update language toggle button if exists
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.textContent = lang === 'es' ? 'EN' : 'ES';
        langToggle.setAttribute('title', lang === 'es' ? 'Switch to English' : 'Cambiar a Español');
    }
}

// Initialize i18n on page load
document.addEventListener('DOMContentLoaded', () => {
    const lang = getCurrentLanguage();
    applyTranslations(lang);
});

// Toggle language function (for language switcher button)
function toggleLanguage() {
    const currentLang = getCurrentLanguage();
    const newLang = currentLang === 'es' ? 'en' : 'es';
    setLanguage(newLang);
}
