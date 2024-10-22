// dropdown.js

export function initializeDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown'); // Tüm dropdown bileşenlerini seç
  
    dropdowns.forEach(dropdown => {
      const button = dropdown.querySelector('.dropdown-button');
      const menu = dropdown.querySelector('.dropdown-menu');
      const items = dropdown.querySelectorAll('.dropdown-item');
  
      // Butona tıklanıldığında menüyü aç/kapat
      button.addEventListener('click', () => {
        menu.classList.toggle('hidden');
      });
  
      // Her bir menü öğesine tıklama olayı
      items.forEach(item => {
        item.addEventListener('click', () => {
          // Seçilen öğeyi buton üzerinde göster
          button.querySelector('span').textContent = item.dataset.value;
  
          // Önceki seçimi kaldır (aktif durumu temizle)
          items.forEach(i => i.classList.remove('bg-gray-200', 'font-bold'));
  
          // Seçilen öğeyi vurgula
          item.classList.add('bg-gray-200', 'font-bold');
  
          // Menü gizle
          menu.classList.add('hidden');
        });
      });
  
      // Buton dışına tıklanırsa menüyü kapat
      window.addEventListener('click', (event) => {
        if (!dropdown.contains(event.target)) {
          menu.classList.add('hidden');
        }
      });
    });
  }
  

{/* <div class="dropdown relative inline-block text-left my-4">
  <div>
    <button class="dropdown-button inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      <span>Select an option</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M5.292 7.707a1 1 0 011.414 0L10 11.414l3.293-3.707a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
  <div class="dropdown-menu hidden origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
    <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="dropdownButton">
      <button type="button" class="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" data-value="Option 1">Option 1</button>
      <button type="button" class="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" data-value="Option 2">Option 2</button>
      <button type="button" class="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" data-value="Option 3">Option 3</button>
    </div>
  </div>
</div> */}