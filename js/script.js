const navbar = document.getElementById('navbar');

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    navbar.classList.remove('top');
  } else {
    navbar.classList.add('top');
  }
};

// Smooth Scrolling
$('#navbar a, .btn').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});
