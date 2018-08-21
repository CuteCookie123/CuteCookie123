$(document).ready(function(){
    $("#register").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(".register").show().siblings().hide();
    });
    $("#login").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(".login").show().siblings().hide();
    });
    $("#downApp").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(".download-app").show().siblings().hide();
    });
    $("#emailLogin").click(function(){
        $(this).hide();
        $("#phoneLogin").show();
        $("#telLogin-box").hide();
        $("#emailLogin-box").show();
    });
    $("#phoneLogin").click(function(){
        $(this).hide();
        $("#emailLogin").show();
        $("#emailLogin-box").hide();
        $("#telLogin-box").show();
    });

    var winHeight = $(document).scrollTop();

    $(window).scroll(function() {
        var scrollY = $(document).scrollTop();// 获取垂直滚动的距离，即滚动了多少

        if (scrollY > 800 && scrollY < 4500){ //如果滚动距离大于550px则隐藏，否则删除隐藏类
            $('.bottom-nav').fadeIn();
        }
        else {
            $('.bottom-nav').fadeOut();
        }

        // if (scrollY > winHeight){ //如果没滚动到顶部，删除显示类，否则添加显示类
        //     $('.bottom-nav').hide();
        // }
        // else {
        //     $('.bottom-nav').show();
        // }

    });
});
