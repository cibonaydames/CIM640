// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(".wi-cloud").ready(function() {
                console.log("this moves");
//            $('.wi-cloud').animate({'margin-top': '300px', 'margin-left': '400px'},1000);
            $('.wi-cloud').animate({left: "+=2000"}, 3000);
        });

