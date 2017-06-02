$(function(){
	var styleRowCount = 0;
	var modifyStyleRowCount = 0;
	var kaicaiInfo = [];

	$('.myTab a[href="#profile"]').tab('show');

	$('.kaicai-form').click(function(e){
		var target = e.target || e.srcElement;
		var templ,dom,id;

		if(target.className.match('addTableRowBtn')){
			id = $(target).attr('data-id');
			templ = "<td contenteditable></td><td contenteditable data-belong='S'></td><td contenteditable data-belong='M'></td><td contenteditable data-belong='L'></td><td contenteditable data-belong='XL'></td><td contenteditable data-belong='XXL'></td><td contenteditable data-belong='3XL'></td><td contenteditable data-belong='4XL'></td><td contenteditable data-belong='5XL'></td><td contenteditable data-belong='合计'></td><td></td>";
			dom = document.createElement("tr");
			dom.innerHTML = templ;
			$('.style-'+id+' .kaicai-table tbody').append(dom);
		}else if(target.className.match('addStyleBtn')){
			templ = utils.getTempl('.style-row.template');
			dom = utils.createDomByTempl(templ,{'{{index}}':++styleRowCount,' template':''});
			$('.kaicai-form').append(dom);
		}else if(target.className.match('deleteStyleBtn')){
			id = $(target).attr('data-id');
			$('.style-'+id).remove();
		}
	});

	$('.modify-kaicai-form').click(function(e){
		var target = e.target || e.srcElement;
		var templ,dom,id;

		if(target.className.match('addTableRowBtn')){
			id = $(target).attr('data-id');
			templ = '<td contenteditable>{{颜色}}</td><td contenteditable data-belong="S">{{S}}</td><td contenteditable data-belong="M">{{M}}</td><td contenteditable data-belong="L">{{L}}</td><td contenteditable data-belong="XL">{{XL}}</td><td contenteditable data-belong="XXL">{{XXL}}</td><td contenteditable data-belong="3XL">{{3XL}}</td><td contenteditable data-belong="4XL">{{4XL}}</td><td contenteditable data-belong="5XL">{{5XL}}</td><td contenteditable data-belong="合计">{{合计}}</td><td></td>';
			dom = document.createElement("tr");
			dom.innerHTML = templ;
			$('.style-'+id+' .kaicai-table tbody').append(dom);
		}else if(target.className.match('addStyleBtn')){
			templ = utils.getTempl('.modify-kaicai-style.template');
			dom = utils.createDomByTempl(templ,{'{{index}}':++modifyStyleRowCount,' template':''});
			$('.kaicai-form').append(dom);
		}else if(target.className.match('deleteStyleBtn')){
			id = $(target).attr('data-id');
			$('.modify-kaicai-style-'+id).remove();
		}
	});

	// 新建开裁单保存
	$('.kaicai-submit').click(function(e){
		var data = $('.kaicai-form').serializeObject(),styleRowInfo = [], obj= {content:[]},trs,tds;

		for(var i=0;i<styleRowCount;i++){
			if($('.style-'+i).length>0){
				obj.prodstyle = $('.style-'+i+' .prodstyle').val();
				trs = $('.style-'+i+' tbody tr');
				for(var j=0;j<trs.length;j++){
					tds = trs.children();
					tds.forEach(function(td, index){
						if(index==0){
							obj.content.push({color:td.innerHTML});
						}else if(index>0 && index<10){
							obj.content[i][$(td).attr('data-belong')] = td.innerHTML;
						}
					});
				}
			}
			styleRowInfo.push(obj);
			obj= {content:[]}; 
		}
		data.styleInfo = styleRowInfo;

		utils.doPost(
			'',
			JSON.stringify(data),
			function success(data){
				if(data.return_code==0) {
		            alert('保存成功');
		        }
		        else if(data.return_code==1){
		            alert('保存失败');
		        }
			}
		);
	});

	// 修改开裁单保存
	$('.kaicai-submit').click(function(e){
		var data = $('.modify-kaicai-form').serializeObject(),styleRowInfo = [], obj= {content:[]},trs,tds;

		for(var i=0;i<styleRowCount;i++){
			if($('.modify-kaicai-style-'+i).length>0){
				obj.prodstyle = $('.modify-kaicai-style-'+i+' .prodstyle').val();
				trs = $('.modify-kaicai-style-'+i+' tbody tr');
				for(var j=0;j<trs.length;j++){
					tds = trs.children();
					tds.forEach(function(td, index){
						if(index==0){
							obj.content.push({color:td.innerHTML});
						}else if(index>0 && index<10){
							obj.content[i][$(td).attr('data-belong')] = td.innerHTML;
						}
					});
				}
			}
			styleRowInfo.push(obj);
			obj= {content:[]}; 
		}
		data.styleInfo = styleRowInfo;

		utils.doPost(
			'',
			JSON.stringify(data),
			function success(data){
				if(data.return_code==0) {
		            alert('保存成功');
		        }
		        else if(data.return_code==1){
		            alert('保存失败');
		        }
			}
		);
	});

	
	$('.kaicaiSearchTable').click(function(e){
		var target = e.target || e.srcElement;

		if(target.className.match('searchKaicai')){
			var flowNumber = $('.flowNumberSearch').val();
			var client = $('.clientSearch').val();
			var createdate = $('.createdateSearch').val();

			utils.doGet(
				'...?flowNumber='+flowNumber+'&client='+client+'&createdate='+createdate,
				function success(data){
					if(data.return_code==0) {
			            if(data.data && Array.isArray(data.data)){
			            	// 本地保存开裁单数据
			            	kaicaiInfo = data.data;
			            	// 初始化查询表格
			            	if(window.location.hash.match('second'))
			            		initSearchKaicai(kaicaiInfo, kaicaiSearchTable);
			            	else if(window.location.hash.match('third'))
			            		initSearchKaicai(kaicaiInfo, kaicaiSearchTable2);
			            }
			        }
			        else if(data.return_code==1){
			            alert('查询不到相关结果');
			        }
			        else if(data.return_code==2){
			            alert('查询失败');
			        }
				}
			);
		}else if(target.className.match('checkKaicaiBtn')){
			var id = parseInt($(target).attr('data-id'));

			showKaicaiInfo(id);
		}else if(target.className.match('modify-kaicai-btn')){
			var id = parseInt($(target).attr('data-id'));

			showModifyKaicai(id);
		}else if(target.className.match('delete-kaicai-btn')){
			var id = parseInt($(target).attr('data-id'));
			var flowNumber = $('.kaicaiSearchTable2-'+id).children('td')[0].innerHTML;

			utils.doGet(
				'...?flowNumber='+flowNumber,
				function success(data){
					if(data.return_code==0) {
			            alert('删除成功');
			            $('.kaicaiSearchTable2-'+id).remove();
			        }
			        else if(data.return_code==1){
			            alert('删除失败');
			        }
				}
			)
		}
	});

	function initSearchKaicai(data, formClass){
		var templ,dom,tbody=$('.kaicaiSearchTable tbody');

		tbody.empty();

		data.forEach(function(item,index){
			templ = utils.getTempl('.'+formClass+' .template');
			dom = utils.createDomByTempl(
				templ,
				{
					'{{流水编号}}':item.flowNumber,
	                '{{客户}}':item.client,
	                '{{下单日期}}':item.createdate,
	                '{{截止日期}}':item.deadline,
	                '{{制单员}}':item.supervisor,
	                '{{执行状态}}':item.status,
	                '{{index}}':index,
				}
			);
			tbody.append(dom);
		});
	}

	function showKaicaiInfo(id){
		var data = kaicaiInfo[id];

		$('.checkFlowNumber').html(data.flowNumber);
		$('.checkClient').html(data.client);
		$('.checkStatus').html(data.status);
		$('.checkCreatedate').html(data.createdate);
		$('.checkDeadline').html(data.deadline);
		$('.checkSupervisor').html(data.supervisor);
		$('.checkPlanNumber').html(data.planNumber);
		$('.checkRealNumber').html(data.realNumber);
		$('.checkRemark').html(data.remark);

		var templ,dom,itemTempl,itemDom;

		data.styleInfo.forEach(function(item, index){
			templ = utils.getTempl('.template.kaicai-table');
			dom = utils.createDomByTempl(
				templ,
				{
					'{{款式}}':item.prodStyle,
					'{{计划量}}':item.planNumber,
					'{{裁货量}}':item.realNumber,
				}
			);
			itemTempl = $(dom).children('.kaicai-table-item')[0].innerHTML;

			$(dom).children('.kaicai-table-item').empty();

			item.styleInfo.forEach(function(style,index){
				itemDom = utils.creatDomByTempl(
					itemTempl,
					{
						'{{颜色}}':style.color,
						'{{plan-S}}':style.planS,
		                '{{plan-M}}':style.planM,
		                '{{plan-L}}':style.planL,
		                '{{plan-XL}}':style.planXL,
		                '{{plan-XXL}}':style.planXXL,
		                '{{plan-3XL}}':style.plan3XL,
		                '{{plan-4XL}}':style.plan4XL,
		                '{{plan-5XL}}':style.plan5XL,
		                '{{plan-合计}}':style.planTotal,
		                '{{real-S}}':style.realS,
		                '{{real-M}}':style.realM,
		                '{{real-L}}':style.realL,
		                '{{real-XL}}':style.realXL,
		                '{{real-XXL}}':style.realXXL,
		                '{{real-3XL}}':style.real3XL,
		                '{{real-4XL}}':style.real4XL,
		                '{{real-5XL}}':style.real5XL,
		                '{{real-合计}}':style.realTotal,
					}
				)
				$(dom).append(itemDom);
			});

			$('.kaicai-info').append(dom);
		});

		$('.kaicai-info').show();
	};


	function showModifyKaicai(id){
		var data = kaicaiInfo[id],templ,dom,trTempl,trDom,tr,tbody;

		$('.modify-kaicai-block .flowNumber').val(data.flowNumber);
		$('.modify-kaicai-block .client').val(data.client);
		$('.modify-kaicai-block .createdate').val(data.createdate);
		$('.modify-kaicai-block .deadline').val(data.deadline);
		$('.modify-kaicai-block .supervisor').val(data.supervisor);
		$('.modify-kaicai-block .remark').val(data.remark);
		
		$('.modify-kaicai-block .status option[value="'+data.status+'"]').attr('selected','selected');

		data.styleInfo.forEach(function(style,index1){
			templ = utils.getTempl('.style-row.template');
			dom = utils.createDomByTempl(templ,{'{{index}}':index1});
			tbody = $(dom).children('.modify-style-row').children('.kaicai-table').children(tbody);

			style.content.forEach(function(item,index2){
				trTempl = '<td contenteditable>{{颜色}}</td><td contenteditable data-belong="S">{{S}}</td><td contenteditable data-belong="M">{{M}}</td><td contenteditable data-belong="L">{{L}}</td><td contenteditable data-belong="XL">{{XL}}</td><td contenteditable data-belong="XXL">{{XXL}}</td><td contenteditable data-belong="3XL">{{3XL}}</td><td contenteditable data-belong="4XL">{{4XL}}</td><td contenteditable data-belong="5XL">{{5XL}}</td><td contenteditable data-belong="合计">{{合计}}</td><td></td>';
				trDom = utils.createDomByTempl(
					trTempl,
					{
						'{{颜色}}':item.color,
						'{{S}}':item.planS,
		                '{{M}}':item.planM,
		                '{{L}}':item.planL,
		                '{{XL}}':item.planXL,
		                '{{XXL}}':item.planXXL,
		                '{{3XL}}':item['plan3XL'],
		                '{{4XL}}':item['plan4XL'],
		                '{{5XL}}':item['plan5XL'],
		                '{{合计}}':item.planTotal,
					}
				);
				tbody.append(trDom);
			});


			$(dom).removeClass('template');
			$('.modify-kaicai-form').append(dom);
		});

		modifyStyleRowCount= styleInfo.length;

		$('.modify-kaicai-block').show();
	}
});