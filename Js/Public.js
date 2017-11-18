var __wsa_start_time=new Date().getTime();function checkhtmls(obj){obj.href=ShoveEIMS3.Ajax.Ajax.CheckHtmls(obj.href).value;}
function ShoveWebControl_VideoPlay(filename,width,height){if(filename!=""){document.write("<object id='NSPlay' width="+width+" height="+height+" classid='CLSID:22d6f312-b0f6-11d0-94ab-0080c74c7e95' codebase='http://fpdownload.adobe.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,124,0' standby='Loading Microsoft Windows Media Player components...' type='application/x-oleobject' align='center' hspace='5'>");document.write("<param name='PlayCount' value=0>");document.write("<param name='AutoRewind' value='1'>");document.write("<param NAME='Balance' VALUE='0'> ");document.write("<param name='FileName' value='"+filename+"'>");document.write("<param name='ShowControls' value='1'>");document.write("<param name='ShowPositionControls' value='0'>");document.write("<param name='ShowDisplay' value='0'>");document.write("<param name='ShowStatusBar' value='1'>");document.write("<param name='volume' value='100%'> ");document.write("<param name='ShowAudioControls' value='1'>");document.write("<param name='ShowTracker' value='1'>");document.write("<param name='ShowDisplay' value='0'>");document.write("<param name='ShowStatusBar' value='0'>");document.write("<param name='ShowGotoBar' value='0'>");document.write("<param name='ShowCaptioning' value='0'>");document.write("<param name='AutoStart' value=1>");document.write("<param name='Volume' value='-2500'>");document.write("<param name='AnimationAtStart' value='0'>");document.write("<param name='TransparentAtStart' value='0'>");document.write("<param name='AllowChangeDisplaySize' value='0'>");document.write("<param name='AllowScan' value='0'>");document.write("<param name='EnableContextMenu' value='0'>");document.write("<param name='DisplayBackColor' value='0'>");document.write("<param name='ClickToPlay' value='0'>");document.write("</object>");}}
function ShoveWebControl_FlashPlay(Src,Width,Height,isTransparent){document.write('<OBJECT codeBase="http://fpdownload.adobe.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,124,0"\n');document.write('height="'+Height+'" width="'+Width+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" VIEWASTEXT>\n');document.write('<PARAM NAME="_cx" VALUE="16536">\n');document.write('<PARAM NAME="_cy" VALUE="1852">\n');document.write('<PARAM NAME="FlashVars" VALUE="">\n');document.write('<PARAM NAME="Movie" VALUE="'+Src+'">\n');document.write('<PARAM NAME="Src" VALUE="'+Src+'">\n');if(isTransparent==1){document.write('<PARAM NAME="WMode" VALUE="transparent">\n');}else{document.write('<PARAM NAME="WMode" VALUE="Opaque">\n');}
document.write('<PARAM NAME="Play" VALUE="-1">\n');document.write('<PARAM NAME="Loop" VALUE="-1">\n');document.write('<PARAM NAME="Quality" VALUE="High">\n');document.write('<PARAM NAME="SAlign" VALUE="">\n');document.write('<PARAM NAME="Menu" VALUE="-1">\n');document.write('<PARAM NAME="Base" VALUE="">\n');document.write('<PARAM NAME="AllowScriptAccess" VALUE="">\n');document.write('<PARAM NAME="Scale" VALUE="ShowAll">\n');document.write('<PARAM NAME="DeviceFont" VALUE="0">\n');document.write('<PARAM NAME="EmbedMovie" VALUE="0">\n');document.write('<PARAM NAME="BGColor" VALUE="">\n');document.write('<PARAM NAME="SWRemote" VALUE="">\n');document.write('<PARAM NAME="MovieData" VALUE="">\n');document.write('<PARAM NAME="SeamlessTabbing" VALUE="1">\n');document.write('<PARAM NAME="Profile" VALUE="0">\n');document.write('<PARAM NAME="ProfileAddress" VALUE="">\n');document.write('<PARAM NAME="ProfilePort" VALUE="0">\n');document.write('<PARAM NAME="AllowNetworking" VALUE="all">\n');if(isTransparent==1){document.write('<embed pluginspage="http://www.macromedia.com/go/getflashplayer" src="'+Src+'" width="'+Width+'" height="'+Height+'" type="application/x-shockwave-flash" quality="high" wmode="transparent"></embed>\n');}else{document.write('<embed pluginspage="http://www.macromedia.com/go/getflashplayer" src="'+Src+'" width="'+Width+'" height="'+Height+'" type="application/x-shockwave-flash" quality="high"></embed>\n');}
document.write('</OBJECT>\n');}
function ShoveEIMS3_BindCitys(sender,city,cityFirstText,language){var dt=ShoveEIMS3.Web.UI.WebControls.ShoveWebControl_ProvinceAndCity.GetCitys(sender.value,language).value;var Citys=document.getElementById(city);Citys.options.length=0;Citys.options.add(new Option(cityFirstText,"-1"));if(dt!=null&&dt.Rows.length>0){for(var i=0;i<dt.Rows.length;i++){Citys.options.add(new Option(dt.Rows[i]["Name"].toString(),dt.Rows[i]["Id"].toString()));}}}
function ShoveEIMS3_SelectCity(sender,cityId){document.getElementById(cityId)=sender.value;}
function ShoveEIMS3_CheckUserNameOnFocus(tb,css,focusId,errorId,existsId,trueId){tb.className=css;if(document.getElementById(focusId)!=null){document.getElementById(focusId).style.display="inline";}
if(document.getElementById(errorId)!=null){document.getElementById(errorId).style.display="none";}
if(document.getElementById(existsId)!=null){document.getElementById(existsId).style.display="none";}
if(document.getElementById(trueId)){document.getElementById(trueId).style.display="none";}}
function ShoveEIMS3_CheckUserNameOnBlur(tb,css,focusId,errorId,existsId,trueId){var value=tb.value;var patrn=/^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/;var focus=document.getElementById(focusId);var error=document.getElementById(errorId);var exists=document.getElementById(existsId);var trues=document.getElementById(trueId);if(!patrn.exec(value.replace(" ","")=="")){if(error!=null){error.style.display="inline";}
if(focus!=null){focus.style.display="none";}
if(exists!=null){exists.style.display="none";}
if(trues!=null){trues.style.display="none";}
tb.className=css;}
var result=ShoveEIMS3.Web.UI.WebControls.ShoveWebControl_UserName.ShoveEIMS3_CheckUserNameExists(value).value;if(result){if(error!=null){error.style.display="none";}
if(focus!=null){focus.style.display="none";}
if(exists!=null){exists.style.display="inline";}
if(trues!=null){trues.style.display="none";}
tb.className=css;}else{if(error!=null){error.style.display="none";}
if(focus!=null){focus.style.display="none";}
if(exists!=null){exists.style.display="none";}
if(trues!=null){trues.style.display="inline";}}}
function ShoveEIMS3_CheckResigterNewPassOnFocus(tb,css,focusId,errorId){tb.className=css;if(document.getElementById(focusId)!=null){document.getElementById(focusId).style.display="inline";}
if(document.getElementById(errorId)!=null){document.getElementById(errorId).style.display="none";}}
function ShoveEIMS3_CheckResigterNewPassOnBlur(tb,focuscss,errorcss,focusId,errorId,trueId){tb.className=focuscss;if(/^(\w){6,20}$/.test(tb.value)){if(document.getElementById(trueId)!=null){document.getElementById(trueId).style.display="inline";}
if(document.getElementById(focusId)!=null){document.getElementById(focusId).style.display="none";}
if(document.getElementById(errorId)!=null){document.getElementById(errorId).style.display="none";}}else{if(document.getElementById(trueId)!=null){document.getElementById(trueId).style.display="none";}
if(document.getElementById(focusId)!=null){document.getElementById(focusId).style.display="none";}
if(document.getElementById(errorId)!=null){document.getElementById(errorId).style.display="inline";}
document.getElementById(errorId).className=errorcss;}}
function ShoveEIMS3_CheckResigterPassStrong(value,defaultcss,checkcss,td1,td2,td3){if(value.length>10&&/[a-z]/.test(value)&&/[0-9]/.test(value)){document.getElementById(td2).className=checkcss;document.getElementById(td1).className=defaultcss;document.getElementById(td3).className=defaultcss;}else if(value.length>10&&/[a-z]/.test(value)&&/[A-Z]/.test(value)&&/[0-9]/.test(value)){document.getElementById(td3).className=checkcss;document.getElementById(td1).className=defaultcss;document.getElementById(td2).className=defaultcss;}else{document.getElementById(td1).className=checkcss;document.getElementById(td3).className=defaultcss;document.getElementById(td2).className=defaultcss;}}
function ShoveEIMS3_CheckResigterConfirmPassOnFocus(tb,css,focusId,errorId,diffId){tb.className=css;if(document.getElementById(focusId)!=null){document.getElementById(focusId).style.display="inline";}
if(document.getElementById(errorId)!=null){document.getElementById(errorId).style.display="none";}
if(document.getElementById(diffId)!=null){document.getElementById(diffId).style.display="none";}}
function ShoveEIMS3_CheckResigterConfirmPassOnBlur(tb,newId,defaultcss,errorcss,focusId,errorId,diffId,trueId){if(document.getElementById(newId).value!=tb.value){if(document.getElementById(focusId)!=null){document.getElementById(focusId).style.display="none";}
if(document.getElementById(errorId)!=null){document.getElementById(errorId).style.display="none";}
if(document.getElementById(diffId)!=null){document.getElementById(diffId).style.display="inline";}
if(document.getElementById(trueId)!=null){document.getElementById(trueId).style.display="none";}
document.getElementById(diffId).className=errorcss;return false;}
if(!/^(\w){6,20}$/.test(tb.value)){if(document.getElementById(focusId)!=null){document.getElementById(focusId).style.display="none";}
if(document.getElementById(errorId)!=null){document.getElementById(errorId).style.display="inline";}
if(document.getElementById(diffId)!=null){document.getElementById(diffId).style.display="none";}
if(document.getElementById(trueId)!=null){document.getElementById(trueId).style.display="none";}
document.getElementById(errorId).className=errorcss;return false;}
if(document.getElementById(focusId)!=null){document.getElementById(focusId).style.display="none";}
if(document.getElementById(errorId)!=null){document.getElementById(errorId).style.display="none";}
if(document.getElementById(diffId)!=null){document.getElementById(diffId).style.display="none";}
if(document.getElementById(trueId)!=null){document.getElementById(trueId).style.display="inline";}
tb.className=defaultcss;}
function ShoveEIMS3_Cart_ChangeAmount(id,tb,type){ShoveEIMS3.Web.UI.WebControls.ShoveWebControl_Cart.ChangeAmount(id,tb.value,type);}
function ShoveEIMS3_Cart_DeleteProduct(id){ShoveEIMS3.Web.UI.WebControls.ShoveWebControl_Cart.DeleteProduct(id);document.getElementById("CartTr"+id.toString()).style.display="none";}
function ShoveEIMS3_Transf(sender,resultPage,keywordId,searchControlId,isMustKey){var tb=document.getElementById(keywordId);var nId="";var key="";var typeId="";if(tb!=null){if(tb.value.replace(" ","")==""||tb.value.replace(" ","")==tb.getAttribute("DefaultText")){if(isMustKey){alert("请输入关键字!");return;}}else{key="key="+encodeURI(tb.value);}}
for(var index=1;index<20;index++){var ddl=document.getElementById(searchControlId+"_"+index);if(ddl==null||typeof ddl==undefined){break;}
if(ddl.value=="-1"){break;}
if(index==1&&sender.getAttribute("LevelOneType")=="1"){nId="NId="+ddl.value;}else{typeId="TypeId="+ddl.value;}}
var url=resultPage.indexOf("?")>0?resultPage+(nId==""?"":"&"+nId):resultPage+(nId==""?"":"?"+nId);url+=url.indexOf("?")>0?(typeId==""?"":"&"+typeId):(typeId==""?"":"?"+typeId);url+=url.indexOf("?")>0?(key==""?"":"&"+key):(key==""?"":"?"+key);if(document.all){window.location.href(url);}else{window.location=url;}}
function ShoveEIMS3_Search(sender,onelevelType,tbName){var senderIndex=sender.id.substring(sender.id.lastIndexOf("_")+1);var idPrefix=sender.id.substring(0,sender.id.lastIndexOf("_")+1);for(var j=0;j<20;j++){var nextSelect=document.getElementById(idPrefix+(parseInt(senderIndex)+j+1));if(nextSelect==null||typeof nextSelect==undefined){return;}
var defaultText=nextSelect.getAttribute("DefaultText");nextSelect.innerHTML="";nextSelect.options.add(new Option(defaultText,"-1"));if(j==0&&sender.value>-1){var dt=null;if(onelevelType=="1"){var naviId=document.getElementById(idPrefix+"1").value;if(senderIndex==1){dt=ShoveEIMS3.Web.UI.WebControls.ShoveWebControl_Search.GetOneLevel(naviId,-1,tbName).value;}else{dt=ShoveEIMS3.Web.UI.WebControls.ShoveWebControl_Search.GetOneLevel(naviId,sender.value,tbName).value;}}else if(onelevelType=="2"){dt=ShoveEIMS3.Web.UI.WebControls.ShoveWebControl_Search.GetOneLevel(-1,sender.value,tbName).value;}
if(dt!=null&&dt.Rows.length>0){for(var i=0;i<dt.Rows.length;i++){nextSelect.options.add(new Option(dt.Rows[i]["Name"].toString(),dt.Rows[i]["Id"].toString()));}}}}}
function SelectSearch(containerId,resultPage,rangFields,isOpenNewWindow){if(resultPage==""||resultPage==null||typeof resultPage==undefined){return;}
function SelectorRadio(obj,array){var node=obj.children;for(var i=0;i<node.length;i++){if(node[i].type=="radio"&&node[i].checked){array.push(node[i]);}else{SelectorRadio(node[i],array);}}}
function GetRangCondition(){var paras="";if(rangFields!=null&&rangFields!=""){var ctrls=rangFields.split(';');for(var i=0;i<ctrls.length;i++){var c=ctrls[i].split(',');if(c.length<2||c[0]==""||c[1]==""){continue;}
var from=document.getElementById(containerId+"_"+c[0]);if(from==null||typeof from==undefined){from=document.getElementById(c[0]);}
var to=document.getElementById(containerId+"_"+c[1]);if(to==null||typeof to==undefined){to=document.getElementById(c[1]);}
if(from==null||typeof from==undefined||to==null||typeof to==undefined){continue;}
if(from.selectedIndex==0||to.selectedIndex==0){continue;}
var fromNum=parseInt(from.value.trim());var toNum=parseInt(to.value.trim());if(isNaN(fromNum)||isNaN(toNum)){continue;}
if(fromNum>toNum){var temp=fromNum;fromNum=toNum;toNum=temp;}
var p=BuildConditionPara(from.getAttribute("FoundField"),fromNum+","+toNum,"datetime");paras+=paras==""?p:"&"+p;}}
return paras;}
function Recursion(parent){var paras="";var child=parent.children;if(child==null||typeof child==undefined||child.length==0){return paras;}
for(var i=0;i<child.length;i++){var id=child[i].id;if(!IsNullOrEmpty(rangFields)&&!IsNullOrEmpty(id)&&((rangFields+",").indexOf(id+",")>-1||rangFields.indexOf(id+";")>-1)){continue;}
var sId=id.split('_');if(sId.length>1&&!IsNullOrEmpty(rangFields)&&!IsNullOrEmpty(id)&&((rangFields+",").indexOf(sId[sId.length-1]+",")>-1||rangFields.indexOf(sId[sId.length-1]+";")>-1)){continue;}
var type=child[i].getAttribute("type");var p="",compareWay="1";if(child[i].getAttribute("Type")=="RadioList"){var findField=child[i].getAttribute("FoundField");compareWay=child[i].getAttribute("CompareWay");var radios=new Array();if(document.all){SelectorRadio(child[i],radios);}else{radios=child[i].querySelectorAll("input:checked");}
for(var ix=0;ix<radios.length;ix++){if(radios[ix].checked){if(compareWay=="1"){p=BuildConditionPara(findField,radios[ix].value,"select");}else if(compareWay=="2"){p=BuildConditionPara(findField,radios[ix].value,"text");}}}
if(IsNullOrEmpty(p)){continue;}
paras+=paras==""?p:"&"+p}else if(/^<(select|SELECT)/.test(child[i].outerHTML)){if(child[i].selectedIndex>0){compareWay=child[i].getAttribute("CompareWay");if(/\d+-\d+\d$/.test(child[i].value)){var v=child[i].value.replace("－","-").split('-');if(v.length!=2){alert("不正确的下拉值");return;}
p=BuildConditionPara(child[i].getAttribute("FoundField"),v[0]+","+v[1],"datetime");}else if(compareWay=="1"){p=BuildConditionPara(child[i].getAttribute("FoundField"),child[i].value,"select");}else if(compareWay=="2"){p=BuildConditionPara(child[i].getAttribute("FoundField"),child[i].value,"text");}
if(IsNullOrEmpty(p)){continue;}
paras+=paras==""?p:"&"+p}}else if(type!=null&&typeof type!=undefined&&type.toLowerCase()=="text"){if(child[i].value!=""){compareWay=child[i].getAttribute("CompareWay");if(compareWay=="1"){p=BuildConditionPara(child[i].getAttribute("FoundField"),child[i].value.trim(),"select");}else if(compareWay=="2"){p=BuildConditionPara(child[i].getAttribute("FoundField"),child[i].value.trim(),"text");}
if(IsNullOrEmpty(p)){continue;}
paras+=paras==""?p:"&"+p;}}else if(child[i].children.length>0){var childrenNode=Recursion(child[i]);paras+=childrenNode==""?"":paras==""?childrenNode:"&"+childrenNode;}}
return paras;}
var container=document.getElementById(containerId);condition=Recursion(container);var cnd2=GetRangCondition();condition+=condition==""?cnd2:cnd2==""?"":"&"+cnd2;if(condition==""){alert("请选择查询选项");return false;}
var condition=escape(condition);var url=resultPage.indexOf("?")>0?resultPage+"&cnd="+condition:resultPage+"?cnd="+condition;if(isOpenNewWindow){var newWindow=window.open(url,"_blank");if(IsNullOrEmpty(newWindow)){var form=$(document).find("form:first");if(form.length==0){alert("请在页面里面添加 form 标签");return;}
var actionUrl=form.attr("action");var actionTarget=form.attr("target");form.attr({action:url,target:"_blank"});form.submit();setTimeout(function(){$(document).find("form:first").attr({action:actionUrl,target:actionTarget});},1000);}}else{document.location.href=url;}}
function BuildConditionPara(fields,value,type){if(fields==""||fields==null||typeof fields==undefined){return"";}
if(value==""||value==null||typeof value==undefined){return"";}
var f=fields.split(',');var result="";for(var i=0;i<f.length;i++){var op="";if(type.toLowerCase()=="select"){op=":";}else if(type.toLowerCase()=="text"){op="%";}else if(type.toLowerCase()=="datetime"){op="@";}else if(type.toLowerCase()=="in"){op="?";}else{continue;}
result+=result==""?f[i]+op+value:"|"+f[i]+op+value;}
return result;}
function ShoveEIMS3_Complate(e,objId){var e=e||window.event;var key=parseInt(e.keyCode||e.which||e.charCode);if(key==13){$("#"+objId).click();}}
function ShoveEIMS3_OnKeyPress(evt,sender){evt=evt?evt:(window.event?window.event:null);if(evt.keyCode==13){evt.returnValue=false;if(evt.preventDefault){evt.preventDefault();}
if(document.all){document.getElementById(sender).click();}else{var bb=document.createEvent("MouseEvents");bb.initEvent("click",true,true);document.getElementById(sender).dispatchEvent(bb);}}}
function ShoveEIMS3_OnKeyDown(evt,sender){var e=event||window.Event;if(e.keyCode==13){e.returnValue=false;if(e.preventDefault){e.preventDefault();}}}
function ShoveEIMS3_ShowPrompt(obj,text){if((obj.value=="")||(obj.value==text)){obj.value="";}}
function ShoveEIMS3_HidPrompt(obj,text){if(obj.value==""){obj.value=text;}}
function ShoveEIMS3_MultipleChoice(ContainerId,HideId){if($("#"+HideId).length>0){var temp="";$("#"+ContainerId).find('input[type="checkbox"]').each(function(){if($(this).attr("checked")){if(temp==""){temp+=$(this).attr("Title");}else{temp+=","+$(this).attr("Title");}}});$("#"+HideId).val(temp);}}
function ShoveEIMS3_Unselected(ContainerId,HideId){$("#"+ContainerId).find('input[type="checkbox"]').each(function(){if($(this).attr("checked")){$(this).removeAttr("checked");}else{$(this).attr("checked","checked");}});ShoveEIMS3_MultipleChoice(ContainerId,HideId);}
function ShoveEIMS3_SelectAll(obj,ContainerId,HideId){if($(obj).attr("checked")){$("#"+ContainerId).find('input[type="checkbox"]').each(function(){$(this).attr("checked","true");});}else{$("#"+ContainerId).find('input[type="checkbox"]').each(function(){$(this).removeAttr("checked");});}
ShoveEIMS3_MultipleChoice(ContainerId,HideId);}
function ShoveEIMS3_NavigateMenu(obj,type,beforeExpend,afterExpend,expandclass,closedClass){var li=$("#TypeNavigateV_Main>ul>li>div>ul>li");var obj1=$(li).children("span");li.children("div").each(function(index,element){if(type=="text"){$(obj1).text(beforeExpend);}
if(type=="img"){$(obj1).html("<img src=\""+beforeExpend+"\">");}
$(obj1).css("cursor","pointer");$(this).css("display","none");});ShoveEIMS3_OpenOrContraction(obj,type,beforeExpend,afterExpend,expandclass,closedClass);}
function ShoveEIMS3_OpenOrContraction(obj,type,beforeExpend,afterExpend,expandclass,closedClass){var li=$(obj).parent("li");var eclass=expandclass.split(',');var cclass=closedClass.split(',');obj=li.children("span");if(li.children("div").size()>0&&afterExpend!=""){if(type=="text"){if($(obj).text()==beforeExpend){$(obj).text(afterExpend);}else{$(obj).text(beforeExpend);}}
if(type=="img"){if($(obj).find("img").attr("src").indexOf(beforeExpend)>-1){$(obj).html("<img src=\""+afterExpend+"\">");}else{$(obj).html("<img src=\""+beforeExpend+"\">");}}}
var top=$(li).parent().parent();if(top.length>0&&top.attr("id")!="TypeNavigateV_Main"){var id=$(li).attr("id");$(li).parent().children("li").each(function(){var thisid=$(this).attr("id");var level=parseInt(thisid.split('_')[2]);if(thisid==id){if(level<eclass.length){$(this).attr("class",eclass[level]);if((level+1)<cclass.length){$(this).children("div").children("ul").children("li").each(function(){$(this).attr("class",cclass[level+1]);});}}}else{var closedclass=thisid.substring(0,thisid.lastIndexOf("_"));if((level+1)<cclass.length){closedclass=cclass[level];}
$(this).attr("class",closedclass);var span=$(this).children("span:eq(0)");if(span.attr("type")=="text"){if($(this).children("div").size()>0){$(span).text(beforeExpend);}else{$(span).text(afterExpend);}}else if(span.attr("type")=="img"){if($(this).children("div").size()>0){$(span).html("<img src=\""+beforeExpend+"\">");}else{$(span).html("<img src=\""+afterExpend+"\">");}}
$(this).find("div").slideUp("fast");$(this).find("li").each(function(){$(this).attr("class",closedclass);var span=$(this).children("span:eq(0)");if(span.attr("type")=="text"){if($(this).children("div").size()>0){$(span).text(beforeExpend);}else{$(span).text(afterExpend);}}else if(span.attr("type")=="img"){if($(this).children("div").size()>0){$(span).html("<img src=\""+beforeExpend+"\">");}else{$(span).html("<img src=\""+afterExpend+"\">");}}})}})
li=$(li).parent().parent().parent("li");top=$(li).parent().parent();}
if($(obj).parent("li").find("div:eq(0)").css("display")=="none"){$(obj).parent("li").find("div:eq(0)").slideDown("fast");}else if($(obj).parent("li").find("div:eq(0)").css("display")!="none"){if($(obj).parent("li").find("div:eq(0)").size()>0){$(obj).parent("li").find("div:eq(0)").slideUp("fast");}}}
function GetRequest(parName,parValue){var url=window.location.href;var temp=url;if(url.indexOf("?")!=-1){temp=url.split('?')[0];var str=url.split('?')[1];strs=str.split("&");var isHas=false;try{for(var i=0;i<strs.length;i++){if(parName.toLocaleLowerCase()==strs[i].split("=")[0].toLocaleLowerCase()){temp+=(i==0?"?":"&");temp+=parName+"="+escape(parValue);isHas=true;}else{temp+=(i==0?"?":"&");temp+=strs[i];}}
if(!isHas){temp+=(strs.length==0?"?":"&")+parName+"="+escape(parValue);}}catch(e){alert(e);}}else{temp+="?";temp+=parName+"="+escape(parValue);}
window.location.href=temp;return false;}
function MergeUrlParas(url,isClearOldParas,newParasName,newParasValue){var page=document.forms[0].getAttribute("Page");page=IsNullOrEmpty(page)?window.location.href.toString():page;if(IsNullOrEmpty(url)){url=page;}else if(/^\/+/.test(url)||!/^http[s]{0,1}:/.test(url)){page=page.substr(0,page.indexOf('/',8));url=page.replace(/\/*$/,"")+"/"+url.replace(/^\//,"");}
var index=url.indexOf("?"),beginIndex=0,p="",tmpName="",tmpValue="",paras="";if(index>0)
{p=url.substr(index+1);url=url.substr(0,index);if(!isClearOldParas)
{for(var i=0;i<p.length;i++)
{if(p[i]!='=')
{tmpName+=p[i];continue;}
index=p.indexOf("=",i+1);if(index==-1)
{tmpValue=p.substr(i+1);i=p.length;}
else
{beginIndex=i;for(;index>i;index--)
{if(p[index]!='&')continue;i=index;break;}
tmpValue=p.substr(beginIndex+1,i-beginIndex-1);}
for(var j=0;j<newParasName.length;j++)
{if(newParasName[j].toLowerCase()!=tmpName.toLowerCase())
{continue;}
newParasName[j]="";if(IsNullOrEmpty(String(newParasValue[j])))break;tmpValue=String(newParasValue[j]);}
if(tmpValue.indexOf("&")>=0||tmpValue.indexOf("?")>=0)
{tmpValue=escape(tmpValue);}
if(paras.length==0)paras+=tmpName+"="+tmpValue;else paras+="&"+tmpName+"="+tmpValue;tmpName="";}}}
for(var i=0;i<newParasName.length;i++)
{if(IsNullOrEmpty(newParasName[i]))
{continue;}
tmpValue=String(newParasValue[i]);if(IsNullOrEmpty(tmpValue)){continue;}
if(tmpValue.indexOf("&")>=0||tmpValue.indexOf("?")>=0)
{tmpValue=escape(tmpValue);}
if(paras.length==0)paras+=newParasName[i]+"="+tmpValue;else paras+="&"+newParasName[i]+"="+tmpValue;}
return url+(paras.length==0?"":"?"+paras);}
function QueryString(name,parasFromUrl){if(name==null||name==undefined){return null;}
var url=IsNullOrEmpty(parasFromUrl)?document.forms[0].getAttribute("Page"):parasFromUrl;if(url.indexOf("?")<=0){return null;}
url=url.substring(url.indexOf("?")+1);var paras=url.split("=");name=name.toLowerCase();for(var i=0;i<paras.length;i++){if(paras[i].toLowerCase()==name||paras[i].substr(paras[i].lastIndexOf("&")+1).toLowerCase()==name){if(i==paras.length-2){return unescape(paras[i+1]);}else{return unescape(paras[i+1].substr(0,paras[i+1].lastIndexOf("&")));}}}
return null;}
function IsNullOrEmpty(str){if(str==null||str==undefined||typeof str==undefined||str=="null"||str=="undefined"||String(str)==""){return true;}
else{return false;}}
function IsChineseStr(str){var lst=/[u00-uFF]/;return!lst.test(str);}
function StrLength(str){if(str==null||typeof str==undefined||str==""){return 0;}
var strLength=0;for(var i=0;i<str.length;i++){if(IsChineseStr(str.charAt(i)))
strLength+=2;else
strLength+=1;}
return strLength;}
function SaveCookie(key,value,expireHour){var exDate=new Date();if(!IsNullOrEmpty(expireHour)){exDate.setTime(exDate.getTime()+expireHour*3600*1000);document.cookie=key+"="+escape(value)+
(IsNullOrEmpty(expireHour)?"":";expires="+exDate);}else{document.cookie=key+"="+escape(value);}}
function GetCookie(key){if(document.cookie.length<=0){return"";}
var start=document.cookie.indexOf(key+"=");if(start!=-1){start=start+key.length+1;var end=document.cookie.indexOf(";",start);if(end==-1){end=document.cookie.length;}
return unescape(document.cookie.substring(start,end));}}
function DelCookie(key){document.cookie=name+"=;expires="+(new Date(0)).toGMTString();}
function StrToFloat(str,pointerLength){var result=parseFloat(str);if(isNaN(result)){return 0;}
return parseFloat(result.toFixed(pointerLength));}
function StrToInt(str){var result=parseInt(str);if(isNaN(result)){return 0;}
return result;}
function StrToBool(str){str=String(str);if(str=="true"||str=="1"||str.toLowerCase()=="true"||str=="ok"){return true;}
return false;}
function FilterInput(obj,type,havePointer,haveMinus,pointerLength){var v=null;if(type==1){if(havePointer){if(IsNullOrEmpty(pointerLength)){if(haveMinus){v=obj.value.match(/^0$|^-[1-9]{1}\d*\.\d*$|^-[1-9]{1}\d*$|^[1-9]{1}\d+\.\d*$|^\d*$|^-$/);}else{v=obj.value.match(/^\d+\.\d*$|^[0-9][1-9]*/);}}else{if(haveMinus){v=obj.value.match(/^-\d+\.\d{0,2}|^-[1-9]\d{0,2}|^\d+\.\d{0,2}|^[0-9]\d*|^-/);}else{v=obj.value.match(/^\d+\.\d+|^[1-9]\d*/);}}}else{if(haveMinus){v=obj.value.match(/^-[1-9]\d*|^[1-9]\d*|^-/);}else{v=obj.value.match(/^\d*/);}}}else if(type==2){v=obj.value.match(/^[a-z,A-Z,0-9]*/);}else if(type==3){v=obj.value.match(/^[a-z,A-Z,[u00-uFF]]*/);}else{return;}
obj.value=v==null||v.length==0?"":v[0];}
function RecordBrowsedGoods(key,recCount,type){recCount=IsNullOrEmpty(recCount)?5:parseInt(recCount);type=IsNullOrEmpty(type)?1:type;recCount=isNaN(recCount)?5:recCount;var goodsId="";if(type==1){goodsId=QueryString(key);}else if(type==2){goodsId=GetCookie(key);}else{return;}
if(IsNullOrEmpty(goodsId)){return;}
if(isNaN(parseInt(goodsId))){return;}
ShoveEIMS3.Ajax.Ajax.RecordBrowsedGoods("BrowsedGoods",goodsId,recCount,function(){});}
var BaseControlMenu=function(){function GetTypeClass(config,li,name,level){var index=1;var parents=$(li).parentsUntil("#"+config.topUlId,"li");if(parents.length==0){index=parseInt($(li).attr("index"))-1;}else{index=parseInt($(parents[parents.length-1]).attr("index"))-1;}
if(level>5){level=5;}
var classNames="";for(var i=level;i>=0;i--){classNames=eval("config."+name+".class"+i);if(IsNullOrEmpty(classNames)){if(i==0){return"";}
continue;}
var s=classNames.split(',');if(s.length==0){if(i==0){return"";}
continue;}
if(s.length<(index+1)){index=s.length-1;}
return s[index];}}
function GetContentClass(config,li,name){var index=parseInt($(li).attr("index"))-1;if(isNaN(index)){return"";}
var className=eval("config."+name);var s=className.split(',');if(s.length==0){return"";}
return s.length<(index+1)?s[s.length-1]:s[index];}
this.InitMenu=function(obj,config){$("#"+config.topUlId).children("li").each(function(){MenuEvent($(this),config);});$("#"+config.homeLiId).children("ul").each(function(){$(this).children("li").each(function(){MenuEvent($(this),config);});});$("#"+config.topUlId).children("ul").each(function(){$(this).children("li").each(function(){MenuEvent($(this),config);});});}
function MenuEvent(obj,config){$(obj).unbind("mouseenter").unbind("mouseleave");$(obj).bind("mouseenter",function(){clearTimeout(this.st);var li=$(this);this.st=setTimeout(function(){var uls=$(li).children("ul");if(uls.length==0){return;}
var type=$(li).attr("type");if(type=="n"||type=="t"){var level=parseInt($(li).attr("level"))+1;$(li).removeClass().addClass(GetTypeClass(config,li,"visited",level));}else if(type=="c"){$(li).removeClass().addClass(GetContentClass(config,li,"visitedClass"));}
uls.slideDown("fast","swing");uls.children("li").each(function(){MenuEvent($(this),config);});},200);});$(obj).bind("mouseleave",function(i,n){clearTimeout(this.st);var li=$(this);this.st=setTimeout(function(){var uls=$(li).children("ul");if(uls.length==0){return;}
var type=$(li).attr("type");var isActive=$(li).attr("Active");var index=$(li).attr("index");if(type=="n"||type=="t"){var level=parseInt($(li).attr("level"))+1;$(li).removeClass(GetTypeClass(config,li,"visited",level));if(isActive=="1"){$(li).addClass(GetTypeClass(config,li,"focus",level));}else{$(li).addClass(GetTypeClass(config,li,"normal",level));}}else if(type=="c"){$(li).removeClass(GetContentClass(config,li,"visitedClass"));if(isActive=="1"){$(li).addClass(GetContentClass(config,li,"focusClass"));}else{$(li).addClass(GetContentClass(config,li,"defaultClass"));}}
uls.slideUp("fast","swing");uls.children("li").each(function(){$(this).unbind("mouseenter").unbind("mouseleave");});},200);});}
this.WizardEvent=function(event,obj,config){var event=event||window.event;event.returnValue=false;if(event.preventDefault){event.preventDefault();}
var li=$(obj).parent();if($(li).children("ul").length==0){return;}
var index=$(li).attr("index");var expend=parseInt($(li).children("ul").attr("expend"));var level=parseInt($(li).attr("level"))+1;var hideLevelUl=function(obj,id){if($(obj).attr("id")==id||$(obj).find("#"+id).length>0){return;}
var lv=parseInt($(obj).attr("level"))+1;$(obj).removeClass().addClass(GetTypeClass(config,obj,"normal",lv));$(obj).children("uL").slideUp("fast");$(obj).children("ul").attr("expend","0");if(!IsNullOrEmpty(config.beforeTag.packUpClass)){$(obj).children("."+config.beforeTag.packUpClass).removeClass().addClass(config.beforeTag.packDownClass);}}
expend=isNaN(expend)?0:expend;if(expend==1){$(li).children("ul").attr("expend","0");$(li).removeClass().addClass(GetTypeClass(config,li,"normal",level));if(!IsNullOrEmpty(config.beforeTag.packDownClass)){$(li).find("."+config.beforeTag.packDownClass).removeClass().addClass(config.beforeTag.packUpClass);}
$(li).children("ul").slideUp("fast");}else if(expend==0){var id=$(li).attr("id");if(config.expendEffect==1){$("#"+config.topUlId).children("li").each(function(){hideLevelUl(this,id);});$("#"+config.homeLiId).children("ul").each(function(){$(this).children("li").each(function(){hideLevelUl(this,id);});});$("#"+config.topUlId).children("ul").each(function(){$(this).children("li").each(function(){hideLevelUl(this,id);});});}
$(li).children("ul").attr("expend","1");$(li).removeClass().addClass(GetTypeClass(config,li,"visited",level));if(!IsNullOrEmpty(config.beforeTag.packUpClass)){$(li).children("."+config.beforeTag.packUpClass).removeClass().addClass(config.beforeTag.packDownClass);}
$(li).children("ul").slideDown("fast");}}}
function LoadJS(name,url){$("<script type=\"text/javascript\" src="+url+"></script>").appendTo($("form:frist"));}
function ShoveWebControlPaging(href,event,obj,containerId,callMethod,key,keyValue){if(event){var event=event||window.event;event.returnValue=false;if(event.preventDefault){event.preventDefault();}}
var url=IsNullOrEmpty(href)?document.forms[0].getAttribute("Page"):href;var page=1;if(key&&keyValue){page=document.getElementById(keyValue).value;if(IsNullOrEmpty(page)){alert('请输入页码');return false;}else if(isNaN(parseInt(page))){alert('页码只能为数字');return false;}
url=MergeUrlParas(url,false,[key],[page]);}else{page=QueryString(key,url);}
if(callMethod){eval(callMethod+"('"+key+"',"+page+",'"+containerId+"','"+url+"')");return;}
if(IsNullOrEmpty(containerId)){document.location.href=url;return false;}
$.ajax({url:url,success:function(data){$("#"+containerId).html($(data).find("#"+containerId).html());}});return false;}
function ShoveWebControlGetMoreData(obj){var url=decodeURIComponent(obj.getAttribute("Url"));var urlFrom=obj.getAttribute("UrlFrom");var pageName=obj.getAttribute("PageName");var pageIndex=parseInt(obj.getAttribute(pageName));var maxPage=parseInt(obj.getAttribute("MaxPage"));var pageSize=parseInt(obj.getAttribute("PageSize"));var totallRow=parseInt(obj.getAttribute("TotallRows"));var filterContentId=obj.getAttribute("FilterId");var fillContentId=obj.getAttribute("FillId");var para=obj.getAttribute("MergeParas");var firstPageRows=parseInt(obj.getAttribute("PageRows"));firstPageRows=isNaN(firstPageRows)?0:firstPageRows;if(IsNullOrEmpty(url)){if(IsNullOrEmpty(urlFrom)){alert("无效的Url参数");return;}
url=decodeURIComponent($q("#"+urlFrom)[0].getAttribute("href"));}
pageIndex=isNaN(pageIndex)?2:pageIndex+1;if(pageIndex==maxPage){obj.style["display"]="none";}else if(pageIndex>maxPage){obj.style["display"]="none";return;}
if(!IsNullOrEmpty(para)){var ps=para.split(',');for(var ip=0;ip<ps.length;ip++){var pv=QueryString(ps[ip]);url=MergeUrlParas(url,false,[ps[ip]],[pv]);}}
if(isNaN(pageSize)){url=MergeUrlParas(url,false,[pageName],[pageIndex]);}else{url=MergeUrlParas(url,false,[pageName,"PageSize"],[pageIndex,pageSize]);}
var that=obj;$.ajax({type:"get",url:url,success:function(data){var container=$("#"+fillContentId);if(container.length==0){return;}
container.html(container.html()+$(data).find("#"+filterContentId).html());that.setAttribute(pageName,pageIndex);if(!isNaN(pageSize)&&totallRow<=((pageIndex-1)*pageSize+firstPageRows)){that.style["display"]="none";}
container.find("img").each(function(){if(IsNullOrEmpty($(this).attr("src"))){var loadsrc=$(this).attr("loadsrc");if(!IsNullOrEmpty(loadsrc)){$(this).attr("src",loadsrc);}}});}});}
function AjaxMethod(group,cmd,params,callBack){var url=MergeUrlParas(null,true,[],[]);url=url.substr(0,url.indexOf('/',8))+"/Admin/JScript/ashx/"+group+".ashx";var option={cmd:cmd};$.extend(option,params);$.ajax({type:"POST",url:url,data:option,success:function(data){try{eval("var ajaxResult="+data);}catch(err){if(callBack)callBack(data);return;}
if(callBack)callBack(ajaxResult);},error:function(data){}});}