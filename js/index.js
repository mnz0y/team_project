// 네비게이션

$(function(){
    $('.nav>ul>li').mouseover(function(){
        $('.nav>ul>li>ul').stop().slideDown(900);
        $('header').addClass('on')});

    $('.nav>ul>li').mouseout(function(){
        $('.nav>ul>li>ul').stop().slideUp(600);
        $('header').removeClass('on');
    });
});

// 슬라이드 이미지
    function prev(){
        $('.slide li:last').prependTo('.slide');
        $('.slide').css('margin-left',-1920);
        $('.slide').stop().animate({marginLeft:0},800);
    }
    function next(){
        $('.slide').stop().animate({marginLeft:-1920},800,function(){
            $('.slide li:first').appendTo('.slide');
            $('.slide').css({marginLeft:0});
        });
    }
    setInterval(next, 8000);
$(function(){
    $('#slideWrap').mouseover(function(){
        $('#slideWrap span').css('display','block');
    });
    $('#slideWrap').mouseout(function(){
        $('#slideWrap span').css('display','none');
    });

    $('.prev').click(function(){
        prev();
    });
    $('.next').click(function(){
        next();
    });
});