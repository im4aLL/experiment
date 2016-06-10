
jQuery(document).ready(function($) {
    var totalSlide = 20;
    var counter = 1;

    var $numberOne = $('.loading-counter-no:eq(0)');
    var $numberTwo = $('.loading-counter-no:eq(1)');


    function counterHandler() {
        counter = counter + ( Math.floor(Math.random() * (4 - 1)) + 1 );
        if( counter > totalSlide ) {
            counter = 1;
        }

        var tempCounter = counter;
        var tempCounterArray = tempCounter.toString().split('');

        if( counter > 9 ) {
            $numberOne.html(tempCounterArray[0]);
            $numberTwo.html(tempCounterArray[1]);
        }
        else {
            $numberOne.html('0');
            $numberTwo.html(tempCounterArray[0]);
        }

        $('.loading-counter-bar-progress').css('width', ((counter * 100) / totalSlide) + '%');
    }

    var timeLine = new TimelineMax({ repeat: -1, onRepeat: counterHandler });
    timeLine.from($numberOne, 0.5, { transform: 'translateY(200px)', ease: Expo.easeOut })
            .from($numberTwo, 0.25, { transform: 'translateY(200px)', ease: Expo.easeOut }, '-=0.25')
            .to($numberOne, 0.5, { transform: 'translateY(-200px)', ease: Expo.easeOut }, '+=0.5')
            .to($numberTwo, 0.25, { transform: 'translateY(-200px)', ease: Expo.easeOut }, '-=0.6');

});
