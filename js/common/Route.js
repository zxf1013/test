/**
 * Created by Administrator on 2017/6/27.
 */
(function (window) {
    var Route={
       //请求地址
        baseUrl:'http://127.0.0.1:9090/',
        //首页菜单栏
        getindexmenu:getindexmenu,
        
        //省钱页面
        getmoneyctrl:getmoneyctrl,
        getmoneyctrlproduct:getmoneyctrlproduct,

        //比价大家电
        getcategorytitle:getcategorytitle,
        getcategory:getcategory,

 }       
        
        
        
        
        //首页菜单栏
        function getindexmenu(callback){
        	var url = Route.baseUrl+'api/getindexmenu';
        	$.get(url,function(res){
        		callback&&callback(res);
        	},'json');
        }
        //省钱控-最新优惠
        function getmoneyctrl(pageid,callback){
        	var url = Route.baseUrl+'api/getmoneyctrl';
        	$.get(url,{pageid:pageid},function(res) {
                callback && callback(res);
            },'json')
        }
        function getmoneyctrlproduct(productid,callback){
        	var url = Route.baseUrl+'api/getmoneyctrlproduct';
        	$.get(url,{productid:productid},function(res){
        		callback&&callback(res);
        	},'json')
        }

    //比价大家电
    function getcategorytitle(callback){
        var url = Route.baseUrl+'api/getcategorytitle';
        $.get(url, function (res) {
            callback&&callback(res);
        },'json');
    }

    function getcategory(titleid,callback){
        var url = Route.baseUrl+'api/getcategory';
        $.get(url,{titleid:titleid},function(res){
            callback&&callback(res);
        },'json');
    }
        
       
    window.Route=Route;
})(window);



