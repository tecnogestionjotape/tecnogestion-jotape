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
otButton: "Consultar estado de mi equipo",

servicesTagline: "LO QUE HACEMOS",
servicesTitle: 'Soluciones a la medida de tus <span>necesidades</span>',

serviceTitle1: "Soporte Técnico & IT",
serviceDesc1: "Asistencia integral presencial y remota para particulares, empresas y profesionales. Mantenimiento preventivo, optimización de sistemas y resolución rápida de fallas críticas.",

serviceTitle2: "Desarrollo a Medida",
serviceDesc2: "Diseño y programación de software adaptado 100% a tus procesos. Automatización de tareas, gestión de datos en planillas inteligentes y optimización de flujos de trabajo.",

serviceTitle3: "Redes y Conectividad",
serviceDesc3: "Instalación, configuración y mantenimiento de redes comerciales y del hogar. Soluciones de conectividad estables, seguras y optimizadas para un alto rendimiento.",

serviceTitle4: "Recuperación de Equipos",
serviceDesc4: "No descartes tus equipos antiguos o lentos. Les damos una segunda vida instalando y configurando sistemas operativos Linux livianos, logrando fluidez, estabilidad y seguridad total.",

serviceTitle5: "Automatización y Control",
serviceDesc5: "Optimización de procesos mediante lógica programada y sistemas de control inteligentes. Soluciones concretas para mejorar la eficiencia y el rendimiento de tus equipos.",

serviceTitle6: "Recuperación de Datos",
serviceDesc6: "Protocolos de emergencia para el salvamento y extracción de información valiosa desde discos rígidos, SSD's o memorias dañadas. Tu tranquilidad es prioridad.",
swTagline: "SOFTWARE & AUTOMATIZACIÓN",

swTitle: 'Desarrollamos el software<br><span>que tu negocio necesita</span>',

swDesc: 'Junto a <a href="https://ujautomatizaciones.com.ar" target="_blank">UJ Automatizaciones</a>, diseñamos y desarrollamos soluciones de software completamente a medida. Eliminamos las tareas repetitivas, automatizamos procesos y liberamos a tu equipo para que pueda enfocarse en lo que realmente importa: hacer crecer tu negocio.',

swAppsTitle: "Algunos de nuestros desarrollos",

appName1: "Sistema de Órdenes de Trabajo",
appBadge1: "Talleres de reparación",
appDesc1: "Gestión completa de órdenes de trabajo para talleres. Panel de administración para el equipo técnico y portal de consulta de estado para el cliente en tiempo real.",
appBtn1a: "Panel Taller",
appBtn1b: "Portal Cliente",

appName2: "Control de Vencimientos",
appBadge2: "Farmacias",
appDesc2: "Seguimiento automatizado de fechas de vencimiento de productos. Alertas preventivas para evitar pérdidas y garantizar el cumplimiento normativo.",
appBtn2: "Ver demo",

appName3: "Control de Stock",
appBadge3: "Comercios y depósitos",
appDesc3: "Gestión de inventario en tiempo real. Controlá entradas, salidas, stock mínimo y movimientos desde cualquier dispositivo.",
appBtn3: "Ver demo",

appName4: "Inscripción a Mesas de Examen",
appBadge4: "Escuelas secundarias",
appDesc4: "Sistema digital para que los alumnos se inscriban a mesas de examen de forma autónoma. Simplifica la gestión administrativa y elimina el papeleo.",
appBtn4: "Ver demo",

feature1: "Años de<br>experiencia",
feature2: "Atención personalizada",

feature3Title: "Software",
feature3: "Desarrollo a medida",

feature4Title: "Redes",
feature4: "Conectividad profesional",

feature5Title: "Soporte",
feature5: "Asistencia integral IT",

aboutTagline: "SOBRE MÍ",

aboutTitle: "+ de 20 años transformando tecnología en soluciones",

aboutText1: "Soy Juan Pablo, Técnico Electrónico, Técnico en Informática de Gestión y Docente, con más de 20 años de trayectoria dedicados a la tecnología, la reparación de equipos informáticos y el desarrollo de soluciones para particulares, profesionales y empresas.",

