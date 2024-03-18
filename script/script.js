$(function(){
    // 슬라이드
    let currentIndex = 0;
    $(".sliderWrap").append($(".slider").first().clone(true));

    setInterval(function(){ 
        currentIndex++;
        $(".sliderWrap").animate({marginLeft: -currentIndex * 100 + "%"}, 600);

        if(currentIndex == 3){
            setTimeout(function(){  
                $(".sliderWrap").animate({marginLeft: 0}, 0);
                currentIndex = 0;
            }, 700);
        }
    }, 3000);

    //햄버거 메뉴
    const toggleBtn = document.querySelector('.hamburger-button');
    const menu = document.querySelector('.nav_menu');

    toggleBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
    });





    //하트
    $(function () {
        let num = 0; //이미지 처음값을 0으로 지정
        $(".list_box .heart img").click(function () { //하트이미지 클릭시 할일
            if (num == 0) { //이미지 2개를 바꾸는 개수(num) 로 처음 이미지는 0
                $(this).attr("src", "./img/icon/heart.png"); //처음 이미지 파일 경로 지정
                num = 1; //클릭을 하면 이미지가 바뀌기에 0은 1로 바뀜
            } else {
                $(this).attr("src", "./img/icon/heart01.png"); //이미지 바꿔지고
                num = 0; //개수도 바뀜
            }
        });
    });

    $("a").click(function() {

         if ($(this).attr("href") == "#") {
        
         return false;
        
        }
        
         });
       
    


});