// Sélection des éléments
function scroll(part){
    const scrollContainer = document.querySelector('.horizontal-scroll'+part);
    const btnLeft = document.querySelector('.scroll-buttons'+part+' .scroll-left');
    const btnRight = document.querySelector('.scroll-buttons'+part+' .scroll-right');
    
    // Fonction pour le défilement horizontal avec les boutons
    btnLeft.addEventListener('click', () => {
      scrollContainer.scrollBy({
        left: -300, // Valeur négative pour défiler à gauche
        behavior: 'smooth',
      });
    });
    
    btnRight.addEventListener('click', () => {
      scrollContainer.scrollBy({
        left: 300, // Valeur positive pour défiler à droite
        behavior: 'smooth',
      });
    });
    
    // Gestion du défilement tactile pour mobile/tablette
    scrollContainer.addEventListener('touchstart', (e) => {
      scrollContainer.dataset.startX = e.touches[0].clientX; // Enregistrer la position de départ
      scrollContainer.dataset.scrollLeft = scrollContainer.scrollLeft;
    });
    
    scrollContainer.addEventListener('touchmove', (e) => {
      if (!scrollContainer.dataset.startX) return; // Ignorer si pas de point de départ
      const dx = e.touches[0].clientX - scrollContainer.dataset.startX;
      scrollContainer.scrollLeft = scrollContainer.dataset.scrollLeft - dx; // Ajuster la position
    });
    
    scrollContainer.addEventListener('touchend', () => {
      delete scrollContainer.dataset.startX; // Réinitialisation
      delete scrollContainer.dataset.scrollLeft;
    });
};

scroll('-part-1');
scroll('-part-2');
scroll('-part-3');
scroll('-part-4');