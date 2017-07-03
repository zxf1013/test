$(function(){
	setMenu($('#menu .row'));
	setMoneyctrl($('.product-list'));
	
	function setMenu(dom,callback){
		//设置最后四个
		var $lastFout;
		Route.getindexmenu(function(data){
			console.log(data);
			var html= template('menubox',data);
			dom.html(html);
			
			//添加完成后才能获取最后四个元素,并将最后四个隐藏
			$lastFout = $(dom).children('.menu-item:nth-last-child(-n+4)');
			$lastFout.addClass('hide');
			
			//more更多按钮,控制倒数四个显示隐藏
			menuMore($(dom).find('.menu-item:nth-child(8)')>a);
		});
		
		//控制倒数四个隐藏
		function menuMore(dom,callback){
			$(dom).on('click',function(){
				$lastFout.toggleClass('hide');
			})
		}
	}
	
	function setMoneyctrl(dom){
		Route.getmoneyctrl(function(data){
			console.log(data);
			var html = template('moneyCtrl',data);
			dom.html(html);
		})
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
})