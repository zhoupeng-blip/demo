//点击显示隐藏
	$(".logintitle li").click(function () {
		var index = $(this).index();
		$(this).addClass("current").siblings().removeClass("current");
		if(index == 0){
			$(".codelogin").show();
			$(".userlogin").hide();
		}else{
			$(".codelogin").hide();
			$(".userlogin").show();
		}
	})
	//鼠标移入二维码，显示手机效果
	$(".eqCodeShow").hover(function () {
		$(this).stop(true,true).animate({"left":'30px'},300,function () {
			$(".phone").fadeIn(40);
		});
	},function () {
		var _this = this;
		$(".phone").stop(true,true).fadeOut(40,function () {
			$(_this).animate({"left":'85px'},300);
		});
	})
	username.oninput=function(){
		del.style.display="block";
		if(username.value==""){
			del.style.display="none";
		}
	}
	
	
	
	del.onclick=function(){
		username.value="";
		del.style.display="none";
	}
	