aboutText2: "A lo largo de mi carrera he trabajado en soporte técnico, infraestructura, redes, programación, automatización y control, participando en proyectos que combinan experiencia técnica, innovación y resolución práctica de problemas. Mi objetivo siempre ha sido transformar la tecnología en una herramienta útil, accesible y orientada a resultados.",

aboutText3: "Actualmente combino mi actividad profesional con la docencia, compartiendo conocimientos mientras continúo desarrollando soluciones basadas en Inteligencia Artificial, Automatización de Procesos, Arduino y Software a Medida. Creo firmemente en la capacitación continua y en la mejora constante como pilares fundamentales para ofrecer servicios modernos, eficientes y adaptados a las necesidades reales de cada cliente.",

aboutBadge1: "⚡ +20 años de experiencia",
aboutBadge2: "⚙️ Automatización y Control",
aboutBadge3: "💻 Desarrollo de Software",
aboutBadge4: "🔧 Soporte Técnico IT",
aboutBadge5: "📚 Docencia y Capacitación",

contactTagline: "CONTACTO",

contactTitle: "¿Necesitas ayuda con tecnología?",

contactDescription: "Estoy disponible para ayudarte con soporte técnico, desarrollo de software, automatización de procesos, redes, conectividad y asesoramiento tecnológico. Elegí el medio de contacto que prefieras.",

contactCardTitle1: "WhatsApp",
contactCardDesc1: "Consulta rápida y personalizada",

contactCardTitle2: "Agendar reunión",
contactCardDesc2: "Elegí fecha y horario disponible",

contactCardTitle3: "Email",
contactCardTitle4: "Instagram",

footerDescription: "Soluciones tecnológicas para personas, profesionales y empresas.",
footerLinkHome: "Inicio",
footerLinkServices: "Servicios",
footerLinkSoftware: "Software",
footerLinkAbout: "Sobre mí",
footerLinkContact: "Contacto",
footerSlogan: "+ de 20 años transformando tecnología en soluciones."
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
otButton: "Check my equipment status",

servicesTagline: "WHAT WE DO",
servicesTitle: 'Solutions tailored to your <span>needs</span>',

serviceTitle1: "Technical Support & IT",
serviceDesc1: "Comprehensive on-site and remote assistance for individuals, businesses and professionals. Preventive maintenance, system optimization and rapid resolution of critical failures.",

serviceTitle2: "Custom Development",
serviceDesc2: "Design and development of software fully adapted to your processes. Task automation, intelligent data management and workflow optimization.",

serviceTitle3: "Networks & Connectivity",
serviceDesc3: "Installation, configuration and maintenance of home and business networks. Stable, secure and optimized connectivity solutions for maximum performance.",

serviceTitle4: "Equipment Recovery",
serviceDesc4: "Don't discard old or slow equipment. We give it a second life by installing lightweight Linux operating systems, achieving speed, stability and security.",

serviceTitle5: "Automation & Control",
serviceDesc5: "Process optimization through programmed logic and intelligent control systems. Practical solutions to improve efficiency and performance.",

serviceTitle6: "Data Recovery",
serviceDesc6: "Emergency procedures for recovering valuable information from hard drives, SSDs and damaged storage devices. Your peace of mind is our priority.",
swTagline: "SOFTWARE & AUTOMATION",
swTitle: 'We develop the software<br><span>your business needs</span>',
swDesc: 'Together with <a href="https://ujautomatizaciones.com.ar" target="_blank">UJ Automatizaciones</a>, we design and develop fully customized software solutions. We eliminate repetitive tasks, automate processes and free your team to focus on what really matters: growing your business.',
swAppsTitle: "Some of our developments",

appName1: "Work Order Management System",
appBadge1: "Repair workshops",
appDesc1: "Complete work order management for repair workshops. Administration panel for technicians and real-time customer status portal.",
appBtn1a: "Workshop Panel",
appBtn1b: "Customer Portal",

