// fileUploadModal.js

export function initFileUploadModals() {
    const fileUploadComponents = document.querySelectorAll('.file-upload-component');
  
    fileUploadComponents.forEach(component => {
      const fileInput = component.querySelector('.file-upload');
      const viewImageButton = component.querySelector('.view-image-button');
      const orText = component.querySelector('.or-text');
      const modalId = component.getAttribute('data-modal-id');
      const modal = document.getElementById(modalId);
      const modalImage = modal.querySelector('.modal-image');
      const closeModalButton = modal.querySelector('.close-modal');
  
      // Fayl seçildikdən sonra resim yüklənir
      fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = function(e) {
            // Ön izleme resmi yüklenir
            viewImageButton.classList.remove('hidden'); // "Nəzərdən keçirin" butonunu göster
            orText.classList.remove('hidden'); // "Nəzərdən keçirin" butonunu göster
            viewImageButton.setAttribute('data-image-src', e.target.result); // Resim kaydını tut
          };
          reader.readAsDataURL(file);
        } else {
          viewImageButton.classList.add('hidden'); // Eğer dosya yüklenmezse butonu gizle
        }
      });
  
      // "Nəzərdən keçirin" butonuna tıkladığında modal açılır
      viewImageButton.addEventListener('click', () => {
        const imageSrc = viewImageButton.getAttribute('data-image-src');
        if (imageSrc) {
          modalImage.src = imageSrc; // Modal resmine yüklenen resmi koy
          modal.classList.remove('hidden'); // Modalı göster
          modal.classList.add('flex'); // Modalın flex olmasını sağla
        } else {
          alert('Önce bir resim yükleyin!');
        }
      });
  
      // Modalı kapat
      closeModalButton.addEventListener('click', () => {
        modal.classList.add('hidden'); // Modalı gizle
        modal.classList.remove('flex'); // Modalın flex sınıfını kaldır
      });
    });
  }
  