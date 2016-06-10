var counter = 2;
var progressInterval;
var counterInterval;
    
counterInterval = setInterval(function(){
    $('.loading__content__counter').toggleClass('out');
    
    if( $('.loading__content__counter').hasClass('out') ) {
        setTimeout(function(){
            var temp = counter;
            temp = temp.toString();
            var tempArray = temp.split('');
            if(tempArray[1]) {
                $('.loading__content__counter:eq(0)').html(tempArray[0]);
                $('.loading__content__counter:eq(1)').html(tempArray[1]);
            }
            else {
                $('.loading__content__counter:eq(0)').html('0');
                $('.loading__content__counter:eq(1)').html(tempArray[0]);
            }

            counter = counter + ( Math.floor(Math.random() * (15 - 1)) + 1 );
            progressLoadIndicator();

            if(counter > 100) {
                counter = 1;
            }

        }, 1000);
    }
}, 1200);


function progressLoadIndicator(){
    clearInterval(progressInterval);

    var i = counter;
    $('.loading__content__indicator__progress').css('width', i + '%');

    progressInterval = setInterval(function(){
        $('.loading__content__indicator__progress').css('width', i + '%');
        i = i + 1;
    }, 600);
}


// setTimeout(function(){
//     clearInterval(progressInterval);
//     clearInterval(counterInterval);

//     $('.loading__content__counter').removeClass('out');
//     $('.loading__content__indicator__progress').css('width', '100%');

//     var i = counter;
//     var t;

//     t = setInterval(function(){
//         var n = i.toString();
//         n = n.split('');

//         $('.loading__content__counter:eq(0)').html(n[0]);
//         $('.loading__content__counter:eq(1)').html(n[1]);

//         i++;
//         if( i >= 100 ) {
//             clearInterval(t);
//         }
//     }, 40);
    
// }, 10000);
