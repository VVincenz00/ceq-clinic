const translations = {
    en: {
        clinic_name: "CEQ - Clinique d'endocrinologie de Québec",
        tagline: "",
        call_us: "📞 Call Us",
        visit_us: "📍 Visit Us",
        address_main: "1155 Avenue de Germain-des-Prés<br>TOUR CHAMPLAIN Bureau 2050<br>Québec G1V 4K5",
        directions_btn: "🗺️ How to Get Here in Details",
        footer_text: "&copy; 2026 CEQ Clinic. All rights reserved.",
        directions_header: "How to Get Here",
        back_home: "← Back to Home",
        our_address_header: "📍 Our Address",
        address_full: "Clinique d'endocrinologie de Québec<br>1155 Avenue de Germain-des-Prés<br>TOUR CHAMPLAIN Bureau 2050<br>Québec G1V 4K5",
        by_car_header: "🚗 By Car",
        location_details_header: "🏢 Location Details",
        location_details_text: "TOUR CHAMPLAIN - ENTRANCE 23<br>LEVEL 2 of Laurier-Québec<br>ENTRANCE 23 faces Hochelaga Boulevard<br>ABOVE WALMART<br>TAKE THE KOODO MOBILE CORRIDOR, you will find the elevators on your right.",
        car_text_1: "From Downtown: Take Main Street north for 2 miles, turn right on Healthcare Boulevard. We're on the left side.",
        car_text_2: "From Highway 101: Take exit 45, turn left onto Medical Drive, then right on Healthcare Boulevard.",
        parking_label: "Parking:",
        parking_text: "Free parking available in our lot behind the building.",
        transit_header: "🚌 By Public Transit",
        transit_text_1: "Bus routes 12, 34, and 56 stop directly in front of our clinic.",
        transit_text_2: "The Medical District Metro station is a 5-minute walk away.",
        hours_header: "🕐 Office Hours",
        hours_text: "Monday to Friday: 8:00 AM - 5:00 PM<br>Saturday: Closed <br>Sunday: Closed",
        open_maps: "📍 Open in Google Maps"
    },
    fr: {
        clinic_name: "CEQ - Clinique d'endocrinologie de Québec",
        tagline: "",
        call_us: "📞 Appelez-nous",
        visit_us: "📍 Visitez-nous",
        address_main: "1155 Avenue de Germain-des-Prés<br>TOUR CHAMPLAIN Bureau 2050<br>Québec G1V 4K5",
        directions_btn: "🗺️ Comment s'y rendre en détails",
        footer_text: "&copy; 2026 Clinique Santé CEQ. Tous droits réservés.",
        directions_header: "Comment s'y rendre",
        back_home: "← Retour à l'accueil",
        our_address_header: "📍 Notre adresse",
        address_full: "Clinique d'endocrinologie de Québec<br>1155 Avenue de Germain-des-Prés<br>TOUR CHAMPLAIN Bureau 2050<br>Québec G1V 4K5",
        by_car_header: "🚗 En voiture",
        location_details_header: "🏢 Détails de l'emplacement",
        location_details_text: "TOUR CHAMPLAIN - ENTRÉE 23<br>NIVEAU 2 de Laurier-Québec<br>ENTRÉE 23 fait face au boulevard Hochelaga<br>AU-DESSUS DU WALMART<br>PRENEZ LE COULOIR DU KOODO MOBILE, vous trouvez les ascenceurs à votre droite.",
        car_text_1: "Du centre-ville : Prenez la rue Principale vers le nord sur 3 km, tournez à droite sur le Boulevard de la Santé. Nous sommes à gauche.",
        car_text_2: "De l'autoroute 101 : Prenez la sortie 45, tournez à gauche sur la Promenade Médicale, puis à droite sur le Boulevard de la Santé.",
        parking_label: "Stationnement :",
        parking_text: "Stationnement gratuit disponible dans notre lot derrière le bâtiment.",
        transit_header: "🚌 En transport en commun",
        transit_text_1: "Les lignes d'autobus 12, 34 et 56 s'arrêtent directement devant notre clinique.",
        transit_text_2: "La station de métro Quartier Médical est à 5 minutes de marche.",
        hours_header: "🕐 Heures d'ouverture",
        hours_text: "Lundi au Vendredi : 8h00 - 17h00<br>Samedi : Fermé <br>Dimanche : Fermé",
        open_maps: "📍 Ouvrir dans Google Maps"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const langSwitcher = document.getElementById('lang-switcher');
    
    // Detect language: LocalStorage -> Browser Language -> Default 'en'
    let currentLang = localStorage.getItem('preferredLang') || (navigator.language && navigator.language.startsWith('fr') ? 'fr' : 'en');
    
    // Apply language on load
    setLanguage(currentLang);

    // Create buttons if container exists
    if (langSwitcher) {
        langSwitcher.innerHTML = `
            <button onclick="setLanguage('en')" class="lang-btn ${currentLang === 'en' ? 'active' : ''}">EN</button>
            <span class="lang-separator">|</span>
            <button onclick="setLanguage('fr')" class="lang-btn ${currentLang === 'fr' ? 'active' : ''}">FR</button>
        `;
    }
});

function setLanguage(lang) {
    // Update LocalStorage
    try {
        localStorage.setItem('preferredLang', lang);
    } catch (e) {
        // Ignore storage errors (e.g., private mode)
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Update text content
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase() === lang) {
            btn.classList.add('active');
        }
    });
}

// Expose function globally
window.setLanguage = setLanguage;
