$(function () {
    //配置轮播的参数
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
	})
	//热卖畅销榜
	$(".seller .booklist li").mouseover(function(){
		$(".seller .booklist li").find(".bookname").show()
		$(".seller .booklist li").removeClass("listhover");
		$(this).addClass("listhover");
		
		$(".seller .booklist li").find(".bookcont").hide()
		$(this).find(".bookcont").show();
		$(this).find(".bookname").hide();
	})
	
	
	//图书折扣区
	$(".discount .list ul").mouseover(function(){
		$(".discount .list ul").removeClass("ulhover");
		$(this).addClass("ulhover")
	})
	
	//新书上架
	$(".newbook .cont .right li").mouseover(function(){
//		$(".newbook .cont .right li").find(".booknum").css("width","20px");
//		$(this).find(".booknum").css("width","280px");
		$(".newbook .cont .right li").find(".bookname").show();
		$(this).find(".bookname").hide();
		$(".newbook .cont .right li").find(".bookcont").hide();
		$(this).find(".bookcont").show();
		$(".newbook .cont .right li").css("height","39px");
		$(this).css("height","170px")
	})
	
	//独家提供
	$(".provision .title li").mouseover(function(){
		$(".provision .title li").removeClass("lihover");
		$(this).addClass("lihover");
		var index = $(this).index();
		$(".provision .procon").hide();
		$($(".provision .procon")[index]).show();
		$(".provision .page span").removeClass("spanhover");
		$($(".provision .page span")[index]).addClass("spanhover")
	})
	//换一批
	var num = 0;
	$(".guess #exchange").click(function(){
		num++;
		var index = num%2;
		$(".guess .cont").hide();
		$($(".guess .cont")[index]).show();
	})
	
	
});