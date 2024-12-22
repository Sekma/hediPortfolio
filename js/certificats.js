// Récupère tous les éléments de certificat
const certificatItems = document.querySelectorAll('.certificat-item');

// Récupère la modale et son image
const certificatModal = document.querySelector('.certificat-modal');
const modalImage = document.getElementById('certificat-modal-img');
const closeModalButton = document.querySelector('.close-modal');

// Ajoute un événement de clic à chaque certificat
certificatItems.forEach(item => {
  item.addEventListener('click', (event) => {
    // Récupère l'image associée au certificat
    const imageSrc = event.target.getAttribute('data-image');
    
    // Modifie la source de l'image dans la modale et affiche la modale
    modalImage.src = imageSrc;
    certificatModal.style.display = 'flex';
  });
});

// Ferme la modale lorsque le bouton de fermeture est cliqué
closeModalButton.addEventListener('click', () => {
  certificatModal.style.display = 'none';
});

// Ferme la modale si l'utilisateur clique en dehors de l'image
certificatModal.addEventListener('click', (event) => {
  if (event.target === certificatModal) {
    certificatModal.style.display = 'none';
  }
});
