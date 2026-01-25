class StickyNavigation {
	
	constructor() {
		this.currentId = null;
		this.currentTab = null;
		this.tabContainerHeight = 70;
		let self = this;
		$('.et-hero-tab').click(function() { 
			self.onTabClick(event, $(this)); 
		});
		$(window).scroll(() => { this.onScroll(); });
		$(window).resize(() => { this.onResize(); });
	}
	
	onTabClick(event, element) {
		event.preventDefault();
		let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
		$('html, body').animate({ scrollTop: scrollTop }, 1000, 'easeInCubic');
	}
	
	onScroll() {
		this.checkTabContainerPosition();
    this.findCurrentTabSelector();
	}
	
	onResize() {
		if(this.currentId) {
			this.setSliderCss();
		}
	}
	
	checkTabContainerPosition() {
		let offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - this.tabContainerHeight;
		if($(window).scrollTop() > offset) {
			$('.et-hero-tabs-container').addClass('et-hero-tabs-container--top');
		} 
		else {
			$('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top');
		}
	}
	
	findCurrentTabSelector(element) {
		let newCurrentId;
		let newCurrentTab;
		let self = this;
		$('.et-hero-tab').each(function() {
			let id = $(this).attr('href');
			let offsetTop = $(id).offset().top - self.tabContainerHeight;
			let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
			if($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
				newCurrentId = id;
				newCurrentTab = $(this);
			}
		});
		if(this.currentId != newCurrentId || this.currentId === null) {
			this.currentId = newCurrentId;
			this.currentTab = newCurrentTab;
			this.setSliderCss();
		}
	}
	
	setSliderCss() {
		let width = 0;
		let left = 0;
		if(this.currentTab) {
			width = this.currentTab.css('width');
			left = this.currentTab.offset().left;
		}
		$('.et-hero-tab-slider').css('width', width);
		$('.et-hero-tab-slider').css('left', left);
	}
	
}

new StickyNavigation();


///////////////////////////////////////////// navBar /////////////////////////////////////////////////
function updateNavbarContent() {
    if ($(window).width() < 767) {
        
        $('.et-hero-tab span').hide(); // Cacher le texte
    } else {
        
        $('.et-hero-tab span').show(); // Montrer le texte
    }
}


$(document).ready(function () {
    updateNavbarContent();

    $(window).resize(function () {
        updateNavbarContent();
    });
});

///////////////////////////////////////////// certifications /////////////////////////////////////////
// Récupère tous les éléments de certificat
const certificatItems = document.querySelectorAll('.certificat-item');

// Récupère la modale et son image
const certificatModal = document.querySelector('.certificat-modal');
const modalImage = document.getElementById('certificat-modal-img');
const closeModalButton = document.querySelector('.close-modal');

// Ajoute un événement de clic à chaque certificat
certificatItems.forEach(item => {
  item.addEventListener('click', (event) => {
    // Récupère l'élément parent avec l'attribut "data-image"
    const certificatItem = event.target.closest('.certificat-item');
    if (certificatItem) {
      const imageSrc = certificatItem.getAttribute('data-image');
      
      // Modifie la source de l'image dans la modale et affiche la modale
      modalImage.src = imageSrc;
      certificatModal.style.display = 'flex';
    }
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

////////////////////////////////////////////////////////// portfolio /////////////////////////////////////////////////////////

////////////////////// Boutons de navigation /////////////////////

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
    }, { passive: true });
    
    scrollContainer.addEventListener('touchmove', (e) => {
      if (!scrollContainer.dataset.startX) return; // Ignorer si pas de point de départ
      const dx = e.touches[0].clientX - scrollContainer.dataset.startX;
      scrollContainer.scrollLeft = scrollContainer.dataset.scrollLeft - dx; // Ajuster la position
    }, { passive: true });
    
    scrollContainer.addEventListener('touchend', () => {
      delete scrollContainer.dataset.startX; // Réinitialisation
      delete scrollContainer.dataset.scrollLeft;
    });
};

scroll('-part-1');
scroll('-part-2');
scroll('-part-3');
scroll('-part-4');

////////////////////////// vidéo //////////////////////

// Sélection des éléments
const thumbnails = document.querySelectorAll('.video-thumbnail');
const modal = document.getElementById('videoModal');
const modalVideo = document.getElementById('modalVideo');
const closeModal = document.querySelector('.close-video');

// Fonction pour ouvrir la vidéo en plein écran
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        const videoSrc = thumbnail.dataset.video; // Récupérer la source de la vidéo
        modalVideo.querySelector('source').src = videoSrc; // Définir la source de la vidéo
        modalVideo.load(); // Recharger la vidéo avec la nouvelle source
        modal.style.display = 'flex'; // Afficher le modal
    });
});

