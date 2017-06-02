function BaseInf(){};
var baseInf = new BaseInf();
/*var nav=null;
function getNav() {
	if (baseInf == null) {
		liGet();
		var temp = JSON.stringify(baseInf.nav);
		addCookie("nav", temp, 0.5);
	};
}*/

function Order(userId,depotId,city,region,goodId,goodName,num_of_good,goodPrice,goodPicture_url,goodTotalPrice){
	this.userId=userId;
	this.depotId=depotId;
	this.city=city;
	this.region=region;
	this.goodId=goodId;
	this.goodName=goodName;
	this.num_of_good=num_of_good;
	this.goodPrice=goodPrice;
	this.goodPicture_url=goodPicture_url;
	this.goodTotalPrice=num_of_good*goodPrice;
}
var address = function(city,region){
	this.city=city;
	this.region=region;
}
var addressList = new Array();
function getUrlRequest() {
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
}

// function liGet(){
//
// 	$.ajax({
// 		type:"GET",
// 		// url:'data/nav.json',
// 		url:'/navInit',
// 		async:false,
//         headers:{
//             "Content-Type":"application/json;charset=utf-8",
//             "Accept":"application/json;charset=utf-8"
//         },
// 		success:function(data){
// 			checkReturn_code(data.return_code);
// 			if(data.return_code==0)
// 			{
// 				baseInf.nav=[data.festival,data.love,data.sympathy,data.occation,data.specice];
// 				console.log(data);
// 			};
//
// 		},
// 		error:function(){}
// 	});
// };
//
// function liInit(){
// 	console.log(getCookie("nav"));
// 	console.log(document.cookie)
// 	nav = JSON.parse(getCookie("nav"));
// 	console.log(nav);
// 	for (let i = 1; i < 6; i++) {
// 		$("#tag"+i).empty();
// 		for (let j = 0; j < nav[i-1].length; j++) {
// 			var tagName = nav[i-1][j].name;
// 			var tagId = nav[i-1][j].tagId;
// 			var dom = "<li data-tagId='"+tagId+"'><a href='flowerlist.html?parentTagId=tag"+i+"&tag="+tagId+"'>"+tagName+"</a></li>";
// 			$("#tag"+i).append(dom);
// 		};
// 	};
// 	var locUrf=String(location);
// 	if(locUrf.indexOf("flowerlist")!= -1)
// 	{
// 		asideliInit(nav);
// 	}
// }
function liGet(){
	$.ajax({
		type:"GET",
		url:'/navInit',
		headers:{
			"Content-Type":"application/json;charset=utf-8",
			"Accept":"application/json;charset=utf-8"
		},
		success:function(data){
			checkReturn_code(data.return_code);
			if(data.return_code==0)
			{
				baseInf.nav=[data.festival,data.love,data.sympathy,data.occation,data.specice]
				liInit();
				var locUrf=String(location);
				if(locUrf.indexOf("flowerlist")!= -1)
				{
					asideliInit();
				}
			};

		},
		error:function(){}
	});
};

function liInit(){
	for (let i = 1; i < 6; i++) {
		$("#tag"+i).empty();
		for (let j = 0; j < baseInf.nav[i-1].length; j++) {
			var tagName = baseInf.nav[i-1][j].name;
			var tagId = baseInf.nav[i-1][j].tagId;
			var dom = "<li data-tagId='"+tagId+"'><a href='flowerlist.html?parentTagId=tag"+i+"&tag="+tagId+"'>"+tagName+"</a></li>";
			$("#tag"+i).append(dom);
		};
	};
}
function addCookie(name,value,day) { 
	var expireDate = new Date(); 
	//设置失效时间 
	expireDate.setDate(expireDate.getDate()+day);
	//escape()汉字转成unicode编码,toGMTString() 把日期对象转成字符串
	document.cookie=encodeURI(name)+"="+encodeURI(value)+";expires="+expireDate.toGMTString();
} 

function getCookie(name) { 
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
} 

function delCookie(name)
{
	var exp = new Date();
	exp.setTime(exp.getTime()-100000);//设置过期时间
	var val=getCookie(name);
	if(val!=null)
	{
		addCookie(name,null,exp);

	}
}

var addressList =
	[
		{
			"city":"广州市",
			"region":["番禺区","越秀区","荔湾区","从化区","白云区","天河区","花都区","增城区","黄埔区","海珠区","南沙区"]
		},
		{
			"city":"深圳市",
			"region":["福田区","罗湖区","南山区","盐田区","宝安区","龙岗区"]
		},
		{
			"city":"阳江市",
			"region":["江城区","阳东区","阳春市","阳西县"]
		}
	];

