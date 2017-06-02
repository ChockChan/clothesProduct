// 工具类
var utils = (function(){
	var _templ,// 模版代码
		_that;// this 指针

	function _getTempl( className ){
		var dom = _that.getElement(className);
		_templ = _that.getOuterHTML(dom);
		return _templ.toString();
	}

	return {
		getElement: function( selector ){
			return selector!==undefined?document.querySelector(selector):null;
		},
		getElements: function( selector ){
			return selector!==undefined?document.querySelectorAll(selector):null;
		},
		getTempl: function( className ){
			_that = this;
			return _getTempl(className);
		},
		getOuterHTML: function( dom ){
			var parent = document.createElement("div");
			parent.appendChild( dom.cloneNode(true) );
			return parent.innerHTML;
		},
		createDomByTempl: function( templ , replaceObj){
			if(templ===undefined)
				templ = _templ;
			else if(replaceObj){
				// 遍历对象 替换所有需要替换的值
				for(var key in replaceObj){
					templ = templ.replace( new RegExp( key , "mg") , replaceObj[key]);
				}
			}

			console.log(templ);
			// 生成元素节点，并返回
			var dom = document.createElement("div");
			dom.innerHTML = templ;
			return dom.childNodes[0];
		},
		addCookie: function(name,value,day) { 
			var expireDate = new Date(); 
			//设置失效时间 
			expireDate.setDate(expireDate.getDate()+day);
			//escape()汉字转成unicode编码,toGMTString() 把日期对象转成字符串
			document.cookie=encodeURI(name)+"="+encodeURI(value)+";expires="+expireDate.toGMTString();
		},
		getCookie: function(name) { 
			if(document.cookie !=null){ 
				//用spilt('; ')切割所有cookie保存在数组arrCookie中 
				var arrCookie = document.cookie.split('; ');
				for(let i=0; i<arrCookie.length; i++) {
					var temp = arrCookie[i].split('=');
					/*alert("t0:"+temp[0]);*/
				/*	alert("name:"+name);
					alert(temp[0].indexOf(name)!= -1)*/
					if(temp[0].indexOf(name)!= -1){
						/*alert("t1:"+temp[1]);*/
						return decodeURI(temp[1]); 
					}
					
				} 
			} 
		},
		delCookie: function(name)
		{
			var exp = new Date();
			exp.setTime(exp.getTime()-100000);//设置过期时间
			var val=getCookie(name);
			if(val!=null)
			{
				addCookie(name,null,exp);

			}
		},
		getUrlRequest: function() {
			var url=location.search;
			var urlParaList=new Object();
			//"?"存在，即判断url参数存在性
			if(url.indexOf["?"] != -1){
				var array = url.substr(1).split("&");
				for (let i = 0; i < array.length; i++) {
					urlParaList[array[i].split("=")[0]]=array[i].split("=")[1];
				};	
			}
			return urlParaList;
		},
		doGet: function( url , successFn , failFn){
			$.ajax({
				type:"GET",
				url: url,
				headers:{
					"Content-Type":"application/json;charset=utf-8",
					"Accept":"application/json;charset=utf-8"
				},
				success:function(data){
					if(successFn && successFn instanceof Function)
						successFn(data);
					else
						console.log('get request succeed');
				},
				error:function(err){
					if(failFn && failFn instanceof Function)
						failFn(err);
					else
						console.log('get request failed');
				}
			});
		},
		doPost: function( url , data , successFn , failFn ){
			$.ajax({
		      url: url,
		      headers:{
		         "Content-Type":"application/json;charset=utf-8",
		         "Accept":"application/json;charset=utf-8"
		      },
		      type: "POST",
		      data: data,		      
		      success: function(data){
		        if(successFn && successFn instanceof Function)
					successFn(data);
				else
					console.log('get request succeed');
		      },
		      error: function(err){
		      	if(failFn && failFn instanceof Function)
					failFn(err);
				else
					console.log('get request failed');
		      }
		    });
		},
		checkFormate: function( targetStr , formateStr , flag='img'){
			return new RegExp( formateStr , flag ).test(targetStr);
		},
    	emptyAllInput: function ( formClass ){
	    	if(formClass){
	    		$('.'+formClass+' input').val('');
	    	}
	    },
	};
})($);

$.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } 
        else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};