// Hero Slider Carousel Start
$('.heroslider-content').owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    autoplay: true,
    slideSpeed: 2000,
    dots: false,
});
// Hero Slider Carousel end
// Hero Slider Carousel Start
$('.heroflash-product').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    slideSpeed: 2000,
    dots: true,
});
// Hero Slider Carousel end
// Hero Slider Carousel Start
$('.product-panel-banner--div').owlCarousel({
    items: 1,
    margin: 0,
    autoplay: false,
    dots: false,
    nav: true,
});
// Hero Slider Carousel end
// Top Shops Carousel Start
$('.top-shop').owlCarousel({
    items: 5,
    loop: true,
    nav: false,
    autoplay: true,
    slideSpeed: 1000,
    dots: false,
    responsive: {
        0: {
            items: 2,
            margin: 0,
        },
        480: {
            items: 3,
        },
        768: {
            items: 4,
        },
        992: {
            items: 5,
        },
    },
});
// Hero Slider Carousel end
// Top Brand Carousel Start
$('.topbrand-carousel').owlCarousel({
    items: 5,
    loop: true,
    // nav: true,
    autoplay: true,
    slideSpeed: 1000,
    dots: false,
});
// Top Brand Carousel end
// START Open Hide Sidebar JS
var nav = document.getElementsByTagName('nav')[0];
var burger = document.getElementsByClassName('side-nav__hamburger')[0];

burger.addEventListener('click', clicked);
var j = 0;
function clicked() {
    if (j === 0) {
        nav.style = 'left:0';
        j++;
    } else {
        nav.style = 'left:-270px';
        j--;
    }
}
// END Open Hide Sidebar JS

// START Sidebar Menu JS
$(function () {
    var $ul = $('.sidebar-navigation > ul');

    $ul.find('li a').click(function (e) {
        var $li = $(this).parent();

        if ($li.find('ul').length > 0) {
            e.preventDefault();

            if ($li.hasClass('selected')) {
                $li.removeClass('selected').find('li').removeClass('selected');
                $li.find('ul').slideUp(400);
                $li.find('a em').removeClass('mdi-flip-v');
            } else {
                if ($li.parents('li.selected').length == 0) {
                    $ul.find('li').removeClass('selected');
                    $ul.find('ul').slideUp(400);
                    $ul.find('li a em').removeClass('mdi-flip-v');
                } else {
                    $li.parent().find('li').removeClass('selected');
                    $li.parent().find('> li ul').slideUp(400);
                    $li.parent().find('> li a em').removeClass('mdi-flip-v');
                }

                $li.addClass('selected');
                $li.find('>ul').slideDown(400);
                $li.find('>a>em').addClass('mdi-flip-v');
            }
        }
    });

    $('.sidebar-navigation > ul ul').each(function (i) {
        if ($(this).find('>li>ul').length > 0) {
            var paddingLeft = $(this).parent().parent().find('>li>a').css('padding-left');
            var pIntPLeft = parseInt(paddingLeft);
            var result = pIntPLeft + 20;

            $(this).find('>li>a').css('padding-left', result);
        } else {
            var paddingLeft = $(this).parent().parent().find('>li>a').css('padding-left');
            var pIntPLeft = parseInt(paddingLeft);
            var result = pIntPLeft + 20;

            $(this).find('>li>a').css('padding-left', result).parent().addClass('selected--last');
        }
    });

    var t = ' li > ul ';
    for (var i = 1; i <= 10; i++) {
        $('.sidebar-navigation > ul > ' + t.repeat(i)).addClass('subMenuColor' + i);
    }

    var activeLi = $('li.selected');
    if (activeLi.length) {
        opener(activeLi);
    }

    function opener(li) {
        var ul = li.closest('ul');
        if (ul.length) {
            li.addClass('selected');
            ul.addClass('open');
            li.find('>a>em').addClass('mdi-flip-v');

            if (ul.closest('li').length) {
                opener(ul.closest('li'));
            } else {
                return false;
            }
        }
    }
});
// end Sidebar Menu JS
