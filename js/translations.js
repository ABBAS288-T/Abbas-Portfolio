/**
 * Translations for the portfolio website
 */
const translations = {
    en: {
        home: "Home",
        about: "About",
        projects: "Projects",
        gallery: "Gallery",
        contact: "Contact",
        subtitle: "Hello, I'm",
        role: "Software & Web Developer",
        location: "Helsinki, Finland",
        viewWork: "View My Work",
        contactMe: "Contact Me",
        aboutTitle: "About Me",
        aboutText: "I am a passionate developer with expertise in building modern, responsive, and user-friendly websites and applications. With a strong foundation in both frontend and backend technologies, I strive to create digital experiences that are both functional and visually appealing.",
        letsTalk: "Let's Talk",
        myProjects: "My Projects",
        viewDetails: "View Details",
        getInTouch: "Get In Touch",
        name: "Name",
        email: "Email",
        message: "Message",
        sendMessage: "Send Message",
        footerRights: "© 2024 Abbas Fahad. All rights reserved."
    },
    fi: {
        home: "Etusivu",
        about: "Tietoa",
        projects: "Projektit",
        gallery: "Galleria",
        contact: "Ota yhteyttä",
        subtitle: "Hei, olen",
        role: "Ohjelmisto- ja Web-kehittäjä",
        location: "Helsinki, Suomi",
        viewWork: "Katso työni",
        contactMe: "Ota yhteyttä",
        aboutTitle: "Tietoa minusta",
        aboutText: "Olen intohimoinen kehittäjä, jolla on asiantuntemusta modernien, responsiivisten ja käyttäjäystävällisten verkkosivustojen ja sovellusten rakentamisesta. Vahvalla pohjalla sekä frontend- että backend-teknologioissa pyrin luomaan digitaalisia kokemuksia, jotka ovat sekä toimivia että visuaalisesti houkuttelevia.",
        letsTalk: "Jutellaan",
        myProjects: "Projektini",
        viewDetails: "Katso tiedot",
        getInTouch: "Ota yhteyttä",
        name: "Nimi",
        email: "Sähköposti",
        message: "Viesti",
        sendMessage: "Lähetä viesti",
        footerRights: "© 2024 Abbas Fahad. Kaikki oikeudet pidätetään."
    },
    sv: {
        home: "Hem",
        about: "Om",
        projects: "Projekt",
        gallery: "Galleri",
        contact: "Kontakt",
        subtitle: "Hej, jag är",
        role: "Mjukvaru- och webbutvecklare",
        location: "Helsingfors, Finland",
        viewWork: "Se mitt arbete",
        contactMe: "Kontakta mig",
        aboutTitle: "Om mig",
        aboutText: "Jag är en passionerad utvecklare med expertis inom att bygga moderna, responsiva och användarvänliga webbplatser och applikationer. Med en stark grund i både frontend- och backend-teknologier strävar jag efter att skapa digitala upplevelser som är både funktionella och visuellt tilltalande.",
        letsTalk: "Låt oss prata",
        myProjects: "Mina projekt",
        viewDetails: "Visa detaljer",
        getInTouch: "Hör av dig",
        name: "Namn",
        email: "E-post",
        message: "Meddelande",
        sendMessage: "Skicka meddelande",
        footerRights: "© 2024 Abbas Fahad. Alla rättigheter förbehållna."
    },
    ar: {
        home: "الرئيسية",
        about: "حول",
        projects: "المشاريع",
        gallery: "المعراض",
        contact: "اتصل بنا",
        subtitle: "مرحباً، أنا",
        role: "مطور برمجيات وويب",
        location: "هلسنكي، فنلندا",
        viewWork: "شاهد أعمالي",
        contactMe: "اتصل بي",
        aboutTitle: "عني",
        aboutText: "أنا مطور شغوف ذو خبرة في بناء مواقع وتطبيقات حديثة وسريعة الاستجابة وسهلة الاستخدام. بفضل أساس قوي في تقنيات الواجهة الأمامية والخلفية، أسعى لإنشاء تجارب رقمية وظيفية وجذابة بصرياً.",
        letsTalk: "لنتحدث",
        myProjects: "مشاريعي",
        viewDetails: "عرض التفاصيل",
        getInTouch: "تواصل معي",
        name: "الاسم",
        email: "البريد الإلكتروني",
        message: "الرسالة",
        sendMessage: "إرسال الرسالة",
        footerRights: "© 2024 عباس فهد. جميع الحقوق محفوظة."
    },
    es: {
        home: "Inicio",
        about: "Sobre mí",
        projects: "Proyectos",
        gallery: "Galería",
        contact: "Contacto",
        subtitle: "Hola, soy",
        role: "Desarrollador de Software y Web",
        location: "Helsinki, Finlandia",
        viewWork: "Ver mi trabajo",
        contactMe: "Contáctame",
        aboutTitle: "Sobre mí",
        aboutText: "Soy un desarrollador apasionado con experiencia en la creación de sitios web y aplicaciones modernos, receptivos y fáciles de usar. Con una base sólida en tecnologías frontend y backend, me esfuerzo por crear experiencias digitales que sean funcionales y visualmente atractivas.",
        letsTalk: "Hablemos",
        myProjects: "Mis proyectos",
        viewDetails: "Ver detalles",
        getInTouch: "Ponerse en contacto",
        name: "Nombre",
        email: "Correo electrónico",
        message: "Mensaje",
        sendMessage: "Enviar mensaje",
        footerRights: "© 2024 Abbas Fahad. Todos los derechos reservados."
    }
};

function changeLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Handle RTL for Arabic
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.lang = 'ar';
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.lang = lang;
    }

    // Save preference
    localStorage.setItem('preferredLanguage', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    const langSelect = document.getElementById('language-select');

    if (langSelect) {
        langSelect.value = savedLang;
        langSelect.addEventListener('change', (e) => {
            changeLanguage(e.target.value);
        });
    }

    changeLanguage(savedLang);
});
