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


    //비디오

    $("#CF").mousemove(function (e) {
        $('.cursor').css("top", e.screenY - 100 + 'px');
        $('.cursor').css("left", e.screenX - 100 + 'px');
        $('.cursor').fadeIn();
    });
    $("#CF").on("mouseleave", function () {
        $('.cursor').fadeOut();
    });

    //팝업
    $('#mainVideo').click(function () {
        $('.cfPopUp').fadeIn();
    });
    $('.cfBtn').click(function () {
        $('.cfPopUp').fadeOut();
    });
    
});

//이벤트
    function left() {
        $('.eventSlide li:last').prependTo('.eventSlide');
        $('.eventSlide').css('margin-left', -1000);
        $('.eventSlide').stop().animate({ marginLeft: 0 }, 800);
    }
    function rig() {
        $('.eventSlide').stop().animate({ marginLeft: -1000 }, 800, function () {
            $('.eventSlide li:first').appendTo('.eventSlide');
            $('.eventSlide').css({ marginLeft: 0 });
        });
    }
    setInterval(rig, 8000);
    $(function () {
       
        $('.left').click(function () {
            left();
        });
        $('.rig').click(function () {
            rig();
        });
    });