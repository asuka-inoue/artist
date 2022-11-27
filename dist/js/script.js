
jQuery(function ($) {
  
  // ページトップボタン
  var topBtn = $('.js-pagetop');
  topBtn.hide();

  // ページトップボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ページトップボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動。ヘッダーの高さ考慮。)
  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });

  // スライダー
  let mySwiper = new Swiper ('.js-disco-swiper', {
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    // デフォルトの設定
    slidesPerView: 1.4,
    // spaceBetween: 10,
    centeredSlides : true,  //アクティブなスライドを中央に表示
    
      // レスポンシブブレーポイント（画面幅による設定）
    breakpoints: {
      // 画面幅が 768px 以上の場合（window width >= 768px）
      768: {
        slidesPerView: 3,
      },
    },

  });

  // ハンバーガーメニュー
  $('.js-hamburger').click(function() {
    $(this).toggleClass('is-active');
    if($(this).hasClass('is-active')){
      $('.js-drawer').fadeIn();
    }else{
      $('.js-drawer').fadeOut();
    }
  });

  $(".js-drawer a").click(function () {
    $('.js-hamburger').trigger('click');
  });


});
