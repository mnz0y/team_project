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

    $('.reMenu>li').click(function(){
        $(this).children('.submenu').slideToggle('slow');
    });


// 햄버거 아이콘
    $('.menu-trigger').click(function(){
        $(this).toggleClass('is-active');
        $('.menuWrap').toggleClass('moveMenu')
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
        responsive : [
            {   breakpoint:1700,
                settings : {
                    slidesToShow:3,
                }
            },
            {   breakpoint :1016,
                settings : {
                    slidesToShow:2,
                    centerMode:false

                }
            },
            {   breakpoint :700,
                settings : {
                    slidesToShow:1,
                }
            },
            {   breakpoint:500,
                settings : {
                    slidesToShow:1,
                    centerMode:false
                }
            }
        ]
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
        $('.eventSlide').css('margin-left', -850);
        $('.eventSlide').stop().animate({ marginLeft: 0 }, 800);
    }
    function rig() {
        $('.eventSlide').stop().animate({ marginLeft: -850 }, 800, function () {
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

    // 스크롤이벤트
    $(function(){
        $(window).scroll(function(){
            let ws =$(this).scrollTop();
            console.log(ws)
            let business = $('.busText').offset().top;
            if(ws<2200){
                $('.busText').css('transform','translateX(-500px)').css('opacity','0');
                $('.busImg').css('transform','translateX(500px)').css('opacity','0');
            }
            if(0<ws<business-700){
                $('.busText').css('transform','translateX(0px)').css('opacity','1');
                $('.busImg').css('transform','translateX(0px)').css('opacity','1');
                $('.eventBox').css('transform','translateY(100px)').css('opacity','0');
                $('.storeBack img').css('transform','scale(1.3)');
                $('#store .container').css('transform','translateY(100px)').css('opacity','0');
            }
            if(business<ws){
                $('.busText').css('transform','translateX(-500px)').css('opacity','0');
                $('.busImg').css('transform','translateX(500px)').css('opacity','0');
                $('.eventBox').css('transform','translateY(0px)').css('opacity','1');
            }
           
            let store = $('#store').offset().top;
            if(store-700<ws){
                $('.eventBox').css('transform','translateY(100px)').css('opacity','0');
                $('.storeBack img').css('transform','scale(1)');
                $('#store .container').css('transform','translateY(0)').css('opacity','1');
            }
        });
    });