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