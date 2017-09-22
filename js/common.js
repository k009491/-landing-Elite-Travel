$(document).ready(function(){
    $('.slider').slick({
        adaptiveHeight: true,
        autoplay: true,
        dots: true
    });
    $('.main-menu__button').click(function(){
        $(this).children('.fa').toggleClass('fa-bars').toggleClass('fa-times');
        $('.main-menu').toggleClass('active');
        $('.main-menu__list').slideToggle();
    });
    $(window).on('resize', function(){
        if($(window).outerWidth() >= 700 ){
            $('.main-menu__list').css('display','block');
        }
        else {
            $('.main-menu__button .fa').addClass('fa-bars').removeClass('fa-times');
            $('.main-menu__list').css('display','none');
            $('.main-menu').removeClass('active');
        }
    });
    $('.about-tours__button').click(function(){
        $(this).text(function(i, text){
            return text === "Подробнее" ? "Скрыть подробности" : "Подробнее";
        });
        $('.about-tours__text').toggleClass('full');
    });
    $(window).on('load resize', function(){
        var maxHeight = $('.tour-list__image').height();
        $(".tour-list__date").height(maxHeight);
    });
    $(window).on('load resize', function(){
        var maxHeight = $('.news__image').height();
        $(".news__description").height(maxHeight);
    });
});
