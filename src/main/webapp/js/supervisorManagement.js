$(function () {
    $('.myTab a[href="#profile"]').tab('show');

    // 查询结果数据
    var info;

    // 添加新主管事件
    $('.addSpvrForm input').keydown(function(e){
        if (e && e.keyCode == 13)
    	   $('.addSpvrForm .addSpvrSubmit').click(e);
    });

    $('.addSpvrForm .addSpvrSubmit').click(function(e){
    	addNewSupervisor();
    });

    // 查询主管事件
    $('.searchDetailSpvr').keydown(function(e){
        if (e && e.keyCode == 13)
    	   $('.searchDetailSpvrBtn').click(e);
    });

    $('.searchDetailSpvrBtn').click(function(e){
    	var text = $('.searchDetailSpvr').val();
    	searchSupervisor(text);
    });

    // 查看主管详细资料
    $('.checkSpvrInfo').click(function(e){
    	var username = $(this).attr('data-username');
    	// var templ = utils.getTempl('.addSpvrForm');
    	var userInfo;
    	var formDom = $('.'+formClass)[0];

    	for(var i=0,len=info.length;i<len;i++){
    		if(info[i].username == username){
    			userInfo = info[i];
    			break;
    		}
    	}

    	// formDom = utils.createDomByTempl(
    	// 	templ,
    	// 	{
    	// 		'{{username}}': userInfo.username,
    	// 		'{{name}}': userInfo.name,
    	// 		'{{userType}}': userInfo.userType,
    	// 		'{{position}}': userInfo.position,
    	// 		'{{tel}}': userInfo.tel,
    	// 		'{{email}}': userInfo.email,
    	// 		'{{birthday}}': userInfo.birthday,
    	// 		'{{address}}': userInfo.address,
    	// 		'{{status}': userInfo.status,
    	// 		'{{hometown}}': userInfo.hometown
    	// 	}
    	// );

    	formDom.innerHTML = formDom.innerHTML
    							.replace('{{username}}', userInfo.username)
				    			.replace('{{name}}', userInfo.name)
				    			.replace('{{userType}}', userInfo.userType)
				    			.replace('{{position}}', userInfo.position)
				    			.replace('{{tel}}', userInfo.tel)
				    			.replace('{{email}}', userInfo.email)
				    			.replace('{{birthday}}', userInfo.birthday)
				    			.replace('{{address}}', userInfo.address)
				    			.replace('{{status}', userInfo.status)
				    			.replace('{{hometown}}', userInfo.hometown);

    	$(formDom).show();
    });

    // 修改主管资料-- 资料填充及跳转
    $('.editSpvrInfo').click(function(e){
    	// 初始化修改表单资料
    	var username = $(this).attr('data-username');
    	var userInfo;

    	for(var i=0,len=info.length;i<len;i++){
    		if(info[i].username == username){
    			userInfo = info[i];
    			break;
    		}
    	}
    	initEditSpvrForm( userInfo );

    	// 跳转至修改资料界面
    	$('.myTab a[href="#third"]').click();
    });

    // 保存修改 主管资料
    $('.editSpvrForm input').keydown(function(e){
        if (e && e.keyCode == 13)
    	   $('.editSpvrForm .editSpvrFormSubmit').click(e);
    });

    $('.editSpvrForm .editSpvrFormSubmit').click(function(e){
    	editSupervisor();
    });

    // 查询可修改主管
    $('.searchEditSupervisor').keydown(function(e){
    	$('.searchSupervisorBtn').click(e);
    });

    $('.searchEditSupervisorBtn').click(function(e){
    	var text = $('.searchEditSupervisor').val();
    	searchEditSupervisor(text);
    });

    // 在查询可修改主管资料界面下的修改按钮点击
    $('.doEdit').click(function(e){
    	// 初始化修改表单资料
    	var username = $(this).attr('data-username');
    	var userInfo;

    	for(var i=0,len=info.length;i<len;i++){
    		if(info[i].username == username){
    			userInfo = info[i];
    			break;
    		}
    	}
    	initEditSpvrForm( userInfo );
    });

    // 添加新主管
    function addNewSupervisor(){
    	var formData = $('.addSpvrForm').serializeObject();

        console.log(formData);
    	for(var key in formData){
    		if(formData[key]===''){
    			console.log(key+' is undefined');
    			return false;
    		}
    	}

    	utils.doPost(
    		'/supervisor/add',
    		JSON.stringify(formData),
    		function success(data){
    			if(data.return_code==0) {
		          alert('保存成功');
		          utils.emptyAllInput( 'addAdminForm' );
		        }
		        else if(data.return_code==1){
		          alert('保存失败');
		        }
    		}
    	);
    }

    // 查找主管
    function searchSupervisor( text ){
    	utils.doGet(
    		'/supervisor/get?name='+text,
    		function success(data){
    			if(data.return_code==0) {
    				//获取模版代码 
		          var templ = utils.getTempl( '.searchSpvrTrTempl');
		          var spvrTable = $('.supervisorTable tbody');
		          if(Array.isArray(data.data)){
		          	// 清空表格
		          	spvrTable.empty();
		          	// 按模版初始化表格
		          	info = data.data;
		          	data.data.forEach(function(item,index){
		          		// 按模版初始化表格行
		          		spvr.append(utils.createDomByTempl(
		          			templ,
		          			{
		          				'{{帐户}}':item.username,
                                '{{姓名}}':item.name,
                                '{{公司职位}}':item.position,
                                '{{电话}}':item.tel,
                                '{{邮箱}}':item.email,
                                '{{状态}}':item.status,
                                ' template':''
		          			}
		          		));
		          	});
		          }
		        }
		        else if(data.return_code==1){
		          alert('查询失败');
		        }
    		}
    	);
    }

    // 填充修改主管资料输入项
    function initEditSpvrForm( data ){
    	$('.editSpvrForm .username').val(data.username);
		$('.editSpvrForm .name').val(data.name);
		$('.editSpvrForm .userType').val(data.userType);
		$('.editSpvrForm .position').val(data.position);
		$('.editSpvrForm .tel').val(data.tel);
		$('.editSpvrForm .email').val(data.email);
		$('.editSpvrForm .birthday').val(data.birthday);
		$('.editSpvrForm .address').val(data.address);
		$('.editSpvrForm .status').val(data.status);
		$('.editSpvrForm .hometown').val(data.hometown);
    }

    // 保存修改
    function editSupervisor(){
    	var formData = $('.editSpvrForm').serializeObject();

    	for(var key in formData){
    		if(formData[key]===''){
    			console.log(key+' is undefined');
    			return false;
    		}
    	}

    	utils.doPost(
    		'/supervisor/update',
    		JSON.stringify(formData),
    		function success(data){
    			if(data.return_code==0) {
		          alert('保存成功');
		        }
		        else if(data.return_code==1){
		          alert('保存失败');
		        }
    		}
    	);
    }

    // 查找可修改主管
    function searchEditSupervisor(text){
    	utils.doGet(
    		'/supervisor/get?name='+text,
    		function success(data){
    			if(data.return_code==0) {
    				//获取模版代码 
		          var templ = utils.getTempl( '.ssearchEditSpvrTempl');
		          var spvrTable = $('.spvrNametable tbody');
		          if(Array.isArray(data.data)){
		          	// 清空表格
		          	spvrTable.empty();
		          	// 按模版初始化表格
		          	info = data.data;
		          	data.data.forEach(function(item,index){
		          		// 按模版初始化表格行
		          		spvr.append(utils.createDomByTempl(
		          			templ,
		          			{
		          				'{{帐户}}':item.username,
                                '{{姓名}}':item.name,
                                ' template':''
		          			}
		          		));
		          	});
		          }
		        }
		        else if(data.return_code==1){
		          alert('查询失败');
		        }
    		}
    	);
    }
});