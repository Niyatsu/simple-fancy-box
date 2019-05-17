$(function() {
  $('.fancy-box-item').click(function() {
    let imgSource = $(this).attr('src');
    let imgAlt = $(this).prop('alt');
    let popupImg = $('.fancy-popup-image');
    let imgWidth = $(this).css('width');
    let imgHeight = $(this).css('height');
    
    popupImg.prop('src', imgSource);
    if (imgWidth > imgHeight) {

      if ($(window).width() > 768) {
        popupImg.css({
          'width': '70vw',
          'height': 'auto'
        });
      }
      
      if ($(window).width() > 1100) {
        popupImg.css({
          'width': '60vw',
          'height': 'auto'
        });
      } else {
        popupImg.css({
          'width': '90vw',
          'height': 'auto'
        });
      }
      
    } else {
      popupImg.css({
        'width' : 'auto',
        'height': '80vh',
      });
    }

    $('.fancy-caption').text(imgAlt);
    $('.fancy-box-popup').show();
  })

  $('.fancy-btn-close').click(function() {
    $('.fancy-box-popup').hide();
    $('.fancy-popup-image').css({
      'width' : '0',
      'height': '0',
    });
  })
})