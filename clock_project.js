

 let months=['January','February','March','April','May','June','July','August','September','October','November','December'];
 
 let days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];


function realtime()
{

 let fulldate=new Date();
 let hours=fulldate.getHours();
 let minutes=fulldate.getMinutes();
 let seconds=fulldate.getSeconds();
 let date=fulldate.getDate();
 

 const hours_div=document.querySelector(".hour_");
 const minutes_div=document.querySelector(".min_");
 const seconds_div=document.querySelector(".sec_");
 const date_div=document.querySelector(".date_");
 const month_div=document.querySelector(".month_");
 const day_div=document.querySelector(".day");
 const ampm_div=document.querySelector(".ampm");

 ampm_div.innerHTML=hours<=12 ? 'AM':'PM';
 hours=hours%12;
 hours=hours ? hours:12;

 hours=hours>=10 ? hours:"0"+hours;
 minutes=minutes>=10 ? minutes:'0'+minutes;
 seconds=seconds>=10 ? seconds:'0'+seconds;


 hours_div.innerHTML=hours;
 minutes_div.innerHTML=minutes;
 seconds_div.innerHTML=seconds;
 date_div.innerHTML=date;
 month_div.innerHTML=months[fulldate.getMonth()];
 day_div.innerHTML=days[fulldate.getDay()];
 






}

 let final_time=setInterval(realtime,500);