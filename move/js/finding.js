$(function () {
    var $category = $('ul li:gt(3)');
    $category.hide();
    var $toggleBtn  = $('.toggle-btn');
    $toggleBtn.click(function () {
        if ($category.is(":visible")){
            $category.hide();
        }else{
            $category.show();
        }
        return false;
    })
})
