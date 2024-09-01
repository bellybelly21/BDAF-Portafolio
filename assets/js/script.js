$(document).ready(function() {
    const $toggleButton = $('.navbar-toggle');
    const $navbarMenu = $('.navbar_menu');
    const $navbar = $('.navbar');

    $toggleButton.on('click', function() {
        $navbarMenu.toggleClass('open');
        
        if ($navbarMenu.hasClass('open')) {
            $navbar.css('border-radius', '32px 32px 0 0');
        } else {
            $navbar.css('border-radius', '80px');
        }
    });
});


  document.querySelector('.navbar-toggle').addEventListener('click', function() {
    const navbarMenu = document.querySelector('.navbar_menu');
    navbarMenu.style.display = navbarMenu.style.display === 'flex' ? 'none' : 'flex';
  });

  
