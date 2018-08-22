$(function () {
    var $div_li = $("div.topic-body-nav ul>li");
    $div_li.click(function () {       //定义了tan_menu对应的单击事件，也就是类别的单击事件。
        $(this).addClass("selected")
            .siblings().removeClass("selected");
    });
});