$(document).ready(function($){ //the part of leftnav
		           var urlnav="https://www.jichuangtech.site/clothshopserver/api/info/goodsCategories";
                   var datanav={};
                   $.getJSON(urlnav,datanav,function(res){

                     $.each(res.data,function(key,value){
       
         $("#left_nav").append('<div Class="left_menu"><a target="_self" href="Products.html?TypeId=101">'+res.data[key].name+'</a></div>');});
                                   



 });
 });