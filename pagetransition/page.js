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

    console.log(sTextWidth);
    console.log(sTextHeight);

    $svgText.attr({
        x: ( containerWidth / 2 ) - ( sTextWidth / 2 ),
        y: ( containerHeight / 2 )
    });
}

jQuery(document).ready(function($) {
    
    initSlideNumber();

});
