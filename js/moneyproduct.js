$(function(){
	setProductList($('.money-product'),$.getUrlParam('productid'));
	
	function setProductList(dom,productid){
		Route.getmoneyctrlproduct(productid,function(data){
			console.log(data);
			var html = template('moneyproduct',data);
			dom.html(html);
		})
	}
})
