$(document).ready(function($){
	var urlnav="https://www.jichuangtech.site/clothshopserver/api/info/goodsCategories";
	var datanav={};
	$.getJSON(urlnav,datanav,function(res){
		$.each(res.data,function(key,value){
			$("#menu_ul").append(`<li class="left_menu" id="kind${res.data[key].id}"><a>${res.data[key].name}</a></li>`);//左侧导航栏
		});
	});
});