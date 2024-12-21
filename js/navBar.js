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
