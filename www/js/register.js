$(function(){
	jQuery.validator.addMethod("isPhoneNum", function(value, element) {     
	   	var tel =/^[1][3,4,5,7,8][0-9]{9}$/;  
	   	return this.optional(element) || (tel.test(value));
		}, "请正确填写您的邮政编码"
	);

	$("#form1").validate({
		rules:{//验证规则
			username:{
				required: true,
				rangelength: [4,10]
			},
			password:{
				required: true,
				rangelength: [6,16]
			},
			repeatpaw:{
				required: true,
				rangelength: [6,16],
				equalTo:"#password"
			},
			phonenum:{
				required: true,
				rangelength: [11,11],
				digits: true,
				isPhoneNum: true
			},
			code:{
				required: true,
				rangelength: [4,4],
			},
			phonecode:{
				required: true,
				rangelength: [6,6],
			},
			kuang:{
				required: true,
			}
		},
		messages:{//错误提示
	 	   	username:{
				required: "用户名不能为空",
				rangelength: "用户名长度在4-10个字符之间"
			},
	 	   	password:{
				required: "密码不能为空",
				rangelength: "密码长度在6-16个字符之间"
			},
	 	   	repeatpaw:{
				required: "请再次输入密码",
				rangelength: "密码长度在6-16个字符之间",
				equalTo:"两次输入的密码不一致",
			},
			phonenum:{
				required: "电话号码不能为空",
				rangelength:"电话号码为11位",
				digits:"电话号码为纯数字",
				isPhoneNum:"电话号码以13,14,15,17,18开头"
			},
			code:{
				required: "请输入验证码",
				rangelength: "验证码为4位",
			},
			phonecode:{
				required: "请在手机上确认验证码",
				rangelength: "手机验证码为6位"
			},
			kuang:{
				required:"请勾选注册协议",
			}
		},
		//单选框和多选框的提示信息的位置
		errorPlacement: function(error, element) { //指定错误信息位置 
			if (element.is(':radio') || element.is(':checkbox')) { //如果是radio或checkbox 
				var eid = element.attr('name'); //获取元素的name属性 
				error.appendTo(element.parent()); //将错误信息添加当前元素的父结点后面 
			} else { 
				error.insertAfter(element); 
			} 
		}, 
	
})	
})