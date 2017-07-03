$(function(){
	setMoneyCtrlProduct($('.money-ctrl'),$.getUrlParam('pageid')|| 1);
	
	function setMoneyCtrlProduct(dom,pageid,callback){
		
		//用户看到的是从第一页开始的,其实是从第0页开始的,所以pageid-1
		Route.getmoneyctrl(pageid-1,function(data){
			console.log(data);
			data.pageCount = Math.floor(data.totalCount / data.pagesize);
			data.pageid = pageid || 1;
			data.page = [];
			
			for(var i = 0; i<data.pageCount;i++){
				data.page.push({'pageid':i,'pageCount':data.pageCount});
			}
			var html = template('moneyCtrl',data);
			dom.html(html);
			
			$('#selectPage').on('change',function(e){
				window.location.href='moneyctrl.html?product='+$(this).val();
				$(this).attr('selected',"selected");
			})
		})
	}
});
