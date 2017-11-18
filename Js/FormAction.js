/*
    交互式控件，客户端校验 (id 代表要校验的控件服务器id，msg 错误信息提示文本）
*/

function ShoveEIMS3_Check(value)
{
    value = decodeURI(value);
    var arr = new Array();
    arr = value.split("%26");
    var control = new Array();
    var result = false;
    
    if(arr != null && arr.length > 0)
    {
        for(var i = 0;i< arr.length;i++)
        {
            if(arr[i] == "")
            {
                continue;
            }
            control = arr[i].split("|");//获取单个关联控件属性
            if(control != null && control.length == 3)
            {
                if(control[0] == 1)
                {
                    result = ShoveEIMS3_Check_For_NoNull(control[1],control[2]);
                    if(!result)
                    {
                        return result;
                    }
                }
                else if(control[0] == 2)
                {
                    result = ShoveEIMS3_Check_For_Email(control[1],control[2]);
                    if(!result)
                    {
                        return result;
                    }
                }
                else if(control[0] == 3)
                {
                    result = ShoveEIMS3_Check_For_UserName(control[1],control[2]);
                    if(!result)
                    {
                        return result;
                    }
                }
                else if(control[0] == 4)
                {
                    result = ShoveEIMS3_Check_For_Password(control[1],control[2]);
                    if(!result)
                    {
                        return result;
                    }
                }
                else if(control[0] == 5)
                {
                    result = ShoveEIMS3_Check_For_Mobile(control[1],control[2]);
                    if(!result)
                    {
                        return result;
                    }
                }
                else if(control[0] == 6)
                {
                    result = ShoveEIMS3_Check_For_Telephone(control[1],control[2]);
                    if(!result)
                    {
                        return result;
                    }
                }
                else if(control[0] == 7)
                {
                    result = ShoveEIMS3_Check_For_PostCode(control[1],control[2]);
                    if(!result)
                    {
                        return result;
                    }
                }
                else if(control[0] == 8)
                {
                    result = ShoveEIMS3_Check_For_IdCard(control[1],control[2]);
                    if(!result)
                    {
                        return result;
                    }
                }
                else if(control[0] == 9)
                {
                    result = ShoveEIMS3_Check_For_IsDigit(control[1],control[2]);
                    if(!result)
                    {
                        return result;
                    }
                }
            }
        }
    }
   
    return true;
}

//校验不能为空
function ShoveEIMS3_Check_For_NoNull(id,msg)
{
    var sender = eval("document.getElementById("+id+")");
    if(sender != null)
    {
        if(sender.value.replace(" ","") == "")
        {
            alert(msg != ""?msg :"必填项不能为空");
            
            return false;
        }
    }
    
    return true;
}

//邮箱校验
function ShoveEIMS3_Check_For_Email(id,msg)
{
    var sender = eval("document.getElementById("+id+")");
    var myreg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if(!myreg.test(sender.value.replace(" ","")))
    {
        alert(msg != ""?msg: "邮箱输入有错误");
        return false;
   }
   
   return true;
}

//用户名校验 只能输入5-20个以字母开头、可带数字、“_”、“.”的字串 
function ShoveEIMS3_Check_For_UserName(id,msg)
{
    var sender = eval("document.getElementById("+id+")");
    var patrn = /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/;   
    
    if (!patrn.exec(sender.value.replace(" ","") == ""))
    {
        alert(msg != "" ? msg : "用户名只能输入5-20个以字母开头、可带数字,'_','.'的字符");
        return false;  
    }
    
    return true;
}

//手机校验(13,15,18开头)
function ShoveEIMS3_Check_For_Mobile(id,msg)
{
    var sender = eval("document.getElementById("+id+")");
    var patrn = /^1[3,5,8]\d{9}$/;

    if(!patrn.test(sender.value.replace(" ","") == ""))
    {
        alert(msg != "" ? msg :"手机号码有误(13,15,18开头)!");
        return false;
    }
    
    return true;
}

//固定电话，小灵通号码校验
function ShoveEIMS3_Check_For_Telephone(id,msg)
{
    var sender = eval("document.getElementById("+id+")");
    var patrn = /^0(([1-9]\d)|([3-9]\d{2}))\d{8}$/;

    if(!patrn.test(sender.value.replace(" ","") == ""))
    {
        alert(msg != "" ? msg :"固定电话有误!");
        return false;
    }
    
    return true;
}

//邮政编码
function ShoveEIMS3_Check_For_PostCode(id,msg) 
{ 
    var sender = eval("document.getElementById("+id+")");
    var patrn = /[1-9]d{5}(?!d)/; 
    
    if(!patrn.test(sender.value.replace(" ","") == ""))
    {
        alert(msg != "" ? msg :"邮政编码错误!");
        return false;
    }
    
    return true; 
} 

//身份证号
function ShoveEIMS3_Check_For_IdCard(id,msg) 
{ 
    var sender = eval("document.getElementById("+id+")");
    var patrn = /d{15}|d{18}/; 
    
    if(!patrn.test(sender.value.replace(" ","") == ""))
    {
        alert(msg != "" ? msg :"身份证号错误!");
        return false;
    } 
    return true; 
} 


//是否全部数字
function ShoveEIMS3_Check_For_IsDigit(id,msg) 
{ 
    var sender = eval("document.getElementById("+id+")");
    var patrn = /^[0-9]{1,20}$/; 
    
    if (!patrn.exec(sender.value.replace(" ","") == ""))
    {
       alert(msg != ""?msg :"请输入数字!");
       return false;
    }
    
    return true; 
} 

//密码校验（6-20位字母，数字，下划线）
function ShoveEIMS3_Check_For_Password(id,msg) 
{
    var sender = eval("document.getElementById("+id+")");
    var patrn = /^(\w){6,20}$/; 
    
    if (!patrn.exec(sender.value.replace(" ","") == ""))
    {
       alert(msg != "" ?msg :"密码必须在6-20位包含字母，数字，下划线");
       return false;
    }
    
    return true; 
}
