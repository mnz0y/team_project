
// 스크롤이벤트
$(function () {
    $(window).scroll(function () {
        let ws = $(this).scrollTop();
        console.log(ws)
        let cf = $('.cfUp').offset().top;
        console.log(cf);
        let business = $('.busText').offset().top;
        if (cf < ws) {
            $('.busText').css('transform', 'translateX(-500px)').css('opacity', '0');
            $('.busImg').css('transform', 'translateX(500px)').css('opacity', '0');
        }
        if (ws < business) {
            $('.busText').css('transform', 'translateX(0px)').css('opacity', '1');
            $('.busImg').css('transform', 'translateX(0px)').css('opacity', '1');
            $('.eventBox').css('transform', 'translateY(100px)').css('opacity', '0');
            $('.storeBack img').css('transform', 'scale(1.3)');
            $('#store .container').css('transform', 'translateY(100px)').css('opacity', '0');
        }
        if (business < ws) {
            $('.busText').css('transform', 'translateX(-500px)').css('opacity', '0');
            $('.busImg').css('transform', 'translateX(500px)').css('opacity', '0');
            $('.eventBox').css('transform', 'translateY(0px)').css('opacity', '1');
        }

        let store = $('#store').offset().top;
        if (store - 700 < ws) {
            $('.eventBox').css('transform', 'translateY(100px)').css('opacity', '0');
            $('.storeBack img').css('transform', 'scale(1)');
            $('#store .container').css('transform', 'translateY(0)').css('opacity', '1');
        }
    });
});





// 반응형

