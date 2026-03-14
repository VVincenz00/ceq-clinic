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
        car_text_1: "To access the rear parking lot, please go through Avenue Germain-des-Prés. You will be facing entrance 23/24.",
        car_text_2: "Parking in front of Walmart is also accessible. Once inside the shopping center, take the escalator in front of the Walmart entrance to go up to level 2. <br> Entrance 23 will be on your right at the top of the escalator.",
        parking_label: "Parking:",
        parking_text: "Free parking available anywhere at Laurier-Quebec.",
        hours_header: "🕐 Office Hours",
        hours_text: "Monday to Friday: 8:00 AM - 5:00 PM<br>Saturday: Closed <br>Sunday: Closed",
        open_maps: "📍 Open in Google Maps",
        know_more: "🔗 To know more about the clinic"
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
        car_text_1: "Pour accéder au stationnement arrière, veuillez passer par l'Avenue Germain-des-Prés. Vous serez face à l'entrée 23/24.",
        car_text_2: "Le stationnement face au Walmart est également accessible. Une fois à l'intérieur du centre d'achat, prenez l'escalier roulant face à l'entrée du Walmart pour monter au niveau 2. <br> L'entrée 23 sera à votre droite en haut de l'escalier roulant.",
        parking_label: "Stationnement :",
        parking_text: "Vous pouvez vous stationner à n'importe quel endroit au centre d'achat",
        hours_header: "🕐 Heures d'ouverture",
        hours_text: "Lundi au Vendredi : 8h00 - 17h00<br>Samedi : Fermé <br>Dimanche : Fermé",
        open_maps: "📍 Ouvrir dans Google Maps",
        know_more: "🔗 Pour en savoir plus sur la clinique"
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
