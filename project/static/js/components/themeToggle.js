import { setCookie, getCookie } from '../modules/cookieUtils.js';

const themeToggle = () => {
    const themeToggleButtons = document.querySelectorAll('.theme-toggle'); // Tüm butonları seç
    const currentTheme = getCookie('theme') || 'light'; // Varsayılan olarak 'light' teması
    const html = document.documentElement;

    // Sayfa yüklenirken temayı başlat
    const isDark = currentTheme === 'dark';
    html.classList.toggle('dark', isDark);

    themeToggleButtons.forEach((btn) => {
        const sunIcon = btn.querySelector('.sun-icon');
        const moonIcon = btn.querySelector('.moon-icon');

        // İkonları başlat
        sunIcon.classList.toggle('hidden', isDark);
        moonIcon.classList.toggle('hidden', !isDark);

        // Butona tıklama olayı ekle
        btn.addEventListener('click', () => {
            const isDark = html.classList.toggle('dark');
            setCookie('theme', isDark ? 'dark' : 'light', 7); // Temaya göre çerez ayarla
            sunIcon.classList.toggle('hidden', isDark);
            moonIcon.classList.toggle('hidden', !isDark);
        });
    });
};

export default themeToggle;