appName2: "Expiration Control",
appBadge2: "Pharmacies",
appDesc2: "Automated monitoring of product expiration dates. Preventive alerts to avoid losses and ensure regulatory compliance.",
appBtn2: "View Demo",

appName3: "Inventory Control",
appBadge3: "Businesses & Warehouses",
appDesc3: "Real-time inventory management. Track incoming and outgoing products, minimum stock levels and movements from any device.",
appBtn3: "View Demo",

appName4: "Exam Registration",
appBadge4: "High Schools",
appDesc4: "Digital system that allows students to register for exams independently. Simplifies administration and eliminates paperwork.",
appBtn4: "View Demo",

feature1: "Years of<br>experience",
feature2: "Personalized service",

feature3Title: "Software",
feature3: "Custom development",

feature4Title: "Networks",
feature4: "Professional connectivity",

feature5Title: "Support",
feature5: "Comprehensive IT support",

aboutTagline: "ABOUT ME",

aboutTitle: "20+ years transforming technology into solutions",

aboutText1: "I am Juan Pablo, Electronics Technician, IT Management Technician and Teacher, with more than 20 years of experience dedicated to technology, computer repair and the development of solutions for individuals, professionals and businesses.",

aboutText2: "Throughout my career I have worked in technical support, infrastructure, networking, programming, automation and control, participating in projects that combine technical expertise, innovation and practical problem solving. My goal has always been to transform technology into a useful, accessible and results-oriented tool.",

aboutText3: "I currently combine my professional activity with teaching, sharing knowledge while continuing to develop solutions based on Artificial Intelligence, Process Automation, Arduino and Custom Software. I strongly believe in continuous learning and constant improvement as key pillars for delivering modern, efficient services adapted to real customer needs.",

aboutBadge1: "⚡ 20+ years of experience",
aboutBadge2: "⚙️ Automation & Control",
aboutBadge3: "💻 Software Development",
aboutBadge4: "🔧 IT Technical Support",
aboutBadge5: "📚 Teaching & Training",

contactTagline: "CONTACT",

contactTitle: "Need help with technology?",

contactDescription: "I'm available to help you with technical support, software development, process automation, networking, connectivity and technology consulting. Choose your preferred contact method.",

contactCardTitle1: "WhatsApp",
contactCardDesc1: "Fast and personalized assistance",

contactCardTitle2: "Schedule Meeting",
contactCardDesc2: "Choose an available date and time",

contactCardTitle3: "Email",
contactCardTitle4: "Instagram",

footerDescription: "Technology solutions for individuals, professionals and businesses.",
footerLinkHome: "Home",
footerLinkServices: "Services",
footerLinkSoftware: "Software",
footerLinkAbout: "About Me",
footerLinkContact: "Contact",
footerSlogan: "20+ years transforming technology into solutions."
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
otButton: "Consultar status do equipamento",

servicesTagline: "O QUE FAZEMOS",
servicesTitle: 'Soluções sob medida para suas <span>necessidades</span>',

serviceTitle1: "Suporte Técnico & TI",
serviceDesc1: "Assistência completa presencial e remota a particulares, empresas e profissionais. Manutenção preventiva, otimização de sistemas e resolução rápida de avarias críticas.",

serviceTitle2: "Desenvolvimento Sob Medida",
serviceDesc2: "Projeto e desenvolvimento de software totalmente adaptado aos seus processos. Automação de tarefas, gestão inteligente de dados e otimização de fluxos de trabalho.",

serviceTitle3: "Redes e Conectividade",
serviceDesc3: "Instalação, configuração e manutenção de redes residenciais e empresariais. Soluções estáveis, seguras e otimizadas para alto desempenho.",

serviceTitle4: "Recuperação de Equipamentos",
serviceDesc4: "Não descarte equipamentos antigos ou lentos. Damos uma segunda vida instalando sistemas Linux leves, alcançando fluidez, estabilidade e segurança.",

serviceTitle5: "Automação e Controle",
serviceDesc5: "Otimização de processos através de lógica programada e sistemas inteligentes de controle. Soluções práticas para aumentar a eficiência e o desempenho.",