function detectMediaSize() {
    if ((window.matchMedia('(max-width:499px)').matches)){
        //슬라이드 이미지
        let w = $(window).innerWidth();
        function prev() {
            $('.slide li:last').prependTo('.slide');
            $('.slide').css('margin-left', -w);
            $('.slide').stop().animate({ marginLeft: 0 }, 600);
        };

        function next() {
            $('.slide').stop().animate({ marginLeft: -w }, 600, function () {
                $('.slide li:first').appendTo('.slide');
                $('.slide').css({ marginLeft: 0 });
            });
        }
        setInterval(next, 8000);

        function left() {
            $('.eventSlide li:last').prependTo('.eventSlide');
            $('.eventSlide').css('margin-left', -w);
            $('.eventSlide').stop().animate({ marginLeft: 0 }, 600);
        }
        function rig() {
            $('.eventSlide').stop().animate({ marginLeft: -w }, 600, function () {
                $('.eventSlide li:first').appendTo('.eventSlide');
                $('.eventSlide').css({ marginLeft: 0 });
            });
        }
        setInterval(rig, 8000);

        $(function () {
            //슬라이드 이미지
            $('.prev').click(function () {
                prev();
            });
            $('.next').click(function () {
                next();
            });
            //이벤트
            $('.left').click(function () {
                left();
            });
            $('.rig').click(function () {
                rig();
            });
        });
    }
    //모바일
    else if ((window.matchMedia('(max-width:699px)').matches)) {
        //슬라이드 이미지
        let w = $(window).innerWidth()-16.5;
        function prev() {
            $('.slide li:last').prependTo('.slide');
            $('.slide').css('margin-left', -w);
            $('.slide').stop().animate({ marginLeft: 0 }, 600);
        };

        function next() {
            $('.slide').stop().animate({ marginLeft: -w }, 600, function () {
                $('.slide li:first').appendTo('.slide');
                $('.slide').css({ marginLeft: 0 });
            });
        }
        setInterval(next, 8000);

        //이벤트
        function left() {
            $('.eventSlide li:last').prependTo('.eventSlide');
            $('.eventSlide').css('margin-left', -w);
            $('.eventSlide').stop().animate({ marginLeft: 0 }, 600);
        }
        function rig() {
            $('.eventSlide').stop().animate({ marginLeft: -w }, 600, function () {
                $('.eventSlide li:first').appendTo('.eventSlide');
                $('.eventSlide').css({ marginLeft: 0 });
            });
        }
        setInterval(rig, 8000);

        $(function () {
            //슬라이드 이미지
            $('.prev').click(function () {
                prev();
            });
            $('.next').click(function () {
                next();
            });
            //이벤트
            $('.left').click(function () {
                left();
            });
            $('.rig').click(function () {
                rig();
            });
        });


    }

    //테블릿
    else if (window.matchMedia('(min-width:700px) and (max-width:1015px)').matches) {
        //슬라이드 이미지
        let w = $(window).innerWidth();
        function prev() {
            $('.slide li:last').prependTo('.slide');
            $('.slide').css('margin-left', -w);
            $('.slide').stop().animate({ marginLeft: 0 }, 600);
        };

        function next() {
            $('.slide').stop().animate({ marginLeft: -w }, 600, function () {
                $('.slide li:first').appendTo('.slide');
                $('.slide').css({ marginLeft: 0 });
            });
        }
        setInterval(next, 8000);

        //이벤트
        function left() {
            $('.eventSlide li:last').prependTo('.eventSlide');
            $('.eventSlide').css('margin-left', -w);
            $('.eventSlide').stop().animate({ marginLeft: 0 }, 800);
        }
        function rig() {
            $('.eventSlide').stop().animate({ marginLeft: -w }, 800, function () {
                $('.eventSlide li:first').appendTo('.eventSlide');
                $('.eventSlide').css({ marginLeft: 0 });
            });
        }
        setInterval(rig, 8000);

        $(function () {
            //슬라이드 이미지
            $('.prev').click(function () {
                prev();
            });
            $('.next').click(function () {
                next();
            });
            //이벤트
            $('.left').click(function () {
                left();
            });
            $('.rig').click(function () {
                rig();
            });
        });


    }

    //데스크톱
    else if (window.matchMedia('(min-width:1016px) and (max-width:1700px)').matches) {

        //슬라이드 이미지
        let w = $(window).innerWidth() - 17;
        function prev() {
            $('.slide li:last').prependTo('.slide');
            $('.slide').css('margin-left', -w);
            $('.slide').stop().animate({ marginLeft: 0 }, 600);
        };

        function next() {
            $('.slide').stop().animate({ marginLeft: -w }, 600, function () {
                $('.slide li:first').appendTo('.slide');
                $('.slide').css({ marginLeft: 0 });
            });
        }
        setInterval(next, 8000);

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
            //슬라이드 이미지
            $('.prev').click(function () {
                prev();
            });
            $('.next').click(function () {
                next();
            });

            //비디오
            $("#CF").mousemove(function (e) {
                $('.cursor').css("top", e.screenY - 200 + 'px');
                $('.cursor').css("left", e.screenX - 150 + 'px');
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

            //이벤트
            $('.left').click(function () {
                left();
            });
            $('.rig').click(function () {
                rig();
            });
        });


    }
    //기본웹사이트
    else {
        //슬라이드 이미지
        let w = $(window).innerWidth() - 17;
        function prev() {
            $('.slide li:last').prependTo('.slide');
            $('.slide').css('margin-left', -w);
            $('.slide').stop().animate({ marginLeft: 0 }, 800);
        }
        function next() {
            $('.slide').stop().animate({ marginLeft: -w }, 800, function () {
                $('.slide li:first').appendTo('.slide');
                $('.slide').css({ marginLeft: 0 });
            });
        }
        setInterval(next, 8000);


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
            //슬라이드 이미지
            $('.prev').click(function () {
                prev();
            });
            $('.next').click(function () {
                next();
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

            //이벤트
            $('.left').click(function () {
                left();
            });
            $('.rig').click(function () {
                rig();
            });

        });


    }
};

window.addEventListener('resize', detectMediaSize, false);
detectMediaSize();



$(function () {
    //슬라이드 이미지
    $('#slideWrap').mouseover(function () {
        $('#slideWrap span').css('display', 'block');
    });
    $('#slideWrap').mouseout(function () {
        $('#slideWrap span').css('display', 'none');
    });

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
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1016,
                settings: {
                    slidesToShow: 2,
                    centerMode: false

                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 501,
                settings: {
                    slidesToShow: 1,
                    centerMode: false
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

    //이벤트
    $('.eventwrap').mouseover(function () {
        $('.left, .rig').css('display', 'block');
    });
    $('.eventwrap').mouseout(function () {
        $('.left, .rig').css('display', 'none');
    });
});