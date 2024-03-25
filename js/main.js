$(function () {
    //#gnb
$('#gnb>li').mouseenter(function() {
    $(this).children().css({
        'display':'flex', 'gap': '40px'
    });
    $('#header .gnb_bg').show();
})
$('#gnb>li').mouseleave(function() {
    $(this).children('ul, .dep2_wrap').hide();
    $('#header .gnb_bg').hide();
})
//검색폼
$('.btn_search_open').click(function() {
    $('.search_wrap').show()
})
$('.btn_search_close').click(function() {
    $('.search_wrap').hide()
})
//전체메뉴
$('.btn_allmenu_open').click(function() {
    $('.allmenu_wrap').show();
    $('html').css('overflow','hidden')
})
$('.btn_allmenu_close').click(function() {
    $('.allmenu_wrap').hide();
    $('html').css('overflow','auto')
})
//전체메뉴 모바일 버전
$('.allmenu_list>li>a').click(function() {
    $(this).addClass('active');
    $('.allmenu_list>li>a').not(this).removeClass('active')
})
$('.allmenu_product .dep2>li>a').click(function() {
    $(this).addClass('active');
    $('.allmenu_product .dep2>li>a').not(this).removeClass('active')
})
$('.family_site_box button').click(function () {
    $(this).next().toggle();
})
//고객사이야기 swiper
const customerSwiper = new Swiper('.swiper', {
    // Optional parameters
    //direction: 'horizontal', //디폴트
    autoplay: {
        delay : 2000,
    },
    loop: true,
    spaceBetween: 40,
    slidesPerView: 1,
    breakpoints: {
        768 : {
            slidesPerView : 2
        }
    },
    // If we need pagination
    pagination: {
        el: '.dot_btns',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.next_btn',
        prevEl: '.prev_btn',
    },
});
}) //ready()