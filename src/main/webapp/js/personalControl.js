$(function(){
	var personalInfo = {};
	
	// 页面加载后 请求个人资料
	(function(){
		console.log(12323213);
		utils.doGet(
			'/liyaosong',
			function success(data){
				if(data.return_code==0) {
		          parsonalInfo = data.personalInfo;
		          // 在表单内填入个人资料
		          initPersonalForm( false );
		          $('.pwdChangeForm .oldPwd').val(personalInfo.password);
		        }
		        else if(data.return_code==1){
		          alert('加载个人资料失败，请刷新页面重新加载');
		        }
			},
			function fail(err){
				alert('加载个人资料失败，请刷新页面重新加载');
			}
		);
	})();

	$('.myTab a[href="#profile"]').tab('show');

	$('.modifyBtn').click(function(e){
		initPersonalForm( true );
	});

	$('.cancelBtn').click(function(e){
		initPersonalForm( false );
	});

	$('.saveBtn').click(function(e){
		if(!confirm('是否确定保存个人资料修改')) return;

		var data = $('.personalForm').serializeObject();

		for(var key in data){
    		if(data[key]===''){
    			console.log(key+' is undefined');
    			return false;
    		}
    	}

    	utils.doPost(
    		'',
    		JSON.stringify(data),
    		function success(data){
    			if(data.return_code==0) {
		            alert('保存成功');
    				personalInfo = data;
    				initPersonalForm( true );
		        }
		        else if(data.return_code==1){
		            alert('保存失败');
		        }
    		}
    	);

	});

	$('.modifyPwdBtn').click(function(e){
		var newPwd1 = $('.pwdChangeForm .newPwd1').val();
		var newPwd2 = $('.pwdChangeForm .newPwd1').val();

		if(newPwd1 || newPwd2 || newPwd1!=newPwd2){
			alert('新密码不符合要求 或 两次输入新密码需一致');
			return;
		}

		utils.doPost(
			'',
			JSON.stringify({
				'oldPwd':personalInfo.password,
				'newPwd1': newPwd1,
				'newPwd2': newPwd2
			}),
			function success(data){
				if(data.return_code==0) {
		            alert('保存成功');
    				personalInfo.password = newPwd1;
		        }
		        else if(data.return_code==1){
		            alert('保存失败');
		        }
			}
		)
	});



	function initPersonalForm( isModified ){
		if(isModified){
			// 进入修改状态
			$('.personalForm .username').removeAttr('readonly');
			$('.personalForm .name').removeAttr('readonly');
			$('.personalForm .userType').removeAttr('readonly');
			$('.personalForm .position').removeAttr('readonly');
			$('.personalForm .tel').removeAttr('readonly');
			$('.personalForm .email').removeAttr('readonly');
			$('.personalForm .birthday').removeAttr('readonly');
			$('.personalForm .address').removeAttr('readonly');
			$('.personalForm .status').removeAttr('readonly');
			$('.personalForm .hometown').removeAttr('readonly');			
		}else{
			// 取消修改状态 或者 一开始的初始化
			$('.personalForm .username').attr('readonly','readonly').val(personalInfo.username);
			$('.personalForm .name').attr('readonly','readonly').val(personalInfo.name);
			$('.personalForm .userType').attr('readonly','readonly').val(personalInfo.userType);
			$('.personalForm .position').attr('readonly','readonly').val(personalInfo.position);
			$('.personalForm .tel').attr('readonly','readonly').val(personalInfo.tel);
			$('.personalForm .email').attr('readonly','readonly').val(personalInfo.email);
			$('.personalForm .birthday').attr('readonly','readonly').val(personalInfo.birthday);
			$('.personalForm .address').attr('readonly','readonly').val(personalInfo.address);
			$('.personalForm .status').attr('readonly','readonly').val(personalInfo.status);
			$('.personalForm .hometown').attr('readonly','readonly').val(personalInfo.hometown);
		}
	}

});