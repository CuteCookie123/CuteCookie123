$(function(){
    $('.samebottomimg').hover(function(){
        $('.samebottomimg').attr('src','../images/lixin2.png');
    });
    $('.samebottomimg').mouseleave(function(){
        $('.samebottomimg').attr('src','../images/lixin1.png');
    });
    var i=0;
    var number = parseInt($('#number').text());
    $('.samebottomimg').click(function(){
        console.log(number);
        console.log(typeof(number));
        if(i%2==0){
            $('.samebottomimg').attr('src','../images/lixin3.png');
            number=number+1;
            $('#number').text(number);
        }
        else{
            $('.samebottomimg').attr('src','../images/lixin2.png');
            number=number-1;
            $('#number').text(number);
        }
        i++;


    });

    $('.sameButton1').click(function(){
        $('.sameButton2').css('display','block');
        $('.sameButton1').css('display','none');
        $('#middle-top1').slideDown(1000);
        setTimeout(function(){
            $('#middle-top1').slideUp(1000)
        },3000);
    });
    $('.sameButton2').click(function(){
        $('.sameButton1').css('display','block');
        $('.sameButton2').css('display','none');
        $('#middle-top2').slideDown(1000);
        setTimeout(function(){
            $('#middle-top2').slideUp(1000)
        },3000);
    });
});