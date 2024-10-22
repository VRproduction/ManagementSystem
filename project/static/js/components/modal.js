// modal.js
export function initModal() {
    const openButtons = document.querySelectorAll('.open-modal');
    const closeButtons = document.querySelectorAll('.close-modal');
  
    openButtons.forEach(button => {
      button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal-id');
        const modal = document.getElementById(modalId);
        if (modal) {
          modal.classList.remove('hidden');
          modal.classList.add('flex');
        }
      });
    });
  
    closeButtons.forEach(button => {
      button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        modal.classList.remove('flex');
        modal.classList.add('hidden');
      });
    });
  
    // Modal dışına tıklanırsa kapat
    document.querySelectorAll('.modal').forEach((modal) => {
      modal.addEventListener('click', (event) => {
        if (event.target === modal) {
          modal.classList.remove('flex');
          modal.classList.add('hidden');
        }
      });
    });
  }
  
  
//   <!-- İlk Modal Tetikleyici -->
//   <button class="open-modal bg-blue-500 text-white px-4 py-2 rounded" data-modal-id="modal-1">
//     İlk Modalı Aç
//   </button>
  
//   <!-- İlk Modal Bileşeni -->
//   <div id="modal-1" class="modal hidden fixed inset-0 bg-gray-600 bg-opacity-50 justify-center items-center z-50">
//     <div class="bg-white p-6 rounded-lg w-full max-w-lg">
//       <h2 class="text-2xl font-bold mb-4">İlk Modal Başlığı</h2>
//       <p class="mb-4">Bu ilk modal içeriği.</p>
//       <button class="close-modal bg-red-500 text-white px-4 py-2 rounded">
//         Kapat
//       </button>
//     </div>
//   </div>