function getAddress(){
		setCityList();
		setRegionList();

		$("#city").change(function(){
		setRegionList();
		});
	/*	$.ajax({
            url:'data/city.json',
            /!*url:'/getCityRegion',*!/
            type:"POST",
            headers:{
                "Content-Type":"application/json;charset=utf-8",
                "Accept":"application/json;charset=utf-8"
            },
            success:function(data){
                checkReturn_code(data.return_code);
                if(data.return_code==0)
                {
                    console.log(data.address)
                    for (let i = 0; i < data.address.length; i++){
                                var temp = new address(data.address[i].city,data.address[i].region)
                                addressList.push(temp);
                            };
                    setCityList(addressList);
                    setRegionList(addressList);
                }
            }
        })*/
}
function setCityList(){
	var val = $("#city").val();
	if(val==null) {
		for (let i = 0; i < addressList.length; i++) {
			/*console.log(addressList[i])*/
			var city = addressList[i].city;
			var dom_city = "<option value='" + city + "'>" + city + "</option>"
			$("#city").append(dom_city);
		}
	}
	else{
		for(let j=0; j<addressList.length; j++){
			var city = addressList[j].city;
			if(val==city)continue;
			var dom_city = "<option value='" + city + "'>" + city + "</option>"
			$("#city").append(dom_city);
		}
	}
}
function setRegionList(){
	var val = $("#region").val();
	if(val==null) {
		$("#region").empty();
		var select_city = $("#city").val();
		for (let i = 0; i < addressList.length; i++) {
			var _this = addressList[i];
			/*console.log(_this.city==select_city);console.log(select_city);*/
			if (_this.city == select_city) {
				for (let j = 0; j < _this.region.length; j++) {
					var region = _this.region[j];
					var dom_region = "<option value='" + region + "'>" + region + "</option>"
					$("#region").append(dom_region);
				}
				;
				break;
			};
		};
	}
	else{
		$("#region").empty();
		var select_city = $("#city").val();
		for (let i = 0; i < addressList.length; i++) {
			var _this = addressList[i];
			if (_this.city == select_city) {
				for (let j = 0; j < _this.region.length; j++) {
					var region = _this.region[j];
					if(val==region)continue;
					var dom_region = "<option value='" + region + "'>" + region + "</option>"
					$("#region").append(dom_region);
				}break;
			};
		};
	}
}
function checkReturn_code(code){
	switch(code)
	{
		case 0:
			break;
		case 1:

			break;
			/*alert("操作失败！请稍后再试");
			 window.location.reload(true);
			break;*/
		case 9:
			/*alert("请登录!");
			delCookie("JSESSIONID");
			window.location.href='login.html'*/
	}
}

function getLoginInfo(){
	$.ajax({
		url: '/pInfo',
		type: 'GET',
        headers:{
             "Content-Type":"application/json;charset=utf-8",
             "Accept":"application/json;charset=utf-8"
        },

        success: function(data){
        	//console.log(data);
        	if(data.return_code==0){

        		$("#loginInfo").find('a').html(data.userEmail);
        		$("#loginInfo").find('a').attr('href','personInfo.html');
        		$("#regLogout").find('a').html("退出");
        		$("#regLogout").find('a').attr('href','javascript:void(0);');
        		$("#regLogout").find('a').attr('id','logout');

				$("#goCaret").find('a').attr('href','shopCart.html');
				 //退出登录
				$("#logout").on('click',function(){

				     $.ajax({
				     	url: '/quit',
				     	type: 'GET',
				        headers:{
				            "Content-Type":"application/json;charset=utf-8",
				            "Accept":"application/json;charset=utf-8"
				        },

				     	success:function(data){
				     		if(data.success){
								delCookie("JSESSIONID");
				     			window.location.href="home.html";
				     		}



				    	}
				     });
				     
				})	               
        	}
        	if(data.return_code==1) {
        		$("#goCaret").find('a').attr('href','login.html');
        	}
			if(data.return_code==9) {
				$("#goCaret").find('a').attr('href','login.html');
				delCookie("JSESSIONID");
				window.location.href = "home.html";
			}
        }
	});
};

(function($, window, undefined) {
    // outside the scope of the jQuery plugin to
    // keep track of all dropdowns
    var $allDropdowns = $();
    // if instantlyCloseOthers is true, then it will instantly
    // shut other nav items when a new one is hovered over
    $.fn.dropdownHover = function(options) {

        // the element we really care about
        // is the dropdown-toggle's parent
        $allDropdowns = $allDropdowns.add(this.parent());

        return this.each(function() {
            var $this = $(this).parent(),
                defaults = {
                    delay: 300,
                    instantlyCloseOthers: true
                },
                data = {
                    delay: $(this).data('delay'),
                    instantlyCloseOthers: $(this).data('close-others')
                },
                options = $.extend(true, {}, defaults, options, data),
                timeout;

            $this.hover(function() {
                if (options.instantlyCloseOthers === true)
                    $allDropdowns.removeClass('open');

                window.clearTimeout(timeout);
                $(this).addClass('open');
            }, function() {
                timeout = window.setTimeout(function() {
                    $this.removeClass('open');
                }, options.delay);
            });
        });
    };

    $('[data-hover="dropdown"]').dropdownHover();
})(jQuery, this);

//将表单数据转为JSON格式
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

function nonlogin_getLoginInfo(){
	$.ajax({
		url: '/pInfo',
		type: 'GET',
		headers:{
			"Content-Type":"application/json;charset=utf-8",
			"Accept":"application/json;charset=utf-8"
		},

		success: function(data){
			//console.log(data);
			if(data.return_code==0){

				$("#loginInfo").find('a').html(data.userEmail);
				$("#loginInfo").find('a').attr('href','personInfo.html');
				$("#regLogout").find('a').html("退出");
				$("#regLogout").find('a').attr('href','javascript:void(0);');
				$("#regLogout").find('a').attr('id','logout');

				$("#goCaret").find('a').attr('href','shopCart.html');
				//退出登录
				$("#logout").on('click',function(){

					$.ajax({
						url: '/quit',
						type: 'GET',
						headers:{
							"Content-Type":"application/json;charset=utf-8",
							"Accept":"application/json;charset=utf-8"
						},

						success:function(data){
							if(data.success){
								delCookie("JSESSIONID");
								window.location.href="home.html";
							}



						}
					});

				})
			}
			if(data.return_code==1) {
				$("#goCaret").find('a').attr('href','login.html');
			}
			if(data.return_code==9) {
				$("#goCaret").find('a').attr('href','login.html');
				delCookie("JSESSIONID");
			}
		}
	});
};
/*
getNav();*/
