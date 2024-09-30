/**
 * This is a minimal config.
 *
 * If you need the full config, get it from here:
 * https://unpkg.com/browse/tailwindcss@latest/stubs/defaultConfig.stub.js
 */

module.exports = {
    darkMode: 'class', // 'media' veya 'class' olarak ayarlanabilir
    content: [
        // Templates within theme app (e.g. base.html)
        '../templates/**/*.html',
        // Templates in other apps
        '../../templates/**/*.html',
        // Ignore files in node_modules
        '!../../**/node_modules',
        // Include JavaScript files that might contain Tailwind CSS classes
        '../../**/*.js',
        // Include Python files that might contain Tailwind CSS classes
        '../../**/*.py'
    ],
    theme: {
        extend: {
            fontFamily: {
              sans: ['Inter', 'sans-serif'], // Varsayılan sans-serif fontunu Inter ile değiştir
              DMSans: ['DM Sans', 'sans-serif'],
              },
            colors: {
              primary: {
                DEFAULT: '#F5AB20',       // Default primary
                dark: '#E39500',          // Dark mode primary
                hover: '#D58A00',         // Hover state in light mode
                darkHover: '#C37400',     // Dark mode hover
              },
              secondary: {
                DEFAULT: '#FFFFFF',         // Light mode background
                dark: '#B0B0B0',            // Daha koyu bir karanlık mod arka plan rengi
                hover: '#F0F0F0',           // Hover state in light mode
                darkHover: '#A0A0A0',       // Karanlık mod hover rengi
              },
              text: {
                white: '#FFFFFF',            // Beyaz metin
                black: '#131313',            // Siyah metin
                hoverWhite: '#EAEAEA',       // Beyaz metin için hover durumu
                hoverBlack: '#CCCCCC',        // Siyah metin için hover durumu
                dark: {
                  white: '#EAEAEA',           // Koyu modda beyaz metin
                  black: '#FFFFFF',           // Koyu modda siyah metin
                  hoverWhite: '#FFFFFF',      // Koyu modda beyaz metin için hover durumu
                  hoverBlack: '#CCCCCC',      // Koyu modda siyah metin için hover durumu
                },
              },
              background: {
                DEFAULT: '#FBF9F6',          // Light mode background
                dark: '#1A1A1A',             // Dark mode background (daha koyu)
                hover: '#F5F3F0',            // Hover state in light mode
                darkHover: '#333333',        // Dark mode hover (daha koyu ton)
              },
            },
            maxWidth: {
                'custom': '1224px', // Özel genişlik
            },
            animation: {
                marquee: 'marquee 15s linear infinite',
                marquee2: 'marquee2 15s linear infinite',
                'spin-slow': 'spin 3s linear infinite', // 3 saniyede bir döner
                'spin-fast': 'spin 0.5s linear infinite', // 0.5 saniyede bir döner
              },
            keyframes: {
              marquee: {
                '0%': { transform: 'translateX(0%)' },
                '100%': { transform: 'translateX(-100%)' },
              },
              marquee2: {
                '0%': { transform: 'translateX(100%)' },
                '100%': { transform: 'translateX(0%)' },
              },
              
            },
            boxShadow: {
              custom: '8.11px 14.61px 32.46px 4.87px rgba(19, 21, 23, 0.1)',
            },
        },
    },
    plugins: [
        /**
         * '@tailwindcss/forms' is the forms plugin that provides a minimal styling
         * for forms. If you don't like it or have own styling for forms,
         * comment the line below to disable '@tailwindcss/forms'.
         */
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
    ],
}