serviceTitle6: "Recuperação de Dados",
serviceDesc6: "Procedimentos de emergência para recuperar informações valiosas de HDs, SSDs e dispositivos danificados. Sua tranquilidade é nossa prioridade.",
swTagline: "SOFTWARE & AUTOMAÇÃO",
swTitle: 'Desenvolvemos o software<br><span>que sua empresa precisa</span>',
swDesc: 'Junto com <a href="https://ujautomatizaciones.com.ar" target="_blank">UJ Automatizaciones</a>, projetamos e desenvolvemos soluções de software totalmente personalizadas. Eliminamos tarefas repetitivas, automatizamos processos e liberamos sua equipe para focar no que realmente importa: fazer seu negócio crescer.',
swAppsTitle: "Alguns dos nossos desenvolvimentos",

appName1: "Sistema de Ordens de Serviço",
appBadge1: "Oficinas de reparo",
appDesc1: "Gestão completa de ordens de serviço para oficinas. Painel administrativo para técnicos e portal de acompanhamento em tempo real para clientes.",
appBtn1a: "Painel da Oficina",
appBtn1b: "Portal do Cliente",

appName2: "Controle de Validades",
appBadge2: "Farmácias",
appDesc2: "Monitoramento automatizado das datas de validade dos produtos. Alertas preventivos para evitar perdas e garantir conformidade regulatória.",
appBtn2: "Ver demonstração",

appName3: "Controle de Estoque",
appBadge3: "Comércios e Depósitos",
appDesc3: "Gestão de estoque em tempo real. Controle entradas, saídas, estoque mínimo e movimentações de qualquer dispositivo.",
appBtn3: "Ver demonstração",

appName4: "Inscrição em Exames",
appBadge4: "Escolas Secundárias",
appDesc4: "Sistema digital para que os alunos se inscrevam nos exames de forma autônoma. Simplifica a gestão administrativa e elimina a papelada.",
appBtn4: "Ver demonstração",

feature1: "Anos de<br>experiência",
feature2: "Atendimento personalizado",

feature3Title: "Software",
feature3: "Desenvolvimento sob medida",

feature4Title: "Redes",
feature4: "Conectividade profissional",

feature5Title: "Suporte",
feature5: "Assistência completa de TI",

aboutTagline: "SOBRE MIM",

aboutTitle: "Mais de 20 anos transformando tecnologia em soluções",

aboutText1: "Sou Juan Pablo, Técnico em Eletrônica, Técnico em Informática de Gestão e Professor, com mais de 20 anos de experiência dedicados à tecnologia, reparação de equipamentos informáticos e desenvolvimento de soluções para pessoas, profissionais e empresas.",

aboutText2: "Ao longo da minha carreira trabalhei com suporte técnico, infraestrutura, redes, programação, automação e controle, participando de projetos que combinam experiência técnica, inovação e resolução prática de problemas. Meu objetivo sempre foi transformar a tecnologia em uma ferramenta útil, acessível e orientada para resultados.",

aboutText3: "Atualmente combino minha atividade profissional com a docência, compartilhando conhecimento enquanto continuo desenvolvendo soluções baseadas em Inteligência Artificial, Automação de Processos, Arduino e Software Sob Medida. Acredito firmemente na capacitação contínua e na melhoria constante como pilares fundamentais para oferecer serviços modernos, eficientes e adaptados às necessidades reais de cada cliente.",

aboutBadge1: "⚡ Mais de 20 anos de experiência",
aboutBadge2: "⚙️ Automação e Controle",
aboutBadge3: "💻 Desenvolvimento de Software",
aboutBadge4: "🔧 Suporte Técnico de TI",
aboutBadge5: "📚 Ensino e Capacitação",

contactTagline: "CONTATO",

contactTitle: "Precisa de ajuda com tecnologia?",

contactDescription: "Estou disponível para ajudar com suporte técnico, desenvolvimento de software, automação de processos, redes, conectividade e consultoria tecnológica. Escolha o meio de contato que preferir.",

contactCardTitle1: "WhatsApp",
contactCardDesc1: "Atendimento rápido e personalizado",

