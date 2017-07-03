/**
 * Created by Administrator on 2017/6/30.
 */
$(function () {
    setCategoryTitle($('#category .row'));
    setCategory($('.category-content'));


    function setCategoryTitle(dom){
        Route.getcategorytitle(function (data) {
            console.log(data);
            var html = template('category-product',data);
            dom.html(html);


        });
        //$(dom).on('click', function() {
        //    $(this).parent().find('ul').toggleClass('hide');
        //})
    }

    function setCategory(titleid,dom){
        Route.getcategory(titleid,function(data){
            console.log(data);
            var html = template('category-product',data);
                dom.html(html);

            //setCategory( $(dom).find('.category-title > li > a') );
        })

    }


});