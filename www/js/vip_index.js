$(function(){
	$(".vipprice .list ul").mouseover(function(){
		console.log(111)
		$(".vipprice .list ul").find(".car").hide();
		$(this).find(".car").show()
	})
	
	
	
	
	
	
	//配置轮播的参数
	$("#boxAnimate1").tyslide({
		boxh:475,//盒子的高度
		w:734,//盒子的宽度
		h:475,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:20,//控制按钮宽度
		controlsH:20,//控制按钮高度
		radius:10,//控制按钮圆角度数
		controlsColor:"#ccc",//普通控制按钮的颜色
		controlsCurrentColor:"#f60",//当前控制按钮的颜色
		isNumber:false //是否需要数字
	});
	

	
})