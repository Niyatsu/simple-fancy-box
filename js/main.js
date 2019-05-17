$(function() {
  $('.fancy-box-item').click(function() {
    let imgSource = $(this).attr('src');
    let imgAlt = $(this).prop('alt');
    let popupImg = $('.fancy-popup-image');
    let imgWidth = $(this).css('width');
    let imgHeight = $(this).css('height');
    
    popupImg.prop('src', imgSource);
    if (imgWidth > imgHeight) {
      popupImg.css({
        'width': '80%',
        'height': 'auto'
      });
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