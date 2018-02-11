$(document).ready(function($){ //the part of leftnav
		           var urlnav="https://www.jichuangtech.site/clothshopserver/api/info/goodsCategories";
                   var datanav={};
                   $.getJSON(urlnav,datanav,function(res){

                     $.each(res.data,function(key,value){
       
                        $("#menu_ul").append(`<li class="left_menu" id="kind${res.data[key].id}"><a>${res.data[key].name}</a></li>`);//左侧导航栏
                  
                        $("#kind"+res.data[key].id).click(function(){
                        	$("#ShoveWebControl_DataList1_ctl00_ShoveWebControl_Text2").html(`${res.data[key].name}`);
          
                          	//$(this).parents("ul").find("button").css("color","#2a78b7");
                            $(".product_module_main").empty();
                            var url_3submit="https://www.jichuangtech.site/clothshopserver/api/info/pagination";//主要图片来源接口
                            var data_3submit={catId:res.data[key].id,pageSize:1,pageIndex:1}; //id:1 2 3 4
                            $.getJSON(url_3submit,data_3submit,function(respage){

                              if(!respage.data){
                                $("li[id^='page']").remove();
                                $(".page_next").before(`<li id="page0" class="page_item page_active">1</li>`);

                              }
                              $.each(respage.data,function(k1,v1){                           //动态添加右侧模块

                                var urlFenlei_pic="https://www.jichuangtech.site/clothshopserver/api/goodsCategories/picture/"+respage.data[k1].originalImg+"";
                                if(!respage.data[k1].originalImg)urlFenlei_pic="Images/noproduct.png";
                                $(".product_module_main").append(`
                                    <div class="product_module_1">
                                        <div class="product_img">
                                        <img src="https://www.jichuangtech.site/clothshopserver/api/goodsCategories/picture/${respage.data[k1].originalImg}" alt="">
                                    </div>
                                        <div class="product_name CP_name">
                                        <p>${respage.data[k1].goodsName}</p>
                                        <span>${respage.data[k1].goodsContent}</span>
                                        <button>购物车</button>
                                        </div>
                                    </div>
                                	
                                	`);


                              });

                              
                              $("li[id^='page']").remove();
                              for(var i=1;i<=respage.pageTotal;i++){
                                      $(".page_next").before(`<li id="page${i}" class="page_item">${i}</li>`);//添加页码
                                  }
                              $("#page1").addClass("page_active");//第一个显示active
                              setTimeout(function () {


                                           for(var pdid=1;pdid<=respage.pageTotal;pdid++){
                                                     $("#page"+pdid).unbind('click');
                                                     $("#page"+pdid).click(function(){    //绑定页码的click事件
                                                                $(this).parents().find("li.page_active").removeClass("page_active");
                                                                $(this).addClass("page_active");
                                                                $(".product_module_main").empty();
                                                                var data_3submit={catId:res.data[key].id,pageSize:1,pageIndex:$(this).text()};
                                                                $.getJSON(url_3submit,data_3submit,function(pagei){
                                                                    $.each(pagei.data,function(k2,v2){

                                                                        var urlFenlei_pic="https://www.jichuangtech.site/clothshopserver/api/goodsCategories/picture/"+pagei.data[k2].originalImg+"";
                                                                        if(!pagei.data[k2].originalImg)urlFenlei_pic="Images/noproduct.png";
                                                                        $(".product_module_main").append(`
                                                                                          <div class="product_module_1">
                                                                                              <div class="product_img">
                                                                                                  <img src="https://www.jichuangtech.site/clothshopserver/api/goodsCategories/picture/${pagei.data[k2].originalImg}" alt="">
                                                                                              </div>
                                                                                              <div class="product_name CP_name">
                                                                                                  <p>${pagei.data[k2].goodsName}</p>
                                                                                                  <span>${pagei.data[k2].goodsContent}</span>
                                                                                                  <button>购物车</button>
                                                                                              </div>
                                                                                          </div>
                                  
                                                                                          `); 
                                                                      });//each 分页页码添加图片



                                                                })//getjson

                                                      });//click

                                            } //六次循环结束
                              }, 500);


                            });
                        });
                      });
 




                   function first(){$("#kind1").trigger("click");}
                   setTimeout(first(),800);
                    });

           

        

 });
