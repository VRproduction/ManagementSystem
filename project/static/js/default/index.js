import themeToggle from '../components/themeToggle';  
import loading from '../components/loading';
import { initFileUploadModals } from '../components/fileUploadModal';
import { initModal } from '../components/modal';
import { initializeDropdowns } from '../components/dropdown';

document.addEventListener('DOMContentLoaded', () => {
    themeToggle();
    loading();
    initFileUploadModals();
    initModal();
    initializeDropdowns();
});