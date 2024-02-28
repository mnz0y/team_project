// 네비게이션

$(function () {
    $('.nav>ul>li').mouseover(function () {
        $('.nav>ul>li>ul').stop().slideDown(700);
        $('header').addClass('on')
    });

    $('.nav>ul>li').mouseout(function () {
        $('.nav>ul>li>ul').stop().slideUp(600);
        $('header').removeClass('on');
    });
});

// 슬라이드 이미지
function prev() {
    $('.slide li:last').prependTo('.slide');
    $('.slide').css('margin-left', -1900);
    $('.slide').stop().animate({ marginLeft: 0 }, 800);
}
function next() {
    $('.slide').stop().animate({ marginLeft: -1900 }, 800, function () {
        $('.slide li:first').appendTo('.slide');
        $('.slide').css({ marginLeft: 0 });
    });
}
setInterval(next, 8000);
$(function () {
    $('#slideWrap').mouseover(function () {
        $('#slideWrap span').css('display', 'block');
    });
    $('#slideWrap').mouseout(function () {
        $('#slideWrap span').css('display', 'none');
    });

    $('.prev').click(function () {
        prev();
    });
    $('.next').click(function () {
        next();
    });
});



$(function () {
    //메뉴
    $('.menuSlide').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 500,
        autoplay: true,
        autoplaySpeend: 500,
        centerMode: true,
        centerPadding: '0',
        spaceBetween: 0,
    });

    $('.pizzaF').mouseover(function () {
        $(this).find('img').css('opacity', '0.1');
        $(this).children('.pizzaB').css('opacity', '1');
    });
    $('.pizzaF').mouseout(function () {
        $(this).find('img').css('opacity', '1');
        $(this).children('.pizzaB').css('opacity', '0');
    });

    //이벤트
    $('.eventSlider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeend: 500,
        asNavFor: '.sliderNav'
      });
      $('.sliderNav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.eventSlider',
        dots: true,
        arrows:false,
        centerMode: false,
        focusOnSelect: true,
      });


});


