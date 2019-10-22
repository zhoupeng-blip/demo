$(function(){
	//菜单
	$("#ms_menu li").hover(function () {
		$(this).find("span").addClass("current");
		$(this).find(".submenu").show();
		
	},function () {
		$(this).find("span").removeClass("current");
		$(this).find(".submenu").hide();
	})
	
	//大轮播
	$("#boxAnimate").tyslide({
		boxh:430,//盒子的高度
		w:1000,//盒子的宽度
		h:400,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:20,//控制按钮宽度
		controlsH:20,//控制按钮高度
		radius:10,//控制按钮圆角度数
		controlsColor:"#ccc",//普通控制按钮的颜色
		controlsCurrentColor:"#f60",//当前控制按钮的颜色
		isNumber:true //是否需要数字
	});
	//电子书的tab滑动效果
	$(".ebook .title .left").hover(function(){
		$(".ebook .booklist").hide()
		$(".ebook .title .left").css({"background":"white","color":"#000000"})
		$(this).css({"background":"#ff6600","color":"white"});
		$($(".ebook .booklist")[$(this).index()]).show()
	})
	//电子书tab滑动效果里面的小轮播1
	$("#boxAnimate1").tyslide({
		boxh:215,//盒子的高度
		w:328,//盒子的宽度
		h:180,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:15,//控制按钮宽度
		controlsH:5,//控制按钮高度
		radius:0,//控制按钮圆角度数
		controlsColor:"#ccc",//普通控制按钮的颜色
		controlsCurrentColor:"#f60",//当前控制按钮的颜色
		isNumber:false //是否需要数字
	});
	//电子书tab滑动效果里面的小轮播2
	$("#boxAnimate2").tyslide({
		boxh:215,//盒子的高度
		w:328,//盒子的宽度
		h:180,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:15,//控制按钮宽度
		controlsH:5,//控制按钮高度
		radius:0,//控制按钮圆角度数
		controlsColor:"#ccc",//普通控制按钮的颜色
		controlsCurrentColor:"#f60",//当前控制按钮的颜色
		isNumber:false //是否需要数字
	});
	//电子书tab滑动效果里面的小轮播3
	$("#boxAnimate3").tyslide({
		boxh:215,//盒子的高度
		w:328,//盒子的宽度
		h:180,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:15,//控制按钮宽度
		controlsH:5,//控制按钮高度
		radius:0,//控制按钮圆角度数
		controlsColor:"#ccc",//普通控制按钮的颜色
		controlsCurrentColor:"#f60",//当前控制按钮的颜色
		isNumber:false //是否需要数字
	});
	//电子书右侧的动态效果
	$(".newbook li").mouseover(function(){
//		$(".newbook .cont .right li").find(".booknum").css("width","20px");
//		$(this).find(".booknum").css("width","280px");
		$(".newbook li").find(".bookname").show();
		$(this).find(".bookname").hide();
		$(".newbook li").find(".bookcont").hide();
		$(this).find(".bookcont").show();
		$(".newbook li").css("height","39px");
		$(this).css("height","150px")
	})
	
	
	//服装的tab效果
	$(".clothes .title li").hover(function(){
		$(".clothes .clocont").hide();
		$(".clothes .title li").removeClass();
		$(this).addClass("listhover");
		$($(".clothes .clocont")[$(this).index()]).show()
	})
	//服装tab效果里面里面的小轮播4
	$("#boxAnimate4").tyslide({
		boxh:340,//盒子的高度
		w:425,//盒子的宽度
		h:340,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:15,//控制按钮宽度
		controlsH:5,//控制按钮高度
		radius:0,//控制按钮圆角度数
		controlsColor:"#ccc",//普通控制按钮的颜色
		controlsCurrentColor:"#f60",//当前控制按钮的颜色
		isNumber:false //是否需要数字
	});
	//服装tab效果里面里面的小轮播5
	$("#boxAnimate5").tyslide({
		boxh:340,//盒子的高度
		w:425,//盒子的宽度
		h:340,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:15,//控制按钮宽度
		controlsH:5,//控制按钮高度
		radius:0,//控制按钮圆角度数
		controlsColor:"#ccc",//普通控制按钮的颜色
		controlsCurrentColor:"#f60",//当前控制按钮的颜色
		isNumber:false //是否需要数字
	});
	//服装tab效果里面里面的小轮播6
	$("#boxAnimate6").tyslide({
		boxh:340,//盒子的高度
		w:425,//盒子的宽度
		h:340,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:15,//控制按钮宽度
		controlsH:5,//控制按钮高度
		radius:0,//控制按钮圆角度数
		controlsColor:"#ccc",//普通控制按钮的颜色
		controlsCurrentColor:"#f60",//当前控制按钮的颜色
		isNumber:false //是否需要数字
	});
	
	
	//户外运动的tab效果
	$(".outdoors .title li").hover(function(){
		$(".outdoors .clocont").hide();
		$(".outdoors .title li").removeClass();
		$(this).addClass("listhover");
		$($(".outdoors .clocont")[$(this).index()]).show()
	})
	//户外运动tab效果里面里面的小轮播7
	$("#boxAnimate7").tyslide({
		boxh:340,//盒子的高度
		w:425,//盒子的宽度
		h:340,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:15,//控制按钮宽度
		controlsH:5,//控制按钮高度
		radius:0,//控制按钮圆角度数
		controlsColor:"#ccc",//普通控制按钮的颜色
		controlsCurrentColor:"#f60",//当前控制按钮的颜色
		isNumber:false //是否需要数字
	});
	//户外运动tab效果里面里面的小轮播8
	$("#boxAnimate8").tyslide({
		boxh:340,//盒子的高度
		w:425,//盒子的宽度
		h:340,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:15,//控制按钮宽度
		controlsH:5,//控制按钮高度
		radius:0,//控制按钮圆角度数
		controlsColor:"#ccc",//普通控制按钮的颜色
		controlsCurrentColor:"#f60",//当前控制按钮的颜色
		isNumber:false //是否需要数字
	});
	//户外运动tab效果里面里面的小轮播9
	$("#boxAnimate9").tyslide({
		boxh:340,//盒子的高度
		w:425,//盒子的宽度
		h:340,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:15,//控制按钮宽度
		controlsH:5,//控制按钮高度
		radius:0,//控制按钮圆角度数
		controlsColor:"#ccc",//普通控制按钮的颜色
		controlsCurrentColor:"#f60",//当前控制按钮的颜色
		isNumber:false //是否需要数字
	});
	
	
	//童装的tab效果
	$(".kids .title li").hover(function(){
		$(".kids .clocont").hide();
		$(".kids .title li").removeClass();
		$(this).addClass("listhover");
		$($(".kids .clocont")[$(this).index()]).show()
	})
	//童装tab效果里面里面的小轮播10
	$("#boxAnimate10").tyslide({
		boxh:340,//盒子的高度
		w:425,//盒子的宽度
		h:340,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:15,//控制按钮宽度
		controlsH:5,//控制按钮高度
		radius:0,//控制按钮圆角度数
		controlsColor:"#ccc",//普通控制按钮的颜色
		controlsCurrentColor:"#f60",//当前控制按钮的颜色
		isNumber:false //是否需要数字
	});
	//户外运动tab效果里面里面的小轮播11
	$("#boxAnimate11").tyslide({
		boxh:340,//盒子的高度
		w:425,//盒子的宽度
		h:340,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:15,//控制按钮宽度
		controlsH:5,//控制按钮高度
		radius:0,//控制按钮圆角度数
		controlsColor:"#ccc",//普通控制按钮的颜色
		controlsCurrentColor:"#f60",//当前控制按钮的颜色
		isNumber:false //是否需要数字
	});
	//户外运动tab效果里面里面的小轮播12
	$("#boxAnimate12").tyslide({
		boxh:340,//盒子的高度
		w:425,//盒子的宽度
		h:340,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:15,//控制按钮宽度
		controlsH:5,//控制按钮高度
		radius:0,//控制按钮圆角度数
		controlsColor:"#ccc",//普通控制按钮的颜色
		controlsCurrentColor:"#f60",//当前控制按钮的颜色
		isNumber:false //是否需要数字
	});
	
	
	//推广商品的hover效果
	$(".promote .shoplist li").mouseover(function(){
		$(".promote .shoplist li").removeClass("listhover")
		$(this).addClass("listhover")
	})
	//滚动条显示侧边栏，和顶部搜索 框
	$(document).scroll(function () {
		var atop = $("html,body").scrollTop();
		if (atop > 300) {
			$("#louceng").fadeIn(500);
			//搜索框， 显示样式
			$(".fixedsearch").slideDown();
			//移出xxxx保留自身,方式1
			var fixed = $("#serchfixed").remove();
			$(".fixedsearch").append(fixed);
			//方式2
			//$(".fixedsearch").append($("#serchfixed"));
		}else{
			$("#louceng").fadeOut(500);
			//搜索框，方式1
			var fixed = $("#serchfixed").remove();
			$(".shopcar").after(fixed);
			//方式2
			//$(".shopcar").after($("#serchfixed"));
			//隐藏搜索框样式
			$(".fixedsearch").slideUp();
		}
	})
	

	//楼层效果
	var arrcolor = ["#93D470","#F55727","#B99DEA","#FF7495","#C3EC52","#f0f"]
	$("#louceng li").hover(function () {
		var index = $(this).index();
		//鼠标移入背景颜色改变
		$(this).css("background-color",arrcolor[index]);
		$(this).css("background-position-x","-40px");
		//宽度变大
		$(this).stop(true).animate({"width":"40px"},100)
	},function () {
		$(this).css("background-color","#f2f2f2");
		$(this).css("background-position-x","0px");
		$(this).stop(true).animate({"width":"0px"},100)
	})
	
	//点击楼层按钮跳转到对应楼层
	$("#louceng li:not(:last)").on("click",function () {
		var index = $(this).index();
		var loutitop = $(".louti").eq(index).offset().top;
		$("html,body").stop(true,true).animate({"scrollTop":loutitop},1000);
		console.log(loutitop)
	})
	$("#louceng li:last").on("click",function () {
		$("html,body").stop(true,true).animate({"scrollTop":0},300)
	})
	

	//领券中心  
	$(".relac").hover(function () {
		$(".qrcode").stop(true,true).animate({"right":"39px"},200)
	},function () {
		$(".qrcode").stop(true,true).animate({"right":"-100px"},200)
	})
		
		
		
		
	
	
})