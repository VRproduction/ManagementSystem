import { setCookie, getCookie } from '../modules/cookieUtils.js';

const themeToggle = () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const currentTheme = getCookie('theme');

    // Sayfa yüklendiğinde mevcut temayı kontrol et
    if (currentTheme === 'dark') {
        document.documentElement.classList.add('dark');
        document.getElementById('sun-icon').classList.add('hidden');
        document.getElementById('moon-icon').classList.remove('hidden');
    } else {
        document.documentElement.classList.remove('dark');
        document.getElementById('sun-icon').classList.remove('hidden');
        document.getElementById('moon-icon').classList.add('hidden');
    }

    themeToggleBtn.addEventListener('click', () => {
        const html = document.documentElement;

        if (html.classList.contains('dark')) {
            // Dark temayı kaldır
            html.classList.remove('dark');
            setCookie('theme', 'light', 7); // Çerezde light olarak ayarla
            // İkon değişimi
            document.getElementById('sun-icon').classList.remove('hidden');
            document.getElementById('moon-icon').classList.add('hidden');
        } else {
            // Dark temayı ekle
            html.classList.add('dark');
            setCookie('theme', 'dark', 7); // Çerezde dark olarak ayarla
            // İkon değişimi
            document.getElementById('sun-icon').classList.add('hidden');
            document.getElementById('moon-icon').classList.remove('hidden');
        }
    });
};

export default themeToggle;
