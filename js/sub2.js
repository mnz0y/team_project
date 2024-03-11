
// --------------------------section1 큰 그래프 -------------------------------
$(function(){
    
    $(window).scroll(function(){
        let ws=$(this).scrollTop();
        let label= $('.section1column2').offset().top;

      
        $('.section1column2 .arrowbox').css("animation","none").hide();
        
   
        if(ws>label-300 && ws<=label+400 ){     
            $('.section1column2 .arrowbox').css("animation","grahLine 3.4s").show();
           
                        
        }
        if(ws>label+400){
            $('.section1column2 .arrowbox').css("animation","none");
           
        }
    });
});
// ------------------------------section1 그래프모바일 체인지---------------------
$(document).ready(function () {
    
       function changeimage(){
        if (window.matchMedia("(max-width: 1359px)").matches) {
           
            $(".section1column2 .arrowbox img").attr("src", "img/sub_2/mobilearrow.png")
        } else {
 
            $(".section1column2 .arrowbox img").attr("src", "img/sub_2/Group1.png")
        }
    }

    changeimage()
    $(window).resize(changeimage);
    
});

// --------------------------section1 tex로고 -------------------------------
$(function(){
    
    $(window).scroll(function(){
        let ws=$(this).scrollTop();
        let label= $('.section1column2').offset().top;

      
       
        $('.graphtextani').css("animation","none").hide();
   
        if(ws>label-300 && ws<=label+400 ){     
         
            $('.graphtextani').css("animation","grahLine 3.4s").show();
                        
        }
        if(ws>label+400){
           
            $('.graphtextani').css("animation","none");
        }
    });
});
// --------------------------section1 작은그래프-------------------------------
$(function(){
    
    $(window).scroll(function(){
        let ws=$(this).scrollTop();
        let label= $('.section1column2').offset().top;

      
        $('.smallgraph').css("animation","none").hide();
   
        if(ws>label-300 && ws<=label+900 ){     
            $('.smallgraph').css("animation","grahLinethree 2.4s").show();
                        
        }
        if(ws>label+900){
            $('.smallgraph').css("animation","none");
        }
    });
});
// --------------------------section2 제목 애니메이션-------------------------------
$(function(){
    
    $(window).scroll(function(){
        let ws=$(this).scrollTop();
        let s2= $('#section2').offset().top;

        if(ws<=s2-600){
            $('#section2 .titlebox').css("transform","translateY(100px)").css("opacity", "0");
        }
        if(ws>s2-600 && ws<=s2+300){     
            $('#section2 .titlebox').css("transform","translateY(0px)").css("opacity", "1"); 
                   
        }
        if(ws>s2+300){
            $('#section2 .titlebox').css("transform","translateY(100px)").css("opacity", "0");
        }
    });
});
// --------------------------section2 라벨 애니메이션-------------------------------
$(function(){
    
    $(window).scroll(function(){
        let ws=$(this).scrollTop();
        let label= $('.label').offset().top;

        if(ws<=label-800){
            $('.label').css("transform","translateX(100px)").css("opacity", "0");
        }
        if(ws>label-800 && ws<=label+180){     
            $('.label').css("transform","translateX(0px)").css("opacity", "1");
                        
        }
        if(ws>label+180){
            $('.label').css("transform","translateX(100px)").css("opacity", "0");
        }
    });
});
// --------------------------section3 제목 애니메이션-------------------------------
$(function(){
    
    $(window).scroll(function(){
        let ws=$(this).scrollTop();
        let s3= $('#section3').offset().top;

        if(ws<=s3-600){
            $('#section3 .titlebox').css("transform","translateY(100px)").css("opacity", "0");
        }
        if(ws>s3-600 && ws<=s3+600){     
            $('#section3 .titlebox').css("transform","translateY(0px)").css("opacity", "1");
                        
        }
        if(ws>s3+600){
            $('#section3 .titlebox').css("transform","translateY(100px)").css("opacity", "0");
        }
    });
});
// --------------------------section3 마우스 드래그 슬라이더-------------------------------
$(function () {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints:{
           
            700:{
                slidesPerView:1.5
            },
            1100:{
                slidesPerView: 2
            },
            1359:{
                slidesPerView: 1.3
            }
        }
    });
});



