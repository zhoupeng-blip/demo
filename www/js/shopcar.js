/*
点击 "+" 数量跟随变化，小计跟随变化
点击 "-" 数量跟随变化，小计跟随变化
输入框中输入数字，数量变化，小计跟随变化
选中商品，总价发生变化，显示选中几件商品
加载页面商品总数就要显示出来
*/

//点击 "+" 数量跟随变化，小计跟随变化
$(function () {
	totalnumprice()
})
//加    按钮点击的时候
$(".plus").click(function () {
	//获取的是原始的数量
	var num = parseInt($(this).prev().val());
	num++;
	//从新设置输入框的数量
	$(this).prev().val(num);
	//获取单价
	var price = parseFloat($(this).parent().prev().text())
	//从新获取数量
	var newnum = parseInt($(this).prev().val());
	var xiaoji = price*newnum;
	$(this).parent().next().text(xiaoji.toFixed(2))
	
	totalnumprice()
})
//减   按钮点击的时候
$(".reduce").click(function () {
	var num = parseInt($(this).next().val());
	num--;
	if (num > 0) {
		$(this).next().val(num);
	}
	//获取单价
	var price = parseFloat($(this).parent().prev().text())
	//从新获取数量
	var newnum = parseInt($(this).next().val());
	var xiaoji = price*newnum;
	$(this).parent().next().text(xiaoji.toFixed(2))
	totalnumprice()
})
//输入数量的时候
$(".singlenum").keyup(function () {
	var num = $(this).val();
	if (num > 0) {
		//获取单价
		var price = parseFloat($(this).parent().prev().text())
		//从新获取数量
		var newnum = parseInt($(this).val());
		var xiaoji = price*newnum;
		$(this).parent().next().text(xiaoji.toFixed(2))
	}else if (num == "") {
		$(this).val(0);
		$(this).parent().next().text("00.00")
	}else if(num <0){
		$(this).val(0);
		$(this).parent().next().text("00.00")
	}else{
		$(this).val(0);
		$(this).parent().next().text("00.00")
	}
	totalnumprice()
})
$(".singlenum").keydown(function () {
	var num = $(this).val();
	if (num == 0) {
		$(this).val("");
	}
	totalnumprice()
})
//全选
$(".allcheck").click(function () {
	$(".allcheck").prop("checked",$(this).prop("checked"));
	$(".ischeck").prop("checked",$(this).prop("checked"));
	totalnumprice()
})
$(".ischeck").click(function () {
	totalnumprice()
})

//删除单个商品
$(".del").click(function(){
	$(this).parent().parent().remove();
	totalnumprice();
})
//删除选中的所有商品
$(".delall").click(function(){
	$(".singleshop").each(function () {
		//是否选中
		var ischecked = $(this).find(".ischeck").prop("checked");
		if(ischecked){
			$(this).remove()
		}

	})
	totalnumprice();
})

//点击结算跳转到payment页面
$("#gopay").click(function(){
	 window.location.href="payment.html";
})





function totalnumprice() {
	var allshopnum = 0;//全部商品
	var checknum = 0;//选中几件
	var totalprice = 0;//总价
	$(".singleshop").each(function () {
		//全部商品数量
		allshopnum ++;
		//是否选中
		var ischecked = $(this).find(".ischeck").prop("checked");
		if (ischecked) {
			checknum++;
			//获取小计的值
			var xiaoji = parseFloat($(this).find(".number").next().text());
			totalprice += xiaoji;
		}
		//初始化小计的值
		//获取数量
		var num11 = parseInt($(this).find(".singlenum").val())
		//获取单价
		var danjia = parseFloat($(this).find(".number").prev().text())
		//计算小计
		var xiaoji = num11*danjia;
		//赋值给小计
		$(this).find(".number").next().text(xiaoji.toFixed(2))
	})
	//反选
	if(!($(".singleshop").length == checknum)){
		$(".allcheck").prop("checked",false)
	}else if($(".singleshop").length == checknum){
		$(".allcheck").prop("checked",true)
	}
//	console.log(totalprice)
	$("#allshopnum").text(allshopnum);
	$("#checknum").text(checknum)
	$("#totalprice").text(totalprice.toFixed(2))
}





//猜你喜欢
$(".popularity .popucont ul").mouseover(function(){
 		$(".popularity .popucont ul").removeClass("ulhover");
 		$(this).addClass("ulhover");
 })
 	



































