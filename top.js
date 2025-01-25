$(function(){
        setInterval(function(){
            $('.blinking').fadeOut(500,function(){$(this).fadeIn(500)});
        },1500);

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
            
    $(window).on('load',function(){	//画面遷移時にギャラリーの画像が被らないように、すべての読み込みが終わった後に実行する

        //＝＝＝Muuriギャラリープラグイン設定
        var grid = new Muuri('.grid', {
        
        //アイテムの表示速度※オプション。入れなくても動作します
        showDuration: 600,
        showEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        hideDuration: 600,
        hideEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            
        // アイテムの表示/非表示状態のスタイル※オプション。入れなくても動作します
          visibleStyles: {
            opacity: '1',
            transform: 'scale(1)'
          },
          hiddenStyles: {
            opacity: '0',
            transform: 'scale(0.5)'
          }    
        });
        
        //＝＝＝並び替えボタン設定
        $('.sort-btn li').on('click',function(){			//並び替えボタンをクリックしたら
            $(".sort-btn .active").removeClass("active");	//並び替えボタンに付与されているactiveクラスを全て取り除き
            var className = $(this).attr("class");			//クラス名を取得
            className = className.split(' ');				//「sortXX active」のクラス名を分割して配列にする
            $("."+className[0]).addClass("active");			//並び替えボタンに付与されているクラス名とギャラリー内のリストのクラス名が同じボタンにactiveクラスを付与
            if(className[0] == "sort00"){						//クラス名がsort00（全て）のボタンの場合は、
                 grid.show('');								//全ての要素を出す
            }else{											//それ以外の場合は
                grid.filter("."+className[0]); 				//フィルターを実行
            }
        });
        
        //＝＝＝ Fancyboxの設定
        $('[data-fancybox]').fancybox({
         thumbs: {
            autoStart: true, //グループのサムネイル一覧をデフォルトで出す。不必要であればfalseに
          },	
        });
            
        });
    
    });
