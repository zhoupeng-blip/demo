 $(document).ready(function(){
 	
 	//选择类型
 	$(".book .right .choicetype .type").click(function(){
  		$(".book .right .choicetype .type").removeClass("cli");
  		$(this).addClass("cli");
  		$(".book .right .choicetype .type").find(".gou").css("display","none");
  		$(this).find(".gou").css("display","block")
	})
 	
 	//加减数量
	$("#jia").click(function(){
		var a = $("#booknum").text()
		var num = parseInt(a);
		num++;
		$("#booknum").text(num);
	})
 	$("#jian").click(function(){
		var a = $("#booknum").text()
		var num = parseInt(a);
		if(num>1){
			num--;
			$("#booknum").text(num);
		}
	})
 	
 	
 	//人气单品
 	$(".popularity .popucont ul").mouseover(function(){
 		$(".popularity .popucont ul").removeClass("ulhover");
 		$(this).addClass("ulhover")
 	})
 	
 	
 	//tab滑动效果
 	$(".commodity .titlelist span").mouseover(function(){
 		$(".commodity .titlelist span").removeClass("spanhover");
 		$(this).addClass("spanhover");
 		var index = $(this).index();
 		$(".commodity .shop .shopcont").hide();
		$($(".commodity .shop .shopcont")[index]).show();
 	})
 	
 	
 	//点击变色.commodity .shop .comment .comtype span
 	$(".commodity .shop .comtype span").click(function(){
 		$(".commodity .shop .comtype span").removeClass("spancli");
 		$(this).addClass("spancli");
 	})
 
 	$(document).ready(function(){
	  var showproduct = {
		  "boxid":"showbox",
		  "sumid":"showsum",
		  "boxw":250,//宽度,该版本中请把宽高填写成一样
		  "boxh":350,//高度,该版本中请把宽高填写成一样
		  "sumw":60,//列表每个宽度,该版本中请把宽高填写成一样
		  "sumh":60,//列表每个高度,该版本中请把宽高填写成一样
		  "sumi":10,//列表间隔
		  "sums":4,//列表显示个数
		  "sumsel":"sel",
		  "sumborder":1,//列表边框，没有边框填写0，边框在css中修改
		  "lastid":"showlast",
		  "nextid":"shownext"
		  };//参数定义	  
	 $.ljsGlasses.pcGlasses(showproduct);//方法调用，务必在加载完后执行
  });
 	
 	
 	
 	
 	
 	
 	
 	
 	
 	
 	
  });