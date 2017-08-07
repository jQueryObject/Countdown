# jQuery时间倒计时Countdown

效果如下：
![](images/img.gif)

html code:
```
<!doctype html>
<html lang="en">
 <head>
  <!--网站编码格式，UTF-8 国际编码，GBK或 gb2312 中文编码-->
  <meta charset="UTF-8">
  <meta name="Keywords" content="关键词一，关键词二">
  <meta name="Description" content="网站描述内容">
  <title>jq倒计时效果</title>
  <!--css js 文件的引入-->
	 <link rel="stylesheet" href="css/index.css"/>
 </head>
 <body>
  <div id="jsq">
	<h3>开始倒计时</h3>

	<!--结束时间开始-->
	<div class="endTime">
		<form>
			请输入：<input type="text" value='2019' />年
					<input type="text" value='7'/>月
					<input type="text" value='22' />日
		</form>
	</div>
	<!--结束时间结束-->

	<!--开始按扭-->
	<div class="begin">开始</div>
	<p>现在距离以上时间，还剩：</p>
	<p class="c_Date"><span>0</span>天<span>0</span>小时<span>0</span>分<span>0</span>秒</p>
  </div>
 </body>
</html>
<script src="js/jquery.js"></script>
<script src="js/index.js"></script>

```

js code:
```
$(".begin").click(function(){
    UpdateTime();
    setInterval(UpdateTime,1000);
});


function UpdateTime(){

    var Year=$(".endTime input").eq(0).val(); //获取输入的年
    var Month=$(".endTime input").eq(1).val(); //获取输入的月
    var Day=$(".endTime input").eq(2).val(); //获取输入的天
    //alert(Year+"年"+Month+"月"+Day+"天");

    var endDate=new Date(); //创建时间对象
    var newDate=new Date(); //获取现在的时间

    //设置结束时间
    endDate.setFullYear(Year);
    endDate.setMonth(Month-1);
    endDate.setDate(Day);
    endDate.setHours(0);
    endDate.setMinutes(0);
    endDate.setSeconds(0);

    //获取时间差毫秒数，用结束时间毫秒数-现在时间毫秒数
    var s=(endDate.getTime()-newDate.getTime())/1000;  //时间差的秒数
    if(s<=0){alert("你输入的时间有误");return;}
    var day=Math.floor(s/86400); //获取天数
    s=s%86400;
    var hours=Math.floor(s/3600);
    s=s%3600;
    var minutes=Math.floor(s/60);
    s=s%60;
    var s4=s;

    $("p.c_Date span").eq(0).html(fullZero(day,2));	//赋值 天数
    $("p.c_Date span").eq(1).html(fullZero(hours,2)); //小时
    $("p.c_Date span").eq(2).html(fullZero(minutes,2)); //分钟
    $("p.c_Date span").eq(3).html(fullZero(s4,2));//秒

}


//给时间前面补0
function fullZero(_time,n){
    var str=""+_time;
    while(str.length<n){
        str="0"+str;
    }
    return str;
}
```