contactCardTitle2: "Agendar reunião",
contactCardDesc2: "Escolha uma data e horário disponíveis",

contactCardTitle3: "Email",
contactCardTitle4: "Instagram",

footerDescription: "Soluções tecnológicas para pessoas, profissionais e empresas.",
footerLinkHome: "Início",
footerLinkServices: "Serviços",
footerLinkSoftware: "Software",
footerLinkAbout: "Sobre Mim",
footerLinkContact: "Contato",
footerSlogan: "Mais de 20 anos transformando tecnologia em soluções."
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

document.getElementById('services-tagline').textContent = translations[lang].servicesTagline;
document.getElementById('services-title').innerHTML = translations[lang].servicesTitle;

document.getElementById('service-title-1').textContent = translations[lang].serviceTitle1;
document.getElementById('service-desc-1').textContent = translations[lang].serviceDesc1;

document.getElementById('service-title-2').textContent = translations[lang].serviceTitle2;
document.getElementById('service-desc-2').textContent = translations[lang].serviceDesc2;

document.getElementById('service-title-3').textContent = translations[lang].serviceTitle3;
document.getElementById('service-desc-3').textContent = translations[lang].serviceDesc3;

document.getElementById('service-title-4').textContent = translations[lang].serviceTitle4;
document.getElementById('service-desc-4').textContent = translations[lang].serviceDesc4;

document.getElementById('service-title-5').textContent = translations[lang].serviceTitle5;
document.getElementById('service-desc-5').textContent = translations[lang].serviceDesc5;

document.getElementById('service-title-6').textContent = translations[lang].serviceTitle6;
document.getElementById('service-desc-6').textContent = translations[lang].serviceDesc6;
document.getElementById('sw-tagline').textContent = translations[lang].swTagline;
document.getElementById('sw-title').innerHTML = translations[lang].swTitle;
document.getElementById('sw-desc').innerHTML = translations[lang].swDesc;
document.getElementById('sw-apps-title').textContent = translations[lang].swAppsTitle;

document.getElementById('app-name-1').textContent = translations[lang].appName1;
document.getElementById('app-badge-1').textContent = translations[lang].appBadge1;
document.getElementById('app-desc-1').textContent = translations[lang].appDesc1;
document.getElementById('app-btn-1a').textContent = translations[lang].appBtn1a;
document.getElementById('app-btn-1b').textContent = translations[lang].appBtn1b;

document.getElementById('app-name-2').textContent = translations[lang].appName2;
document.getElementById('app-badge-2').textContent = translations[lang].appBadge2;
document.getElementById('app-desc-2').textContent = translations[lang].appDesc2;
document.getElementById('app-btn-2').textContent = translations[lang].appBtn2;

document.getElementById('app-name-3').textContent = translations[lang].appName3;
document.getElementById('app-badge-3').textContent = translations[lang].appBadge3;
document.getElementById('app-desc-3').textContent = translations[lang].appDesc3;
document.getElementById('app-btn-3').textContent = translations[lang].appBtn3;

document.getElementById('app-name-4').textContent = translations[lang].appName4;
document.getElementById('app-badge-4').textContent = translations[lang].appBadge4;
document.getElementById('app-desc-4').textContent = translations[lang].appDesc4;
document.getElementById('app-btn-4').textContent = translations[lang].appBtn4;

document.getElementById('feature-1').innerHTML = translations[lang].feature1;
document.getElementById('feature-2').textContent = translations[lang].feature2;

document.getElementById('feature-3-title').textContent = translations[lang].feature3Title;
document.getElementById('feature-3').textContent = translations[lang].feature3;

document.getElementById('feature-4-title').textContent = translations[lang].feature4Title;
document.getElementById('feature-4').textContent = translations[lang].feature4;

document.getElementById('feature-5-title').textContent = translations[lang].feature5Title;
document.getElementById('feature-5').textContent = translations[lang].feature5;

document.getElementById('about-tagline').textContent = translations[lang].aboutTagline;

document.getElementById('about-title').textContent = translations[lang].aboutTitle;

