var sliderNumber = 1;
var timeLine;

function initSlideNumber() {
    var $svg = $('.slide-no svg');
    var containerWidth = $(window).width();
    var containerHeight = $(window).height();

    $svg.attr({
        width: containerWidth,
        height: containerHeight
    });

    $svgText = $svg.find('text');
    var sTextWidth = $svgText.attr('width');
    var sTextHeight = $svgText.attr('height');

    $svgText.attr({
        x: ( containerWidth / 2 ) - ( sTextWidth / 2 ),
        y: ( containerHeight / 2 )
    });
}

function showSlideNumber(no) {
    $('.slide-no').addClass('is-visible');
    timeLine = new TimelineMax();
    var $slide = $('[data-slide="'+no+'"]');
    $('.slide').css({ zIndex: 0 });
    $slide.addClass('is-visible').css({ transform: 'translateY(100%)', zIndex: 2 });

    var $svg = $('.slide-no svg');
    var number = no.toString().length === 1 ? '0' + no.toString() : no.toString();
    $svg.find('text').css({ 'fill' : 'url(#slidebg-'+ no +')' }).html(number);

    timeLine.from($svg, 1, { transform: 'translateY(100px)', alpha: 0, ease: Expo.easeOut })
            .to($svg, 1, { transform: 'translateY(0)', alpha: 1, ease: Expo.easeOut })
            .to($svg, 1, { transform: 'translateY(-100px)', alpha: 0, ease: Expo.easeOut });

    timeLine.to($slide, 0.5, { transform: 'translateY(0)', ease: Expo.easeOut }, '-=0.8');
}

function startSlide(slideNo){
    slideNo = slideNo || sliderNumber;
    showSlideNumber(1);
}

jQuery(document).ready(function($) {
    initSlideNumber();
    // startSlide();

    // setTimeout(function(){ showSlideNumber(2); }, 5000);
    // setTimeout(function(){ showSlideNumber(3); }, 10000);
    // setTimeout(function(){ showSlideNumber(4); }, 15000);
});
