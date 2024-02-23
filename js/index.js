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