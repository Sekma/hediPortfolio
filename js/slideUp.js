$(document).ready(function () {
    $(window).on('scroll', function () {
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

//fontend 
    $('.et-slide#competences .frontend .languages .technologies img').each(function (index) {
        let top = $(this).offset().top +50;
        let scrollBottom = $(window).scrollTop() + $(window).height();
  
        if (top <= scrollBottom) {
          setTimeout(() => {
            $(this).addClass('visible');
          }, index * 150); // Délai de 100ms entre chaque image  
          
          setTimeout(() => {
            $('.et-slide#competences .frontend .languages h3').addClass('visible');
            $('.et-slide#competences .frontend .languages h5').addClass('visible');
          }, 600);
        }
      });

      $('.et-slide#competences .frontend .frameworks .technologies img').each(function (index) {
        let top = $(this).offset().top +50;
        let scrollBottom = $(window).scrollTop() + $(window).height();
  
        if (top <= scrollBottom) {
          setTimeout(() => {
            $(this).addClass('visible');
          }, index * 150); // Délai de 100ms entre chaque image  
          
          setTimeout(() => {
            $('.et-slide#competences .frontend .frameworks h3').addClass('visible');
            $('.et-slide#competences .frontend .frameworks h5').addClass('visible');
          }, 750);
        }
      });
//backend & outils & soft skills
      $('.et-slide#competences .backend div, .et-slide#competences .outils div, .et-slide#competences .soft-skills div').each(function (index) {
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
                  }, 200); // Délai pour la quatrième ligne
                }, 200); // Délai pour la troisième ligne
              }, 200); // Délai pour la deuxième ligne
            }, 200); // Délai pour la première ligne
          }, 200); // Délai pour les descriptions
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

    });
  });
  

  