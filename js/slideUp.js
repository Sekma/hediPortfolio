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

        $('.et-slide#competences h2').each(function () {
            let top = $(this).offset().top;
            let scrollBottom = $(window).scrollTop() + $(window).height();

            if (top <= scrollBottom) {
                $(this).addClass('visible');
            }
        });

         /////////////////////////////////////////////////// Compétences Techniques ///////////////////////////////////////
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
//backend
      $('.et-slide#competences .backend div').each(function (index) {
        let top = $(this).offset().top;
        let scrollBottom = $(window).scrollTop() + $(window).height();
  
        if (top <= scrollBottom) {
            setTimeout(() => {
             $(this).addClass('visible');
            }, index * 100); 
        }
      });
//outils
      $('.et-slide#competences .outils div').each(function (index) {
        let top = $(this).offset().top;
        let scrollBottom = $(window).scrollTop() + $(window).height();
  
        if (top <= scrollBottom) {
            setTimeout(() => {
             $(this).addClass('visible');
            }, index * 100); 
        }
      });
//soft skills
        $('.et-slide#competences .soft-skills div').each(function (index) {
            let top = $(this).offset().top;
            let scrollBottom = $(window).scrollTop() + $(window).height();

            if (top <= scrollBottom) {
                setTimeout(() => {
                $(this).addClass('visible');
                }, index * 100); 
            }
        });

        /////////////////////////////////////////////////// Expériences Professionnelles ///////////////////////////////////////
      // Animation des images
    $('.et-slide#experiences .experiences .entreprise img').each(function () {
        let top = $(this).offset().top;
        let scrollBottom = $(window).scrollTop() + $(window).height();
  
        if (top <= scrollBottom) {
          $(this).addClass('visible');
        }
      });
  
      // Animation des titres h3
      $('.et-slide#experiences .experiences .experience h3').each(function () {
        let h3Top = $(this).offset().top + 50;
        let scrollBottom = $(window).scrollTop() + $(window).height();
  
        if (h3Top <= scrollBottom) {
          $(this).addClass('visible');
        }
      });
  
      // Animation des durées h5
      $('.et-slide#experiences .experiences .experience h5.duree').each(function () {
        let h5Top = $(this).offset().top + 50;
        let scrollBottom = $(window).scrollTop() + $(window).height();
  
        if (h5Top <= scrollBottom) {
          $(this).addClass('visible');
        }
      });

      ///////////////////////// Animation des h5 à droite
      $('.et-slide#experiences .experiences .right-experience .entreprise h5').each(function (index) {
        let h5Top = $(this).offset().top + 50;
        let scrollBottom = $(window).scrollTop() + $(window).height();
  
        if (h5Top <= scrollBottom) {
          $(this).addClass('visible'); // Les h5 s'affichent immédiatement après les images
        }
      });
  
      ///////////////////////// Animation des h5 à gauche
      $('.et-slide#experiences .experiences .left-experience .entreprise h5').each(function (index) {
        let h5Top = $(this).offset().top +  50;
        let scrollBottom = $(window).scrollTop() + $(window).height();
  
        if (h5Top < scrollBottom) {
          $(this).addClass('visible'); // Les h5 s'affichent immédiatement après les images
        }
      });




    });
  });
  

  