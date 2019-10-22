$(function(){
	
	$(".bankcard .payway").click(function(){
		$(".bankcard .payway").removeClass("spanhover");
		$(this).addClass("spanhover");
		$(".bankcard .payway").children(".gou").hide();
		$(this).children(".gou").show();
	})

	//单击“立即支付”，支付成功
	$("#immediately").click(function(){
		layui.use('layer', function(){
			var layer = layui.layer;
			var index = layer.open({
				type: 1, 
				title:"支付结果",
				area: ['470px', '277px'],
				content: '<div class="box"><span class="mr20"><img src="img/weixiaolian.jpg" /></span><span class="f24 c_666">支付完成</span><div class="c_bf ml60 f24 mt15">已完成支付</div><button id="tanchubtn3" class="f24 mt30 ml55">确认</button></div>' 																								
			});
			//点击确认，关闭窗口
			$("#tanchubtn3").click(function(){
				layer.close(index)
			})
			
		}); 
		layui.use('layer', function(){
			var layer = layui.layer;
			var index = layer.open({
				type: 1, 
				title:"支付结果",
				area: ['470px', '277px'],
				content: '<div class="box"><span class="mr20"><img src="img/shibai.jpg" /></span><span class="f24 c_666">支付失败！</span><div class="c_bf ml60 f24 mt15">该支付余额不足</div><button id="tanchubtn4" class="f24 mt30 ml55">确认</button></div>' 																								
			});
			
			//点击确认，关闭窗口
			$("#tanchubtn4").click(function(){
				layer.close(index)
			})
		}); 
	})
})
