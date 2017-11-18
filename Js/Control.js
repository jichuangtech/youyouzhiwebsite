/*EIMS_C_46_1
EIMS_C_46_1_FilterType参数说明:
    1:
        一级：栏目（产品、新闻、文件等）
        二级：栏目下一级内容，（产品类别、新闻类别等）(所有阶层)
        三级：产品规格

    2:
        一级:产品类别
        二级:类别下一级(第二层)
        三级:产品类别再下一级(第三层)
    3:
        一级:产品类别
        二级:类别下一级(所有阶层)
        三级:产品规格
    4:
        各级数据自定义
*/
//开始
	function EIMS_C_46_1_getRadioType(item) {
            document.getElementById("EIMS_C_46_1_TypeID").value = item.value;
         }

$().ready(function(){
    //初始化参数
	if(document.getElementById("EIMS_C_46_1_Paras")==null){return}
	var EIMS_C_46_1_SearchControlType     =document.getElementById("EIMS_C_46_1_Paras").getAttribute("SearchControlType")//控件搜索类型
	if(EIMS_C_46_1_SearchControlType!="undefined" && EIMS_C_46_1_SearchControlType!=null)
	{
		if(EIMS_C_46_1_SearchControlType=="1"){
			var EIMS_C_46_1_LiSelect              =["EIMS_C_46_1_LiOne","EIMS_C_46_1_LiTwo","EIMS_C_46_1_LiThree"]//li元素ID
			var EIMS_C_46_1_Select                =["EIMS_C_46_1_SOne","EIMS_C_46_1_STwo","EIMS_C_46_1_SThree"]//选项ID
			var EIMS_C_46_1_FilterType            =parseInt(document.getElementById("EIMS_C_46_1_Paras").getAttribute("GroupType"));//搜索类型
			var EIMS_C_46_1_T_Table                =""//内容表
			var EIMS_C_46_1_T_TypeTable            =document.getElementById("EIMS_C_46_1_Paras").getAttribute("TypeTable")//类型表
			var EIMS_C_46_1_ContentNameCol        ="Name"
			var EIMS_C_46_1_DisplayAllLevel        =document.getElementById("EIMS_C_46_1_Paras").getAttribute("DisplayAllLevel")=="true"?true:false//是否显示所有层次(二级选项)
			var EIMS_C_46_1_IsShowSOne             =document.getElementById("EIMS_C_46_1_SOne") == null ? false : true;//是否显示一级搜索
			var EIMS_C_46_1_IsShowSTwo             =document.getElementById("EIMS_C_46_1_STwo") == null ? false : true;//是否显示二级搜索
			var EIMS_C_46_1_IsShowSThree         =document.getElementById("EIMS_C_46_1_SThree") == null ? false : true;//是否显示三级搜索
			var EIMS_C_46_1_TwoReject				=$("#EIMS_C_46_1_Paras").attr("TwoReject");//二级选项排除项
			var EIMS_C_46_1_ThreeReject				=$("#EIMS_C_46_1_Paras").attr("ThreeRejet");//三级选项排除项
			var EIMS_C_46_1_TwoAllocate				=$("#EIMS_C_46_1_Paras").attr("TwoAllocate");//二级选项指定项
			var EIMS_C_46_1_ThreeAllocate			=$("#EIMS_C_46_1_Paras").attr("ThreeAllocate");//三级选项指定项
			var FirstCaseTable =document.getElementById("EIMS_C_46_1_Paras").getAttribute("FirstCaseTable").split(",");//一级菜单数据源
			var SeconedCaseTable =document.getElementById("EIMS_C_46_1_Paras").getAttribute("SeconedCaseTable").split(",");//二级菜单数据源
			var ThreeCaseTable =document.getElementById("EIMS_C_46_1_Paras").getAttribute("ThreeCaseTable").split(",");//三级菜单数据源
	
		}else{
			var EIMS_C_46_1_FilterType="6";
		}
	}
	var EIMS_C_46_1_IsShowSOnlyTitle         =document.getElementById("EIMS_C_46_1_Paras").getAttribute("IsShowOnlyTitle");
    var EIMS_C_46_1_Condition             = "";//搜索条件
    // var EIMS_C_46_1_CaseTableColumn        =document.getElementById("EIMS_C_46_1_Paras").getAttribute("CaseTableColumn").split(",");//各级选项绑定搜索的字段名
    // var EIMS_C_46_1_KeyTableColumn        =document.getElementById("EIMS_C_46_1_Paras").getAttribute("KeyTableColumn").split(",");//关键词绑定搜索的字段名
    var EIMS_C_46_1_ResultURL            = $("#EIMS_C_46_1_Paras").attr("SearchResultURL");//搜索结果网址
    var EIMS_C_46_1_OpenRULType            =$("#EIMS_C_46_1_Paras").attr("URLOpenType");//打开搜索结果方式
	var EIMS_C_46_1_LeftCount			=$("#EIMS_C_46_1_Paras").attr("LeftCount");//关键字左边长度
	var EIMS_C_46_1_RightCount			=$("#EIMS_C_46_1_Paras").attr("RightCount");//关键字右边长度
	var EIMS_C_46_1_TitleCount			=$("#EIMS_C_46_1_Paras").attr("TitleCount");//标题长度
	var EIMS_C_46_1_RepeatCutCount      =$("#EIMS_C_46_1_Paras").attr("RepeatCutCount");//重复截取次数
	
	
    //刷新数据
    var EIMS_C_46_1_RefreshSelect=function(i,ParentId,NavigateId){
		if(i==2 && !EIMS_C_46_1_IsShowSThree || i==1 && !EIMS_C_46_1_IsShowSTwo){return;}
		
        var IsParent=false;
		var dt=null;
		var Condition;
		
		if(document.getElementById(EIMS_C_46_1_Select[i])=="undefined"){
			return
		}
		if(NavigateId!="undefined" && NavigateId!=null && EIMS_C_46_1_FilterType==1){
			dt=EIMS_C_46_1_GetNextLevelData(null,NavigateId,i)//获取所有的层次
			IsParent=true
		}
		else if(ParentId!="undefined" && ParentId!=null){
			if(i==1 && (EIMS_C_46_1_FilterType==1 || EIMS_C_46_1_FilterType==3)){
				dt=EIMS_C_46_1_GetNextLevelData(ParentId,null,i)//获取所有的层次
				IsParent=true
			}
			else if(i==2 && (EIMS_C_46_1_FilterType==1 || EIMS_C_46_1_FilterType==3)){//第三级选项且为1\3类型
				Condition=EIMS_C_46_1_OhterCondition(i,"IsShow=1 and [TypeId]="+ParentId)
				
				dt=ShoveEIMS3.Ajax.Ajax.EIMS3_GetDataTable(EIMS_C_46_1_T_TypeTable.replace("Types","s"),EIMS_C_46_1_ContentNameCol+",Id",Condition,"[Order]",0,0).value
			}
			else{
				Condition=EIMS_C_46_1_OhterCondition(i,"IsShow=1 and [ParentId]="+ParentId)
				var dt=ShoveEIMS3.Ajax.Ajax.EIMS3_GetDataTable(EIMS_C_46_1_T_TypeTable,EIMS_C_46_1_ContentNameCol+",Id",Condition,"[Order]",0,0).value
				IsParent=true
			}
		}
		else{
			return
		}
	//	var ListBox=document.getElementById(EIMS_C_46_1_LiSelect[i]);
	
	   var objSelect=document.getElementById(EIMS_C_46_1_Select[i]);
		//var SelectOne="<select name='"+EIMS_C_46_1_Select[i]+"' id='"+EIMS_C_46_1_Select[i]+"' style='width:100%;'>\r\n"
		objSelect.options.length = 0;  
	    // var varItem=new Option("请选择","请选择");
		// objSelect.options.add(varItem);	
		// objSelect.options[0].selected = true;  
		// objSelect.selectValue="请选择";
		var DispalyClumn="dt.Rows[a_i]."+EIMS_C_46_1_ContentNameCol
		if(dt!=null && dt.Rows!="undefined" && dt.Rows.length>0){
			if(i==1 && (EIMS_C_46_1_FilterType==1 || EIMS_C_46_1_FilterType==3)){
				if(EIMS_C_46_1_FilterType==1){
					//显现二级选项所有层次,传入NavigateId
					EIMS_C_46_1_ResetContent(dt,null,NavigateId,-1,objSelect)
				}
				else if(EIMS_C_46_1_FilterType==3){
					//显现二级选项所有层次,传入ParentId
					EIMS_C_46_1_ResetContent(dt,ParentId,null,-1,objSelect)
				}
			}
			else{//只显现二级选项一个层次
				for(var a_i=0;a_i<dt.Rows.length;a_i++){
					if(IsParent){
						//SelectOne+="<option selected='selected' value='"+dt.Rows[a_i].Id+"'>"+eval(DispalyClumn)+"</option>\r\n";
						varItem=new Option(eval(DispalyClumn),dt.Rows[a_i].Id);
						objSelect.options.add(varItem);						
					}else{
						//SelectOne+="<option selected='selected' value='I"+dt.Rows[a_i].Id+"'>"+eval(DispalyClumn)+"</option>\r\n";
						varItem=new Option(eval(DispalyClumn),"I"+dt.Rows[a_i].Id);
						objSelect.options.add(varItem);						
					}
				}
			}
		} 
		else if(EIMS_C_46_1_FilterType==3){//如果有下级层次,直接获取ParentId下的所有内容数据
			Condition=EIMS_C_46_1_OhterCondition(i,"IsShow=1 and [TypeId]="+ParentId)
			dt=ShoveEIMS3.Ajax.Ajax.EIMS3_GetDataTable(EIMS_C_46_1_T_Table,EIMS_C_46_1_ContentNameCol+",Id",Condition,"",0,0).value
			if(dt==null){return;}
			for(var a_i=0;a_i<dt.Rows.length;a_i++){
				// SelectOne+="<option selected='selected' value='I"+dt.Rows[a_i].Id+"'>"+eval(DispalyClumn)+"</option>\r\n"
				varItem=new Option(eval(DispalyClumn),"I"+dt.Rows[a_i].Id);
				objSelect.options.add(varItem);		
			}
		}
		
		//SelectOne+="</select>"
		//ListBox.innerHTML=SelectOne;
		
		//添加刷新事件
		var CSelected=document.getElementById(EIMS_C_46_1_Select[i])
		if (CSelected!="undefined" && EIMS_C_46_1_Select.length>i+1 && EIMS_C_46_1_Select.length>i+1){
			CSelected.onchange=function(){
				//刷新三级选项
				EIMS_C_46_1_RefreshSelect(i+1,CSelected.value,null);                                                        
			}
		}
		CSelected.selectedIndex=-1;
		//objSelect.[objSelect.selectedIndex].text="1213";
    }

    //获取一下阶层的数据
    var EIMS_C_46_1_GetNextLevelData=function(ParentId,NavigateId,Level){
        var LevelData=new Object();
        LevelData.Rows=new Array();
        var Tj=""
		var NavigateTj=""
        if(NavigateId!="undefined" && NavigateId!=null){
            NavigateTj="[NavigateId] in ("+NavigateId+")"
			Tj=NavigateTj+" and ParentId=-1"
        }
        else if(ParentId!="undefined" && ParentId!=null){
            Tj="IsShow=1 and [ParentId] in ("+ParentId+")"
        }
        else{return}
		
		Tj=EIMS_C_46_1_OhterCondition(Level,Tj)
		
        ParentId=""
		var NextDt=null;
        do{
            NextDt=ShoveEIMS3.Ajax.Ajax.EIMS3_GetDataTable(EIMS_C_46_1_T_TypeTable,"Name,Id,ParentId,NavigateId",Tj,"[Order]",0,0).value
            if(NextDt!=null && NextDt!="undefined" && NextDt.Rows.length>0){
                for(var a_i=0;a_i<NextDt.Rows.length;a_i++){
                    LevelData.Rows.push(NextDt.Rows[a_i])
                    if(EIMS_C_46_1_DisplayAllLevel && ParentId!=null){
                        ParentId+=ParentId==""?NextDt.Rows[a_i].Id:","+NextDt.Rows[a_i].Id
                    }
                }
            }
            else{break}
            
            if(!EIMS_C_46_1_DisplayAllLevel) break
			if(NavigateTj==""){Tj="IsShow=1 and [ParentId] in ("+ParentId+")"}
			else{Tj="IsShow=1 and [ParentId] in ("+ParentId+") and "+NavigateTj}
            ParentId=""
        }while(NextDt!=null && NextDt!="undefined" && NextDt.Rows.length>0)
        return LevelData
    }

    //重置下拉菜单内容
    var EIMS_C_46_1_ResetContent=function(DataList,ParentId,NavigateId,level,objSelect){
      //  var SelectOne=""
        level+=1
        if(NavigateId!="undefined" && NavigateId!=null){
            for(var a_i=0;a_i<DataList.Rows.length;a_i++){
                if(DataList.Rows[a_i].NavigateId==NavigateId && DataList.Rows[a_i].ParentId==-1){
					
                    // SelectOne+="<option selected='selected' value='"+DataList.Rows[a_i].Id+"'>"+EIMS_C_46_1_AddSpace(level)+DataList.Rows[a_i].Name+"</option>\r\n"
                    // SelectOne+=EIMS_C_46_1_ResetContent(DataList,DataList.Rows[a_i].Id,null,level)
					var varItem=new Option(EIMS_C_46_1_AddSpace(level)+DataList.Rows[a_i].Name,DataList.Rows[a_i].Id);
					objSelect.options.add(varItem);		
					EIMS_C_46_1_ResetContent(DataList,DataList.Rows[a_i].Id,null,level,objSelect)
                }
            }
        }
        else{
            for(var a_i=0;a_i<DataList.Rows.length;a_i++){
                if(DataList.Rows[a_i].ParentId==ParentId){
                    // SelectOne+="<option selected='selected' value='"+DataList.Rows[a_i].Id+"'>"+EIMS_C_46_1_AddSpace(level)+DataList.Rows[a_i].Name+"</option>\r\n"
                    // SelectOne+=EIMS_C_46_1_ResetContent(DataList,DataList.Rows[a_i].Id,null,level)
					var varItem=new Option(EIMS_C_46_1_AddSpace(level)+DataList.Rows[a_i].Name,DataList.Rows[a_i].Id);
					objSelect.options.add(varItem);	
					EIMS_C_46_1_ResetContent(DataList,DataList.Rows[a_i].Id,null,level,objSelect)
                }
            }    
        }
      //  return SelectOne
    }
	
	//排除/指定条件
	var EIMS_C_46_1_OhterCondition=function(Level,InCondition){
		if(Level==1){
			if(EIMS_C_46_1_TwoReject!=""){
				InCondition+=InCondition==""?"[id] not in ("+EIMS_C_46_1_TwoReject+")":" and [id] not in ("+EIMS_C_46_1_TwoReject+")"
			}
			if(EIMS_C_46_1_TwoAllocate!=""){
				InCondition+=InCondition==""?"[id] in ("+EIMS_C_46_1_TwoAllocate+")":" and [id] in ("+EIMS_C_46_1_TwoAllocate+")"
			}
		}
		else if(Level==2){
		if(EIMS_C_46_1_ThreeReject!=""){
				InCondition+=InCondition==""?"[id] not in ("+EIMS_C_46_1_ThreeReject+")":" and [id] not in ("+EIMS_C_46_1_ThreeReject+")"
			}
			if(EIMS_C_46_1_ThreeAllocate!=""){
				InCondition+=InCondition==""?"[id] in ("+EIMS_C_46_1_ThreeAllocate+")":" and [id] in ("+EIMS_C_46_1_ThreeAllocate+")"
			}
		}
		return InCondition;
	}

    //下级内容缩进
    var EIMS_C_46_1_AddSpace=function(SpaceNumbers){
        var Result=""
        for(var a_i=0;a_i<SpaceNumbers;a_i++){
             Result+="        ";
        }
        return Result;
    }

    //检查目标
    var EIMS_C_46_1_CheckSource=function(SourceName){
		try{
			EIMS_C_46_1_T_TypeTable=SourceName
			//EIMS_C_46_1_T_Table=EIMS_C_46_1_T_TypeTable.replace("Types","")
			EIMS_C_46_1_T_Table=EIMS_C_46_1_T_TypeTable;
			if(EIMS_C_46_1_T_TypeTable.indexOf("Types",0)>0) return true;
			if(EIMS_C_46_1_T_TypeTable.indexOf("New",0)>0){
				EIMS_C_46_1_ContentNameCol="Title"
			}
			else{
				EIMS_C_46_1_T_Table+="s"
				if(EIMS_C_46_1_T_TypeTable.indexOf("Advisor",0)>0){
					EIMS_C_46_1_ContentNameCol="AuthorName"
				}else{
					EIMS_C_46_1_ContentNameCol="Name"
				}
			}
		}
		catch(err){
			return false;
		}
		return true;
    }
	
	
	//获取下级ID
	var EIMS_C_46_1_GetNextId=function(upid,SelectIndex,OptionIndex){
		var EIMS_C_46_1_SELECT=document.getElementById(EIMS_C_46_1_Select[SelectIndex])
		var spacelength=EIMS_C_46_1_LEVEL(EIMS_C_46_1_SELECT.options[OptionIndex].text,0)
		var Result=upid
		for(var a_i=OptionIndex+1;a_i<EIMS_C_46_1_SELECT.options.length;a_i++){
			var dd=escape(EIMS_C_46_1_SELECT.options[a_i].text)
			if(dd.indexOf("%A0%A0",spacelength+1)<0){break;}
			Result+=Result==""?EIMS_C_46_1_SELECT[a_i].value:","+EIMS_C_46_1_SELECT[a_i].value
		}

		return Result
	}
	
	//判断层次
	var EIMS_C_46_1_LEVEL=function(SelectOption,SearchIndex){
		var cc=escape(SelectOption)
		if(document.all){return cc.lastIndexOf("%A0%A0")}//IE
		
		if(cc.indexOf("%A0%A0",SearchIndex)>=0){
			return EIMS_C_46_1_LEVEL(SelectOption,SearchIndex+1)
		}
		return SearchIndex-1
	}

    //搜索
    var EIMS_C_46_1_Search=function(){
	if(EIMS_C_46_1_SearchControlType!="undefined" && EIMS_C_46_1_SearchControlType!=null)
	{
		var KeyString=document.getElementById("EIMS_C_46_1_KeyValue");
		var Condition="";
		if(EIMS_C_46_1_SearchControlType=="1")
		{
			var DropDownOne=document.getElementById(EIMS_C_46_1_Select[0]);
			var DropDownTwo=document.getElementById(EIMS_C_46_1_Select[1]);
			var DropDownThree=document.getElementById(EIMS_C_46_1_Select[2]);
			EIMS_C_46_1_Condition="";
			//基本验证,保证程序的运行
			if (EIMS_C_46_1_FilterType== 1){
				if (!EIMS_C_46_1_IsShowSOne){return}
		
				if (EIMS_C_46_1_IsShowSThree && DropDownThree.selectedIndex>-1){
					window.open(EIMS_C_46_1_ResultURL+"?ID="+DropDownThree.value.substring(1));
					return;
				}
		
				if (EIMS_C_46_1_IsShowSTwo  && DropDownTwo.selectedIndex>-1){
					//追加类别范围条件语句。
					 Condition= " [TypeId] = "+DropDownTwo.value;
				}else{
					//查询类别ID 条件：所有栏目ID = 一级下拉的ID
					//查询ID 属于 类别ID
					var dt=ShoveEIMS3.Ajax.Ajax.EIMS3_GetDataTable(SeconedCaseTable[0],"[Id]","NavigateId=3 and isShow=1","",0,0).value;
					var typeList="";
						for(var a_i=0;a_i<dt.Rows.length;a_i++){
							if(a_i==dt.Rows.length-1)
							{
								typeList+=dt.Rows[a_i].Id;
							}else{
								typeList+=dt.Rows[a_i].Id+",";
							}
						}
					 
					Condition= " [TypeId] in ( "+typeList +")";
				}
					
			}
			else if (EIMS_C_46_1_FilterType == 2){
				if (EIMS_C_46_1_IsShowSThree && DropDownThree.selectedIndex>-1){
						Condition = " [TypeId]= " +DropDownThree.value;
				}
				else if (EIMS_C_46_1_IsShowSTwo && DropDownTwo.selectedIndex>-1){
					
						Condition = " [TypeId]=" + DropDownTwo.value;
					
				}
				else if (EIMS_C_46_1_IsShowSOne && DropDownOne.selectedIndex>-1){
					Condition = " [TypeId]=" + DropDownOne.value;
				}
			}
			else if (EIMS_C_46_1_FilterType == 3){
				if (EIMS_C_46_1_IsShowSThree && DropDownThree.selectedIndex>-1){
					window.open(EIMS_C_46_1_ResultURL+"?ID="+DropDownThree.value.substring(1));
				   return;
				}
				else if (EIMS_C_46_1_IsShowSTwo && DropDownTwo.selectedIndex>-1){
				   
					 Condition = " [TypeId]=" + DropDownTwo.value;
				   
				}
				else if (EIMS_C_46_1_IsShowSOne && DropDownOne.selectedIndex>-1){
					Condition = " [TypeId]=" + DropDownOne.value;
				}
				
				if(EIMS_C_46_1_FilterType!="4" && Condition==""){
					alert("请输入搜索条件");
					return
				}
			}
			else if (EIMS_C_46_1_FilterType == 4 || EIMS_C_46_1_FilterType == 5){
				// var CaseTableIndex = 0;
				// if (EIMS_C_46_1_IsShowSOne && DropDownOne.selectedIndex>0){
					// Condition = EIMS_C_46_1_CaseTableColumn[CaseTableIndex] + "='" + DropDownOne.options[DropDownOne.selectedIndex].text.trim() + "'"
				// }
				// CaseTableIndex++;
		
				// if (EIMS_C_46_1_IsShowSTwo && DropDownTwo.selectedIndex>0){
					// Condition += Condition==""? " " + EIMS_C_46_1_CaseTableColumn[CaseTableIndex] + "='" + DropDownTwo.options[DropDownTwo.selectedIndex].text.trim()+ "'" : " and " + EIMS_C_46_1_CaseTableColumn[CaseTableIndex] + "='" + DropDownTwo.options[DropDownTwo.selectedIndex].text.trim()+ "'";
				// }
				// CaseTableIndex++;
				// if (EIMS_C_46_1_IsShowSThree && DropDownThree.selectedIndex>0){
					// Condition += Condition=="" ? " " + EIMS_C_46_1_CaseTableColumn[CaseTableIndex] + "='" + DropDownThree.options[DropDownThree.selectedIndex].text.trim() + "'" : " and " + EIMS_C_46_1_CaseTableColumn[CaseTableIndex] + "='" + DropDownThree.options[DropDownThree.selectedIndex].text.trim() + "'";
				// }
				Condition="1=1";
			} 
			//关键字左边长度、关键字右边长度、标题长度。
			if(KeyString.value=="" && EIMS_C_46_1_FilterType!=4)
			{
				 alert("请输入搜索条件");
				 return;
			}
		}
		else if(EIMS_C_46_1_SearchControlType=="2")
		{
			 var TypeId= document.getElementById("EIMS_C_46_1_TypeID").value;
			 if(TypeId=="") {alert("请选择搜索条件");return;}
			 if(KeyString.value=="") {alert("请输入搜索关键字");return;}
			 Condition = " [TypeId]=" + TypeId;
		}
	}
		var URL=EIMS_C_46_1_ResultURL+"?type="+EIMS_C_46_1_FilterType+"&keyValue="+escape(KeyString.value)+"&Condition="+escape(Condition)+"&leftCount="+EIMS_C_46_1_LeftCount+"&rightCount="+EIMS_C_46_1_RightCount+"&titleCount="+EIMS_C_46_1_TitleCount+"&onlyTitle="+EIMS_C_46_1_IsShowSOnlyTitle+"&RepeatCutCount="+EIMS_C_46_1_RepeatCutCount;
		
		if(EIMS_C_46_1_OpenRULType=="_blank"){
			window.open(URL);
		}else{
			window.location=URL	;
		}
    }
    
    $("#EIMS_C_46_1_Search").click(function(){EIMS_C_46_1_Search()})
    $("#EIMS_C_46_1_Search").css("cursor","pointer")
    

	
    if(EIMS_C_46_1_FilterType==4){
        EIMS_C_46_1_T_TypeTable=null
        EIMS_C_46_1_T_Table=document.getElementById("EIMS_C_46_1_Paras").getAttribute("TargetTable")
        return
    }

    //初始化选项
    // if(EIMS_C_46_1_IsShowSTwo){document.getElementById("EIMS_C_46_1_STwo").innerHTML=""}
    // if(EIMS_C_46_1_IsShowSThree){document.getElementById("EIMS_C_46_1_SThree").innerHTML=""}
    if(EIMS_C_46_1_SearchControlType!="undefined" && EIMS_C_46_1_SearchControlType!=null && EIMS_C_46_1_SearchControlType=="1")
	{
		var SelectedOne=document.getElementById(EIMS_C_46_1_Select[0])
		if (SelectedOne!="undefined"){
			SelectedOne.onchange=function(){
				//刷新二级选项
				if(EIMS_C_46_1_FilterType==1){
					var dt=ShoveEIMS3.Ajax.Ajax.EIMS3_GetDataTable("T_NavigateTypes","KeyTable","[Id] in (select TypeId from T_Navigates where [Id]="+SelectedOne.value+")","",0,1).value
					if(dt!=null && dt.Rows.length>0){
						if(!EIMS_C_46_1_CheckSource(dt.Rows[0].KeyTable)){
							if(EIMS_C_46_1_IsShowSTwo){document.getElementById("EIMS_C_46_1_STwo").innerHTML=""}
							if(EIMS_C_46_1_IsShowSThree){document.getElementById("EIMS_C_46_1_SThree").innerHTML=""}
							return;
						}
					}
					if(!EIMS_C_46_1_IsShowSTwo){return;}
					EIMS_C_46_1_RefreshSelect(1,null,SelectedOne.value)    
				}
				else{
					EIMS_C_46_1_CheckSource(EIMS_C_46_1_T_TypeTable)
					if(EIMS_C_46_1_T_TypeTable=="T_Navigates"){alert("当前的一级搜选项数据绑定和搜索类型不区配,请重新设置");return;}
					if(!EIMS_C_46_1_IsShowSTwo){return;}
					EIMS_C_46_1_RefreshSelect(1,SelectedOne.value,null)    
				}
				
				if(EIMS_C_46_1_IsShowSTwo)EIMS_C_46_1_RefreshSelect(2,0,null)    
			}
		}
	}
})