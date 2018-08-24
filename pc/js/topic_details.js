/*点击参与话题*/
$(function () {
    var $div_li = $("div.participate_subject>a");
    $div_li.click(function () {       //定义了对应的单击事件，也就是类别的单击事件。
        $("div.layer").toggleClass("layer_hover")
    });
});
/*点击切换最新和最热*/
$(function () {
    var $div_li = $("div.topic_header_bottom ul>li");
    $div_li.click(function () {       //定义了对应的单击事件，也就是类别的单击事件。
        $(this).addClass("newlist")
            .siblings().removeClass("newlist");
        var index = $div_li.index(this);
        $("div.topic_left_con>div").eq(index).show()
            .siblings().hide();

    });
});