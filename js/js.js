//ad
$(function(){
    //Swiper
    var swiper = new Swiper('.swiper', {
        autoHeight: true,
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
    });
})
//aside
$(function(){
    $("aside .app").click(function(){
        $(".app ul")
        .toggleClass("active");
    })
    $("aside .cs24hr").click(function(){
        $(".cs24hr ul")
        .toggleClass("active");
    })
})