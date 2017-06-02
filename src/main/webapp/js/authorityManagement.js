$(function(){
	// 是否处于修改状态 默认为否
	var isAuthChange = [];

	$('.myTab a[href="#profile"]').tab('show');

	$('.authorityChangeBtn').click(function(){
		var index = parseInt($(this).attr('data-index'));
		if(isAuthChange[index]){
			if(!confirm('是否确定修改主管权限？')) return;

			var options = [];
			var authorityChange = $('.changeTr-'+index+' .authorityChange');

			authorityChange.attr('disabled','disabled');
			$(this).html('<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>&nbsp;修改');

			for(var i=0,len=authorityChange.length;i<len;i++){
				options.push(authorityChange[i].options[authorityChange[i].selectedIndex].value);
			}

			utils.doPost(
				'',
				JSON.stringify(options),
				function success(data){
					if(data.return_code==0) {
			          alert('修改成功');
			        }
			        else if(data.return_code==1){
			          alert('修改失败');
			        }
				}
			);
		}else{
			$('.changeTr-'+index+' .authorityChange').removeAttr('disabled');
			$(this).html('<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>&nbsp;保存');
		}

		isAuthChange[index] = !isAuthChange[index];
	});


	$('.authoritySearch').keydown(function(e){
		if (e && e.keyCode == 13)
			$('.authoritySearchBtn').click();
	});

	$('.authoritySearchBtn').click(function(e){
		var text = $('.authoritySearch').val();

		utils.doGet(
			'...?value='+text,
			function success(data){
				if(data.return_code==0) {
					if(data.data){
						var templ = utils.getTempl('.authorityChangeTempl'),
							tbody = $('.authorityTable tbody'),
							dom,temp,authorityChange,i,len;

						tbody.empty();
						isAuthChange = [];

						for(var key in data.data){
							dom = utils.createDomByTempl(templ , { '{{index}}':index,'{{username}}':key,' template':''});
							authorityChange = $(dom).children().children('.authorityChange');
							for(i=0,len=authorityChange.length;i<len;i++){
								authorityChange[i].selectedIndex = data.data[key][i];
							}
							tbody.append(dom);
							isAuthChange.push(false);
						}
					}
		        }
		        else if(data.return_code==1){
		          alert('查询失败');
		        }
			}
		);
	});
});