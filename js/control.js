function Sum(arg1,arg2)
{
	var sarg1=new String(arg1);
	var sarg2=new String(arg2);
	if(sarg1==""||sarg2=="")
	{
		var e0=new Error();
		e0.Serial=1000001;
		if(sarg1=="")
		{
			e0.message="Sum函数参数非法：第一个参数为空！";
		}else{
			e0.message="Sum函数参数非法：第二个参数为空！";
		}
		throw e0;	
	}
	for(i=0;i<sarg1.length;i++)
	{
		for(j=0;j<10;j++)
		{
				if(sarg1.charAt(i)==j)
		{
			break;
		}
		else{
			if(j==9)
			{
				var e1=new Error();
				e1.serial=1000001;
				e1.message="sum函数参数："+sarg1+"是非法数字！";
				throw e1;
			}
		}
		}	
	}
	for(k=0;k<sarg2.length;k++)
	{
		for(l=0;l<10;l++)
		{
			if(sarg2.charAt(k)==l){
			break;
		}
		else{
			if(l==9)
			{
				var e2=new Error();
				e2.serial=1000001;
				e2.message="sum函数参数："+sarg2+"是非法数字！";
				throw e2;
			}
		}
		}
	}
	return Number(arg1)+Number(arg2);
}
function Button1_onclick(){
	try{
		var text1=document.getElementById("text1");
		var text2=document.getElementById("text2");
		var text3=document.getElementById("text3");
		var sum=Sum(text1.value,text2.value);
		text3.value=sum;
	}catch(e){
		alert(e.message);
		if(e.serial==1000001){
			alert(e.message);
			e=null;
		}
	}
}
function Button2_onclick(){
	var text1=document.getElementById("text1");
	var text2=document.getElementById("text2");
	var text3=document.getElementById("text3");
	text1.value=" ";
	text2.value=" ";
	text3.value=" ";
}
