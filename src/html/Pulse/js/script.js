/* eslint-disable require-jsdoc */
$(document).ready(function() {
  $('.slider__inner').slick({
    speed: 2000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: `<button type="button" class="slick-prev">
    <img src = "icons/arrows/prev-arrow.png">
    </button>`,
    nextArrow: `<button type="button" class="slick-next">
    <img src = "icons/arrows/next-arrow.png">
    </button>`,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  });

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings()
      .removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content')
      .removeClass('catalog__content_active')
      .eq($(this).index()).addClass('catalog__content_active');
  });

  function toggleSlide(item) {
    $(item).each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i)
          .toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      });
    });
  };

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');


  $('form').submit(function(e) {
    e.preventDefault();

    if (!$(this).valid()) {
      return;
    }

    $.ajax({
      type: 'POST',
      url: 'mailer/smart.php',
      data: $(this).serialize(),
    }).done(function() {
      $(this).find('input').value('');
      $('#consultation, #order').fadeOut();
      $('.overlay, #thanks').fadeIn('slow');

      $('form').trigger('reset');
    });
    return false;
  });

  new WOW().init();
});

