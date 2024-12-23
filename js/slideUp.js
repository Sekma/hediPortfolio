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
     
      $('.et-slide#experiences .experiences .right-experience, .et-slide#experiences .experiences .left-experience').each(function () {
        let h3Top = $(this).offset().top;
        let scrollBottom = $(window).scrollTop() + $(window).height();
  
        if (h3Top <= scrollBottom) {
          $(this).addClass('visible');
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
  

  