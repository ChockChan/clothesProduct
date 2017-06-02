$(function () {

    $('.myTab a[href="#profile"]').tab('show');

    $('.caiChuangSearchTable').click(function(e){
    	var target =  e.target || e.srcElement;

    	console.log(target.className);
    	if(target.className.match('checkCaiChuangBtn')){
    		var id = $(target).attr('data-id');

    		$('.caiChuangBlock').removeClass('hide');
    	}else if(target.className.match('createGPBtn')){
    		var id = $(target).attr('data-id');

    		$('.caiChuangProcessBlock').removeClass('hide');
    	}
    });

    $('.ccpProdstyleSelect').change(function(e){
    	var p = this.options[this.selectedIndex].value;

    	console.log(p);
    	$('.caiChuangProcessBlock .processBlock.'+p).removeClass('hide');
    	$('.caiChuangProcessBlock .processBlock:not(.'+p+')').addClass('hide');
    });

    $('.addprocessBtn').click(function(e){
    	var id = $(this).attr('data-id');

    	var dom = document.createElement('tr');
    	dom.innerHTML = "<th>工序名称</th><td contentEditable></td><th>单价/元</th><td contentEditable></td><th>工序名称</th><td contentEditable></td><th>单价/元</th><td contentEditable></td>"

    	$('.caiChuangProcessBlock .processBlock.'+id+' tbody').append(dom);
    });

    $('.viewWorkticketBtn').click(function(e){
    	var id = $(this).attr('data-id');
    	var temp = [[120170404001,220170404001],[120170404002,220170404002]];

    	$('.workticketInfo .flowNumber').html(temp[id][0]);
    	$('.workticketInfo .caiChuangNumber').html(temp[id][1]);
    	$('.workticketInfo').removeClass('hide');
    });
});