$(function(){
    const hero = document.querySelector(".hero");
    const sr = document.querySelector(".sr");
    const logo = document.querySelector("#logo");
    const menu = document.querySelector(".menu");
    const headline = document.querySelector(".headline");

    const tl = gsap.timeline();

    tl.fromTo(hero, 1, { height: "0%" }, { height: "70%", ease: Power2.easeInOut })
    .fromTo(hero , 1.2, { width: "100%" }, { width: "80%", ease: Power2.easeInOut })

// .fromTo(slider, 1.2, { y: "-100%" }, { y:"0%", ease: Power2.easeInOut},"-=1.2" )
.fromTo(logo, 0.5, { opacity: 0, x: 30}, { opacity: 1, x: 0}, "-=0.5")
.fromTo(menu, 0.5, { opacity: 0, x: 30}, { opacity: 1, x: 0}, "-=0.5")
.fromTo(headline, 0.5, { opacity: 0, x: 0}, { opacity: 1, x: 30}, "-=0.5")
    $('fixed').addClass('noscroll');
    setTimeout(function(){
        $('fixed').removeClass('noscroll');
    },4000);

   $(window).scroll(function (){
       $('.anima').each(function(){
           var position = $(this).offset().top;
           var scroll = $(window).scrollTop();
           var windowHeight = $(window).height();
           if (scroll > position - windowHeight + 200){
            $(function(){
               $('.anima').each(function(i){
                   $(this).delay(i * 400).queue(function(){
                       $(this).addClass('active');
                   });
               });
           });
           }
       });
   });

   $(window).scroll(function (){
      $('.genre').each(function(){
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 200){
           $(function(){
              $('.genre').each(function(i){
                  $(this).delay(i * 800).queue(function(){
                      $(this).addClass('active');
                  });
              });
          });
          }
      });
  });

  $(document).ready(function(){
    $('.slider-nav').slick({
      asNavFor: '.slider',
      arrows: false,
    });
    $('.slider').slick({
      asNavFor: '.slider-nav',
      slidesToShow: 7,
      slidesToScroll: 1,
      centerMode: true,
      focusOnSelect: true,
      slide: 'img'
    });
  });

  

  function TextTypingAnime() {
	$('.TextTyping').each(function () {
		var elemPos = $(this).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		var thisChild = "";
		if (scroll >= elemPos - windowHeight) {
			thisChild = $(this).children(); //spanタグを取得
			//spanタグの要素の１つ１つ処理を追加
			thisChild.each(function (i) {
				var time = 150;
				//時差で表示する為にdelayを指定しその時間後にfadeInで表示させる
				$(this).delay(time * i).fadeIn(time);
			});
		} else {
			thisChild = $(this).children();
			thisChild.each(function () {
				$(this).stop(); //delay処理を止める
				$(this).css("display", "none"); //spanタグ非表示
			});
		}
	});
    }
    $(window).on('load', function () {
        //spanタグを追加する
        var element = $(".TextTyping");
        element.each(function () {
            var text = $(this).html();
            var textbox = "";
            text.split('').forEach(function (t) {
                if (t !== " ") {
                    textbox += '<span>' + t + '</span>';
                } else {
                    textbox += t;
                }
            });
            $(this).html(textbox);
    
    });
    TextTypingAnime();
    });

    $('.top').bgSwitcher({
        images:['img/tophaikei.png','img/tophaikei2.png',],
        interval:5000,
        loop:true,
    });

    $(window).scroll(function(){
        $('.fadein').each(function(){
          var targetEIement = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > targetEIement - windowHeight + 150) {
            $(this).addClass('scrollin');
          }
        });
      });

      $(window).scroll(function () {
        $('.fadein').each(function () {
          var targetEIement = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > targetEIement - windowHeight + 150) {
            $(this).addClass('scrollin');
          }
        });
      });
});

$(function(){
    VanillaTilt.init(document.querySelector(".card"), {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 1,
    });

    VanillaTilt.init(document.querySelector(".card2"), {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 1,
    });

    VanillaTilt.init(document.querySelector(".card3"), {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 1,
    });

    const container = document.querySelector(".container")
        for (var i = 0; i <= 50; i++) {
            const blocks = document.createElement("div");
            blocks.classList.add("block");
            container.appendChild(blocks)
        } 
        function animateBloks() {
            anime({
                targets: ".block",
                translateX: function() {
                    return anime.random(-800, 700)
                },
                translateY: function() {
                    return anime.random(-500,500)
                },
                scale: function() {
                    return anime.random(1,3.5)
                },
                duration: 3000,
                // delay: anime.stagger(15),
                complete: animateBloks,
            });
        }

        animateBloks();


});
