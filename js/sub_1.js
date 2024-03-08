$(function () {
  // 피자 글씨 라운드
  $('.round').lettering();

  // 피자 이름 receipt에 가져오기(초기값)
  var nameBText = $('#nameB').text();
  $('#nameS').text(nameBText);

  // 선택한 피자 설명
  function pizzainfo() {
    $('.pizzaSub').css("opacity", 0)
    $('.pizzaSub').eq(idx).css("opacity", 1)
    $('.pizzaSub').children('h3').removeAttr('id', 'nameB')
    $('.pizzaSub').eq(idx).children('h3').attr('id', 'nameB')

    // 피자 이름 receipt에 가져오기
    let nameS = document.getElementById('nameS')
    let nameB = document.getElementById('nameB')

    nameS.textContent = nameB.textContent
  }


  let idx=4;


  // 피자 이름 클릭하면 선택된 피자 변경
  $('.pizzaT').click(function () {
    idx = $(this).index()

    $(this).children('.round').addClass('active');
    $(this).siblings().children('.round').removeClass('active');
    $('.dotWrap').children().removeClass('border')
    $('.dotWrap').children().eq(idx).addClass('border')

    $('.pizzaS').children().css("opacity", 0)
    $('.pizzaS').children().eq(idx).css("opacity", 1)

    pizzainfo()

  });


  // 이전, 이후 버튼 클릭시 이전,이후 피자
  $('#prev').click(function () {
    idx--;
    if (idx < 0) {idx = 0;}
    $('.pizzaSmall img').eq(idx).show().siblings('img').hide();
    pizzainfo();
  })
  $('#next').click(function () {
    idx++;
    if (idx > 8) {idx = 8;}
    $('.pizzaSmall img').eq(idx).show().siblings('img').hide();
    pizzainfo();
  })


  $(window).resize(function(){
    $('.pizzaSmall img').eq(idx).show().siblings('img').hide();
  
    $('.pizzaT').eq(idx).children('.round').addClass('active');
    $('.pizzaT').eq(idx).siblings().children('.round').removeClass('active');
    $('.dotWrap').children().removeClass('border')
    $('.dotWrap').children().eq(idx).addClass('border')
  
    $('.pizzaS').children().css("opacity", 0)
    $('.pizzaS').children().eq(idx).css("opacity", 1)
  })
    


  // 선택한 사이즈별 가격 total에 입력
  $('input[name="size"]').change(function () {
    updateTotalPrice();

    let sizeV = $(this).val()
    $('#sizeV').css("opacity", 1)
    $('#sizeV').text(sizeV.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원");

  });

  // 도우 선택 시 가격 total에 입력
  $('input[name="edge"]').change(function () {
    updateTotalPrice();
  });

  // 버튼 누르면 주문 수량 증가, 감소
  $('.minus').click(function () {
    count('minus');
  });

  $('.plus').click(function () {
    count('plus');
  });

  function count(type) {
    const resultElement = $('#result');

    let number = parseInt(resultElement.text());

    let sizePrice = parseFloat($('input[name="size"]:checked').val()); // 선택된 사이즈의 가격

    if (type === 'plus') {
      if (number < 5) {
        number = number + 1;
      } else {
        alert("최대 5개까지 주문할 수 있습니다.");
      }
    } else if (type === 'minus') {
      if (number > 1) {
        number = number - 1;
      } else {
        // alert ("최소 1개부터 주문할 수 있습니다.")
      }
    }

    resultElement.text(number);
    updateTotalPrice(); // 주문 수량이 변경될 때마다 totalPrice 업데이트
  }

  // 토핑 추가 addlist
  $('input[name="topping"]').change(function () {
    if ($(this).is(':checked')) {
      $(this).parent().addClass('active2');

      if ($(this).parent().hasClass('active2')) {
        let dlElement = $('<dl>'); // 새로운 dl 요소 생성
        let choice = $(this).val();
        $('<dt>').prependTo(dlElement).text(choice);
        $('<dd>').appendTo(dlElement).text('+');
        let choice_value = parseFloat($(this).attr('data-value')); // 토핑의 가격
        $('<dd>').appendTo(dlElement).text(choice_value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원");

        $('.addlist').append(dlElement); // 생성된 dl 요소를 .addlist에 추가

        updateTotalPrice(); // 토핑 추가할 때마다 totalPrice 업데이트
      }
    } else {
      $(this).parent().removeClass('active2');

      // 토핑 제거할 때 해당 요소를 찾아 삭제
      let toppingName = $(this).val();
      $('.addlist dl').each(function () {
        if ($(this).find('dt').text() === toppingName) {
          $(this).remove(); // 해당 요소 제거
          return false; // each 반복문 종료
        }
      });

      updateTotalPrice(); // 토핑 제거할 때마다 totalPrice 업데이트
    }
  });





  // totalPrice를 업데이트하는 함수
  function updateTotalPrice() {
    let sizePrice = parseFloat($('input[name="size"]:checked').val()); // 선택된 사이즈의 가격
    let number = parseInt($('#result').text()); // 주문 수량
    let edge = parseFloat($('input[name="edge"]:checked').val());
    let totalPrice = (sizePrice + edge) * number; // 사이즈별 가격과 주문 수량을 곱하여 totalPrice 계산

    // 각 토핑의 가격을 가져와 totalPrice에 더함
    $('.addlist dl').each(function () {
      let toppingPrice = parseFloat($(this).find('dd:last-child').text().replace('원', '').replace(',', ''));
      totalPrice += toppingPrice;
    });

    $('#totalPrice').text(totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원");
  }

});

