console.log("TecnoGestión JotaPe cargado correctamente");

// Referencia al botón de volver arriba
const backToTopBtn = document.getElementById('scroll-to-top');

// Control del scroll unificado (Header + Botón)
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    
    // 1. Lógica del Header (Tus animaciones existentes)
   if (window.scrollY > 50) {
    header.style.background = 'rgba(3, 8, 18, 0.9)';
    header.style.padding = window.innerWidth <= 600 ? '12px 16px' : '10px 80px';
} else {
    header.style.background = 'transparent';
    header.style.padding = window.innerWidth <= 600 ? '12px 16px' : '20px 80px';
}

    // 2. Lógica del Botón Volver Arriba
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

/* ===================================== */
/* MENÚ HAMBURGUESA */
/* ===================================== */

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (menuToggle && mobileMenu) {

    menuToggle.addEventListener('click', (event) => {
        event.stopPropagation();
        mobileMenu.classList.toggle('open');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
        });
    });

    document.addEventListener('pointerdown', (event) => {

        const clickDentroDelMenu = mobileMenu.contains(event.target);
        const clickEnBoton = menuToggle.contains(event.target);

        if (!clickDentroDelMenu && !clickEnBoton) {
            mobileMenu.classList.remove('open');
        }

    });

}
const translations = {

    es: {
        home: "Inicio",
        status: "Estado de reparación",
        services: "Servicios",
        software: "Software",
        about: "Sobre mí",
        contact: "Contacto",
        heroTagline: "TECNOLOGÍA QUE SIMPLIFICA TU TRABAJO",
heroTitle: 'Soluciones <span>tecnológicas</span> que impulsan tu negocio',
heroDescription: 'Soporte IT, redes, desarrollo de <span>software a medida</span> y automatización de procesos para particulares, profesionales y empresas.',
btnMeeting: "Agendar reunión",
btnRepair: "Consultar reparación",
btnServices: "Ver servicios",
btnWorldcup: "🏆 Fixture Mundial 2026",

otTagline: "CONSULTA ONLINE",
otTitle: "¿Tu equipo está en reparación?",
otDescription: "Consultá el estado de tu Orden de Trabajo en cualquier momento. Nuestro sistema te permite verificar avances, observaciones técnicas y el estado actual de la reparación.",
otBenefit1: "Seguimiento online",
otBenefit2: "Actualizaciones en tiempo real",
otBenefit3: "Disponible las 24 horas",
otNote: "Para ingresar deberás utilizar el DNI o CUIT informado al momento de registrar la reparación.",
otButton: "Consultar estado de mi equipo"
    },

    en: {
        home: "Home",
        status: "Repair Status",
        services: "Services",
        software: "Software",
        about: "About Me",
        contact: "Contact",
        heroTagline: "TECHNOLOGY THAT SIMPLIFIES YOUR WORK",
heroTitle: 'Technology <span>solutions</span> that boost your business',
heroDescription: 'IT support, networks, <span>custom software</span> development and process automation for individuals, professionals and businesses.',
btnMeeting: "Schedule meeting",
btnRepair: "Check repair status",
btnServices: "View services",
btnWorldcup: "🏆 2026 World Cup Fixture",

otTagline: "ONLINE INQUIRY",
otTitle: "Is your equipment under repair?",
otDescription: "Check the status of your Work Order at any time. Our system allows you to verify progress, technical notes and the current repair status.",
otBenefit1: "Online tracking",
otBenefit2: "Real-time updates",
otBenefit3: "Available 24 hours a day",
otNote: "To access, you must use the ID provided when the repair was registered.",
otButton: "Check my equipment status"
    },

    pt: {
        home: "Início",
        status: "Status do Reparo",
        services: "Serviços",
        software: "Software",
        about: "Sobre Mim",
        contact: "Contato",
        heroTagline: "TECNOLOGIA QUE SIMPLIFICA SEU TRABALHO",
heroTitle: 'Soluções <span>tecnológicas</span> que impulsionam seu negócio',
heroDescription: 'Suporte de TI, redes, desenvolvimento de <span>software sob medida</span> e automação de processos para particulares, profissionais e empresas.',
btnMeeting: "Agendar reunião",
btnRepair: "Consultar reparo",
btnServices: "Ver serviços",
btnWorldcup: "🏆 Copa do Mundo 2026",

otTagline: "CONSULTA ONLINE",
otTitle: "Seu equipamento está em reparo?",
otDescription: "Consulte o status da sua Ordem de Serviço a qualquer momento. Nosso sistema permite verificar o andamento, observações técnicas e o status atual do reparo.",
otBenefit1: "Acompanhamento online",
otBenefit2: "Atualizações em tempo real",
otBenefit3: "Disponível 24 horas por dia",
otNote: "Para acessar, você deverá utilizar o documento informado no momento do registro do reparo.",
otButton: "Consultar status do equipamento"
    }

};

function setLanguage(lang) {

    document.getElementById('nav-home').textContent = translations[lang].home;
    document.getElementById('nav-status').textContent = translations[lang].status;
    document.getElementById('nav-services').textContent = translations[lang].services;
    document.getElementById('nav-software').textContent = translations[lang].software;
    document.getElementById('nav-about').textContent = translations[lang].about;
    document.getElementById('nav-contact').textContent = translations[lang].contact;

    document.getElementById('m-nav-home').textContent = translations[lang].home;
    document.getElementById('m-nav-status').textContent = translations[lang].status;
    document.getElementById('m-nav-services').textContent = translations[lang].services;
    document.getElementById('m-nav-software').textContent = translations[lang].software;
    document.getElementById('m-nav-about').textContent = translations[lang].about;
    document.getElementById('m-nav-contact').textContent = translations[lang].contact;

    document.getElementById('hero-tagline').textContent = translations[lang].heroTagline;
    document.getElementById('hero-title').innerHTML = translations[lang].heroTitle;
    document.getElementById('hero-description').innerHTML = translations[lang].heroDescription;

    document.getElementById('btn-meeting').textContent = translations[lang].btnMeeting;
    document.getElementById('btn-repair').textContent = translations[lang].btnRepair;
    document.getElementById('btn-services').textContent = translations[lang].btnServices;
    document.getElementById('btn-worldcup').textContent = translations[lang].btnWorldcup;

    document.getElementById('ot-tagline').textContent = translations[lang].otTagline;
document.getElementById('ot-title').textContent = translations[lang].otTitle;
document.getElementById('ot-description').textContent = translations[lang].otDescription;

document.getElementById('ot-benefit-1').textContent = translations[lang].otBenefit1;
document.getElementById('ot-benefit-2').textContent = translations[lang].otBenefit2;
document.getElementById('ot-benefit-3').textContent = translations[lang].otBenefit3;

document.getElementById('ot-note').textContent = translations[lang].otNote;
document.getElementById('ot-button').textContent = translations[lang].otButton;

    localStorage.setItem('language', lang);
}

document.querySelectorAll('.lang-btn').forEach(btn => {

    btn.addEventListener('click', () => {

        const lang = btn.dataset.lang;

        document.querySelectorAll('.lang-btn').forEach(b => {
            b.classList.remove('active');
        });

        document.querySelectorAll(`[data-lang="${lang}"]`).forEach(b => {
            b.classList.add('active');
        });

        setLanguage(lang);
    });

});

const savedLanguage = localStorage.getItem('language') || 'es';
setLanguage(savedLanguage);

document.querySelectorAll(`[data-lang="${savedLanguage}"]`).forEach(b => {
    b.classList.add('active');
});