document.getElementById('about-text-1').textContent = translations[lang].aboutText1;
document.getElementById('about-text-2').textContent = translations[lang].aboutText2;
document.getElementById('about-text-3').textContent = translations[lang].aboutText3;

document.getElementById('about-badge-1').textContent = translations[lang].aboutBadge1;
document.getElementById('about-badge-2').textContent = translations[lang].aboutBadge2;
document.getElementById('about-badge-3').textContent = translations[lang].aboutBadge3;
document.getElementById('about-badge-4').textContent = translations[lang].aboutBadge4;
document.getElementById('about-badge-5').textContent = translations[lang].aboutBadge5;

document.getElementById('contact-tagline').textContent = translations[lang].contactTagline;
document.getElementById('contact-title').textContent = translations[lang].contactTitle;
document.getElementById('contact-description').textContent = translations[lang].contactDescription;
document.getElementById('contact-card-title-1').textContent = translations[lang].contactCardTitle1;
document.getElementById('contact-card-desc-1').textContent = translations[lang].contactCardDesc1;
document.getElementById('contact-card-title-2').textContent = translations[lang].contactCardTitle2;
document.getElementById('contact-card-desc-2').textContent = translations[lang].contactCardDesc2;
document.getElementById('contact-card-title-3').textContent = translations[lang].contactCardTitle3;
document.getElementById('contact-card-title-4').textContent = translations[lang].contactCardTitle4;

document.getElementById('footer-description').textContent = translations[lang].footerDescription;
document.getElementById('footer-link-home').textContent = translations[lang].footerLinkHome;
document.getElementById('footer-link-services').textContent = translations[lang].footerLinkServices;
document.getElementById('footer-link-software').textContent = translations[lang].footerLinkSoftware;
document.getElementById('footer-link-about').textContent = translations[lang].footerLinkAbout;
document.getElementById('footer-link-contact').textContent = translations[lang].footerLinkContact;

document.getElementById('footer-slogan').textContent = translations[lang].footerSlogan;

const serviceMarqueeItems = {
    es: [
        ['fa-computer', "Reparación de PC's y Notebooks"],
        ['fa-print', "Impresoras"],
        ['fa-graduation-cap', "Capacitaciones"],
        ['fa-lightbulb', "Asesoramiento Tecnológico"],
        ['fa-network-wired', "Redes y Conectividad"],
        ['fa-gears', "Automatización de Procesos"],
        ['fa-code', "Software a Medida"],
        ['fa-database', "Recuperación de Datos"],
        ['fa-headset', "Soporte IT"]
    ],

    en: [
        ['fa-computer', "PC & Notebook Repair"],
        ['fa-print', "Printers"],
        ['fa-graduation-cap', "Training"],
        ['fa-lightbulb', "Technology Consulting"],
        ['fa-network-wired', "Networks & Connectivity"],
        ['fa-gears', "Process Automation"],
        ['fa-code', "Custom Software"],
        ['fa-database', "Data Recovery"],
        ['fa-headset', "IT Support"]
    ],

    pt: [
        ['fa-computer', "Reparo de PCs e Notebooks"],
        ['fa-print', "Impressoras"],
        ['fa-graduation-cap', "Capacitações"],
        ['fa-lightbulb', "Consultoria Tecnológica"],
        ['fa-network-wired', "Redes e Conectividade"],
        ['fa-gears', "Automação de Processos"],
        ['fa-code', "Software Sob Medida"],
        ['fa-database', "Recuperação de Dados"],
        ['fa-headset', "Suporte de TI"]
    ]
};

const servicesTrack = document.getElementById('services-track');

if (servicesTrack) {
    const repeatedItems = [
        ...serviceMarqueeItems[lang],
        ...serviceMarqueeItems[lang],
        ...serviceMarqueeItems[lang]
    ];

    servicesTrack.innerHTML = repeatedItems.map(item => `
        <span><i class="fa-solid ${item[0]}"></i> ${item[1]}</span>
        <span><i class="fa-solid fa-circle"></i></span>
    `).join('');
}

document.documentElement.lang = lang;

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