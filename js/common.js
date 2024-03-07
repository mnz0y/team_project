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