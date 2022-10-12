$('.info__share').on('click', function () {
    let checkDisplay = $('.fa-sharp').css('display');

    if (checkDisplay == 'none') {
        $('.fa-sharp').css('display', 'block');
        $('.info__share__modal').css('display', 'flex');
    }
    else {
        $('.fa-sharp').css('display', 'none');
        $('.info__share__modal').css('display', 'none');
    }
});