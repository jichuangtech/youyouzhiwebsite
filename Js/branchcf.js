$(document).ready(function($){ //the part of leftnav
		           var urlnav="https://www.jichuangtech.site/clothshopserver/api/info/goodsCategories";
                   var datanav={};
                   $.getJSON(urlnav,datanav,function(res){

                     $.each(res.data,function(key,value){
       
         $("#menu_ul").append('<div class="left_menu" id="kind'+res.data[key].id+'"><a target="_self" href="Products.html?TypeId=101">'+res.data[key].name+'</a></div>');});//左侧导航栏
                  
            



 });
 });