// Fonction pour fermer la modale
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    modalVideo.pause(); // Arrêter la vidéo
    modalVideo.querySelector('source').src = ''; // Réinitialiser la source
});

/////////////////////////////////////////////////////// les animations /////////////////////////////////////////////

$(document).ready(function () {
    $(window).on('scroll', { passive: true } ,function () {
        // titles
        $('.et-slide h1').each(function () {
            let top = $(this).offset().top + 150;
            let scrollBottom = $(window).scrollTop() + $(window).height();

            if (top <= scrollBottom) {
                $(this).addClass('visible');
            }
        });
// titles
        $('.et-slide h1').each(function () {
            let top = $(this).offset().top + 150;
            let scrollBottom = $(window).scrollTop() + $(window).height();

            if (top <= scrollBottom) {
                $(this).addClass('visible');
            }
        });
// contents
        $('.et-slide#profil h3').each(function () {
            let top = $(this).offset().top + 50;
            let scrollBottom = $(window).scrollTop() + $(window).height();

            if (top <= scrollBottom) {
                $(this).addClass('visible');
            }
        });

         /////////////////////////////////////////////////// Compétences Techniques ///////////////////////////////////////
         
        $('.et-slide#competences h2').each(function () {
          let top = $(this).offset().top;
          let scrollBottom = $(window).scrollTop() + $(window).height();

          if (top <= scrollBottom) {
              $(this).addClass('visible');
          }
      });

//test
$('.et-slide#competences .test .manuel .technologies img').each(function (index) {
        let top = $(this).offset().top +50;
        let scrollBottom = $(window).scrollTop() + $(window).height();
  
        if (top <= scrollBottom) {
          setTimeout(() => {
            $(this).addClass('visible');
          }, index * 150); // Délai de 100ms entre chaque image  
          
          setTimeout(() => {
            $('.et-slide#competences .test .manuel h3').addClass('visible');
            $('.et-slide#competences .test .manuel h5').addClass('visible');
          }, 600);
        }
      });

    $('.et-slide#competences .test .auto .technologies img').each(function (index) {
        let top = $(this).offset().top +50;
        let scrollBottom = $(window).scrollTop() + $(window).height();
  
        if (top <= scrollBottom) {
          setTimeout(() => {
            $(this).addClass('visible');
          }, index * 150); // Délai de 100ms entre chaque image  
          
          setTimeout(() => {
            $('.et-slide#competences .test .auto h3').addClass('visible');
            $('.et-slide#competences .test .auto h5').addClass('visible');
          }, 600);
        }
      });

      $('.et-slide#competences .test .test-outils .technologies img').each(function (index) {
        let top = $(this).offset().top +50;
        let scrollBottom = $(window).scrollTop() + $(window).height();
  
        if (top <= scrollBottom) {
          setTimeout(() => {
            $(this).addClass('visible');
          }, index * 150); // Délai de 100ms entre chaque image  
          
          setTimeout(() => {
            $('.et-slide#competences .test .test-outils h3').addClass('visible');
            $('.et-slide#competences .test .test-outils h5').addClass('visible');
          }, 750);
        }
      });

//fontend 
    $('.et-slide#competences .dev-web .front .technologies img').each(function (index) {
        let top = $(this).offset().top +50;
        let scrollBottom = $(window).scrollTop() + $(window).height();
  
        if (top <= scrollBottom) {
          setTimeout(() => {
            $(this).addClass('visible');
          }, index * 150); // Délai de 100ms entre chaque image  
          
          setTimeout(() => {
            $('.et-slide#competences .dev-web .front h3').addClass('visible');
            $('.et-slide#competences .dev-web .front h5').addClass('visible');
          }, 600);
        }
      });

      $('.et-slide#competences .dev-web .back .technologies img').each(function (index) {
        let top = $(this).offset().top +50;
        let scrollBottom = $(window).scrollTop() + $(window).height();
  
        if (top <= scrollBottom) {
          setTimeout(() => {
            $(this).addClass('visible');
          }, index * 150); // Délai de 100ms entre chaque image  
          
          setTimeout(() => {
            $('.et-slide#competences .dev-web .back h3').addClass('visible');
            $('.et-slide#competences .dev-web .back h5').addClass('visible');
          }, 750);
        }
      });
//outils & soft skills
      $('.et-slide#competences .outils div, .et-slide#competences .soft-skills div').each(function (index) {
        let top = $(this).offset().top;
        let scrollBottom = $(window).scrollTop() + $(window).height();
  
        if (top <= scrollBottom) {
             $(this).addClass('visible');
        }
      });

        /////////////////////////////////////////////////// Expériences Professionnelles ///////////////////////////////////////
     /* 
      $('.et-slide#experiences .experiences .right-experience, .et-slide#experiences .experiences .left-experience').each(function () {
        let h3Top = $(this).offset().top + 150;
        let scrollBottom = $(window).scrollTop() + $(window).height();
  
        if (h3Top <= scrollBottom) {
          $(this).addClass('visible');
        }
      }); */

      function showExperience(experiences, index = 0) {
        if (index >= experiences.length) return; // Stopper si toutes les expériences sont traitées
      
        const experience = $(experiences[index]); // Récupérer l'expérience actuelle
        const image = experience.find('.entreprise img'); // Récupérer l'image
        const description = experience.find('.poste h3, .poste h5, .entreprise h5'); // Récupérer les descriptions
        const line_1 = experience.find('.poste .horizontal-line'); // Première ligne
        const line_2 = experience.find('.poste .vertical-line'); // Deuxième ligne
        const line_3 = experience.find('.poste .horizontal-line-2'); // Troisième ligne
        const line_4 = experience.find('.poste .vertical-line-2'); // Quatrième ligne
      
        // Montrer l'image
        setTimeout(() => {
          image.addClass('visible');
      
          // Montrer les descriptions
          setTimeout(() => {
            description.addClass('visible');
      
            // Montrer la première ligne
            setTimeout(() => {
              line_1.addClass('visible');
      
              // Montrer la deuxième ligne
              setTimeout(() => {
                line_2.addClass('visible');
      
                // Montrer la troisième ligne
                setTimeout(() => {
                  line_3.addClass('visible');
      
                  // Montrer la quatrième ligne
                  setTimeout(() => {
                    line_4.addClass('visible');
      
                    // Passer à l'expérience suivante
                    showExperience(experiences, index + 1);
                  }, 100); // Délai pour la quatrième ligne
                }, 100); // Délai pour la troisième ligne
              }, 100); // Délai pour la deuxième ligne
            }, 100); // Délai pour la première ligne
          }, 100); // Délai pour les descriptions
        }, 0); // Délai pour l'image
      }
      
      function isSectionVisible(section) {
        const sectionTop = $(section).offset().top;
        const sectionBottom = sectionTop + $(section).outerHeight();
        const scrollTop = $(window).scrollTop();
        const windowHeight = $(window).height();
      
        return sectionTop < scrollTop + windowHeight && sectionBottom > scrollTop;
      }
      
      // Throttling pour améliorer les performances
      let isScrolling = false;
      
      $(window).on('scroll', () => {
        if (!isScrolling) {
          isScrolling = true;
      
          setTimeout(() => {
            const section = $('.et-slide#experiences'); // Section à surveiller
            if (isSectionVisible(section) && !section.hasClass('animated')) {
              section.addClass('animated'); // Ajouter une classe pour éviter de relancer cette animation
              const experiences = section.find('.experiences .experience');
              showExperience(experiences); // Lancer les animations de cette section
            }
      
            isScrolling = false;
          }, 150); // Intervalle de 150ms pour limiter la fréquence d'exécution
        }
      });
      


    /////////////////////////////////////////////////// Formations Professionnelles ///////////////////////////////////////
    $('.et-slide#formations .formations .formation-description div, .et-slide#formations .formations .formation-description h3,.et-slide#formations .formations .certificats h2').each(function () {
        let top = $(this).offset().top + 50;
        let scrollBottom = $(window).scrollTop() + $(window).height();

        if (top <= scrollBottom) {
            $(this).addClass('visible');
        }
    });
    
    $('.et-slide#formations .formations .certificats .certificat-item').each(function (index) {
      let top = $(this).offset().top;
      let scrollBottom = $(window).scrollTop() + $(window).height();

      if (top <= scrollBottom) {
        setTimeout(() => {
          $(this).addClass('visible');
        }, index * 100);
      }
    });
    
    /////////////////////////////////////////////////// Portfolio ///////////////////////////////////////
    $('.et-slide#portfolio h3, .et-slide#portfolio .project').each(function () {
      let top = $(this).offset().top + 150;
      let scrollBottom = $(window).scrollTop() + $(window).height();

      if (top <= scrollBottom) {
          $(this).addClass('visible');
      }
  });
  $('.et-slide#portfolio h2.project-title').each(function () {
    let top = $(this).offset().top + 100;
    let scrollBottom = $(window).scrollTop() + $(window).height();

    if (top <= scrollBottom) {
        $(this).addClass('visible');
    }
});

//////////////////////////////////////////////////// Contact //////////////////////////////////////////////////
  
$('.et-slide#contact .contact-part-1 .contacts a').each(function (index) {
    let top = $(this).offset().top + 50;
    let scrollBottom = $(window).scrollTop() + $(window).height();

    if (top <= scrollBottom) {
      setTimeout(() => {
        $(this).closest('a').find('span').addClass('visible');
        
      setTimeout(() => {
        $(this).closest('a').find('img').addClass('visible');
      }, 100);
    }, index * 250);
    }
  });


    });
  });