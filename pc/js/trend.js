$(function(){
    $('.samebottomimg').hover(function(){
        $('.samebottomimg').attr('src','../images/lixin2.png');
    });
    $('.samebottomimg').mouseleave(function(){
        $('.samebottomimg').attr('src','../images/lixin1.png');
    });
    console.log($('.samebottomimg'));
    var i=0;
    var number = $('.number').text();
    console.log(number);
    $('.samebottomimg').click(function(){
        if(i%2==0){
            $('.samebottomimg').attr('src','../images/lixin3.png');
            number=number+1;
            // $('.number').text(number);
        }
        else{
            $('.samebottomimg').attr('src','../images/lixin2.png');
            number=number-1;
            // $('.number').text(number);
        }
        i++;
    });
    $('.sameButton1').click(function(){
        $('.sameButton2').show();
        $('.sameButton1').hide();
        $('#middle-top1').slideDown(500);
        setTimeout(function(){
            $('#middle-top1').slideUp(500)
        },3000);
    });
    $('.sameButton2').click(function(){
        $('.sameButton1').show();
        $('.sameButton2').hide();
        $('#middle-top2').slideDown(500);
        setTimeout(function(){
            $('#middle-top2').slideUp(500)
        },3000);
    });
});