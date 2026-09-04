(function () {
    'use strict';

    var translations = {
        en: {
            'meta.title': 'Karataso | Portfolio',
            'nav.about': 'About',
            'nav.projects': 'Projects',
            'hero.title': 'Code with Heart, Ship with Soul',
            'hero.subtitle': 'Caffeine-fueled coding, just for the love of the art',
            'hero.view': 'View My Work',
            'hero.touch': 'Get In Touch',
            'about.title': 'About Me',
            'about.text': 'Undergraduate student at Universidad Tecnológica de Nayarit, driven by a genuine passion for software development. I code for the love of the craft, and my goal is to turn that passion into a full-time career. As a capable full-stack developer, I enjoy building complete solutions from front to back.',
            'skills.title': 'Skills',
            'projects.title': 'Featured Projects',
            'project.kclient.desc': 'A Minecraft 1.8.9 Forge based, Privacy respecting Hacked client.',
            'project.kclient.link': 'Learn More',
            'project.ds.desc': 'Interactive, Educative material made to simplify understanding of Data Structures, Coded as a college project using HTML, CSS and JavaScript, Simple enough a kid could understand',
            'project.ds.link': 'View Now',
            'contact.title': 'Ping Me',
            'contact.reply': '64 bytes from karataso: online — usually replies fast :) [Or... check the contact info in the footer below.]',
            'footer.tagline': '© 2026 Karataso. Built with love, sweat and much much caffeine.',

            'cv.title': 'Curriculum Vitae | Karataso',
            'cv.heading': '// Curriculum Vitae',
            'cv.subtitle': 'Full-Stack Developer & Unix/Linux Systems Enthusiast',
            'cv.badge1': 'TOEFL Score: 590',
            'cv.badge2': 'C1 Advanced English',
            'cv.badge3': 'Cisco Networking Academy',
            'cv.projects.title': 'Projects',
            'cv.kclient.h': 'Kclient | High-Performance Optimization & Utilities Suite',
            'cv.kclient.meta': '12/2025 – Present | La Peñita de Jaltemba, Nay.',
            'cv.kclient.desc': 'Game assistance modification for competitive play.',
            'cv.kclient.b1h': 'Behavioral Engineering:',
            'cv.kclient.b1': 'Design of technical assistance modules using human-mimicry algorithms to interact with security systems (Anti-Cheats) without triggering integrity alerts.',
            'cv.kclient.b2h': 'Privacy & Transparency:',
            'cv.kclient.b2': '"Privacy-First" architecture with no telemetry or data collection, audited by the community through public repositories.',
            'cv.realty.h': 'Commercial Web Platform – Real Estate Sector',
            'cv.realty.meta': '11/2025 – 12/2025 | La Peñita de Jaltemba, Nay.',
            'cv.realty.desc': 'End-to-end development of a professional website to advertise a family rental business.',
            'cv.realty.b1': 'Attracting and informing tenants through social-media-oriented integration and advertising.',
            'cv.linux.h': 'Systems Administration & Unix/Linux Environments',
            'cv.linux.meta': '2022 – Present',
            'cv.linux.desc': 'Configuration and optimization of Linux-based environments, managing advanced workflows through the terminal (CLI).',
            'cv.linux.b1': 'Continuous maintenance and customization of production systems.',
            'cv.linux.b2': 'Extreme resource optimization, keeping RAM usage below 1 GB.',
            'cv.interests.title': 'Interests',
            'cv.interests.text': 'Growing as a software developer and building a professional career in the field of engineering and systems.',
            'cv.time.title': 'Time Distribution',
            'cv.time.a': 'Academic Formation',
            'cv.time.b': 'Personal Time | Hobbies',
            'cv.time.c': 'Software Development',
            'cv.time.d': 'Languages | English',
            'cv.time.e': 'Systems Administration / Linux',
            'cv.time.f': 'Rest / Sleep',
            'cv.certs.title': 'Certifications',
            'cv.certs.toefl.p': 'Score 590 — C1 Advanced Level'
        },
        es: {
            'meta.title': 'Karataso | Portafolio',
            'nav.about': 'Sobre mí',
            'nav.projects': 'Proyectos',
            'hero.title': 'Código hecho con pasión, distribuido con el alma',
            'hero.subtitle': 'Programación impulsada por cafeína, por el amor al arte',
            'hero.view': 'Ver mis proyectos',
            'hero.touch': 'Hablemos',
            'about.title': 'Sobre mí',
            'about.text': 'Estudiante de licenciatura en la Universidad Tecnológica de Nayarit, con pasión por el desarrollo de software. Programo por amor al arte y mi meta es convertir esa pasión en mi carrera de tiempo completo. Como desarrollador full-stack capaz, disfruto construir soluciones completas de principio a fin.',
            'skills.title': 'Habilidades',
            'projects.title': 'Proyectos Destacados',
            'project.kclient.desc': 'Hacked Client para Minecraft 1.8.9 basado en Forge que respeta la privacidad del usuario.',
            'project.kclient.link': 'Ver más',
            'project.ds.desc': 'Material interactivo y educativo hecho para simplificar el entendimiento de las Estructuras de Datos. Programado como proyecto escolar con HTML, CSS y JavaScript, tan simple que hasta un niño lo entendería',
            'project.ds.link': 'Ver ahora',
            'contact.title': 'Píngueame',
            'contact.reply': '64 bytes de karataso: en línea — suelo responder rápido :) [O... revisa los datos de contacto en el pie de página.]',
            'footer.tagline': '© 2026 Karataso. Hecho con amor, sudor y muchísima cafeína.',

            'cv.title': 'Curriculum Vitae | Karataso',
            'cv.heading': '// Curriculum Vitae',
            'cv.subtitle': 'Desarrollador Full-Stack & Entusiasta de Sistemas Unix/Linux',
            'cv.badge1': 'Puntaje TOEFL: 590',
            'cv.badge2': 'Inglés Avanzado C1',
            'cv.badge3': 'Cisco Networking Academy',
            'cv.projects.title': 'Proyectos',
            'cv.kclient.h': 'Kclient | Suite de Optimización y Utilidades de Alto Rendimiento',
            'cv.kclient.meta': '12/2025 – Presente | La Peñita de Jaltemba, Nay.',
            'cv.kclient.desc': 'Modificación de asistencia para juego competitivo.',
            'cv.kclient.b1h': 'Ingeniería de Comportamiento:',
            'cv.kclient.b1': 'Diseño de módulos de asistencia técnica utilizando algoritmos de mimetismo humano para interactuar con sistemas de seguridad (Anti-Cheats) sin activar alertas de integridad.',
            'cv.kclient.b2h': 'Privacidad y Transparencia:',
            'cv.kclient.b2': 'Arquitectura "Privacy-First" sin telemetría ni recolección de datos, auditada por la comunidad a través de repositorios públicos.',
            'cv.realty.h': 'Plataforma Web Comercial – Sector Inmobiliario',
            'cv.realty.meta': '11/2025 – 12/2025 | La Peñita de Jaltemba, Nay.',
            'cv.realty.desc': 'Desarrollo de sitio web profesional de extremo a extremo para publicitar un negocio familiar de rentas.',
            'cv.realty.b1': 'Atracción e información para inquilinos mediante integración y publicidad orientada desde redes sociales.',
            'cv.linux.h': 'Administración de Sistemas y Entornos Unix/Linux',
            'cv.linux.meta': '2022 – Presente',
            'cv.linux.desc': 'Configuración y optimización de entornos basados en Linux, gestionando flujos de trabajo avanzados mediante la terminal (CLI).',
            'cv.linux.b1': 'Mantenimiento continuo y personalización de sistemas en producción.',
            'cv.linux.b2': 'Optimización extrema de recursos, manteniendo la utilización de memoria RAM en niveles inferiores a 1 GB.',
            'cv.interests.title': 'Intereses',
            'cv.interests.text': 'Crecer como desarrollador de software y hacer carrera profesional en el área de ingeniería y sistemas.',
            'cv.time.title': 'Distribución de Tiempo',
            'cv.time.a': 'Formación Académica',
            'cv.time.b': 'Tiempo Personal | Hobbies',
            'cv.time.c': 'Desarrollo de Software',
            'cv.time.d': 'Idiomas | Inglés',
            'cv.time.e': 'Administración de Sistemas / Linux',
            'cv.time.f': 'Descanso / Dormir',
            'cv.certs.title': 'Certificaciones',
            'cv.certs.toefl.p': 'Puntaje 590 — Nivel Avanzado C1'
        }
    };

    var lang = 'en';
    var toggle = document.getElementById('lang-toggle');

    function apply(l) {
        document.documentElement.lang = l;

        var titleNode = document.querySelector('title[data-i18n]');
        if (titleNode) {
            document.title = translations[l][titleNode.getAttribute('data-i18n')];
        }

        var nodes = document.querySelectorAll('[data-i18n]');
        for (var i = 0; i < nodes.length; i++) {
            var key = nodes[i].getAttribute('data-i18n');
            if (translations[l][key] !== undefined) {
                nodes[i].textContent = translations[l][key];
            }
        }

        if (toggle) {
            toggle.textContent = './' + (l === 'en' ? 'es' : 'en') + '.sh';
        }
    }

    if (toggle) {
        toggle.addEventListener('click', function () {
            lang = lang === 'en' ? 'es' : 'en';
            apply(lang);
        });
    }

    apply(lang);
})();
