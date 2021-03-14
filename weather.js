function currentDay(date){
    let current_date= new Date(date);
    var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
let current_day1 = weekday[current_date.getDay()];
return current_day1;
}
function filterForeCastData(data_array,testdate) {
    return data_array.filter(item=>{
        let date=new Date(item.dt_txt);
        let individual_date =calculateDate(date);
        return individual_date==testdate;
        });
    }
    function calculateDate(apidate){
        return apidate.getFullYear()+'-'+(apidate.getMonth()+1)+'-'+apidate.getDate();  
    }
function averageMaximumTemprature(data) {
    return  avg_max_temp= data.reduce((acc,temp) => {
return   acc+temp.main.temp_max/8;
     },0);
}
 function averageMinimumTemprature(data) {
  return  avg_min_temp= data.reduce((acc,temp) => {
return   acc+temp.main.temp_min/8;
   },0);
}
 function getLocation() {
   if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      alert("Service Not Supported");
    }
  }
  function getCity(lat,lon) {
      displayWeather(lat,lon);
  }
  function showPosition(position) {
    let lati=position.coords.latitude;
    let longi=position.coords.longitude;
    displayWeather(lati,longi);
   } // show position function ends here
  function display(day2,day3,day4,day5) {
    let icon2=day2[0].weather[0].icon;
    document.querySelector(".icon1").innerHTML=`<img src='icons/${icon2}.png'/>`;
    let icon3=day3[0].weather[0].icon;
   document.querySelector(".icon2").innerHTML=`<img src='icons/${icon3}.png'/>`;
   let icon4=day4[0].weather[0].icon;
   document.querySelector(".icon3").innerHTML=`<img src='icons/${icon4}.png'/>`;
   let icon5=day5[0].weather[0].icon;
   document.querySelector(".icon4").innerHTML=`<img src='icons/${icon5}.png'/>`;
//    let icon6=day6[0].weather[0].icon;

    const max1=averageMaximumTemprature(day2);
    const b1=max1-273;
   document.getElementById("max_temp_2").innerHTML=b1.toPrecision(2);
   const min1=averageMinimumTemprature(day2);
   const a_m_t1=min1-273;
   
  document.getElementById("min_temp_2").innerHTML= a_m_t1.toPrecision(3);
    const max2=averageMaximumTemprature(day3);
    const b2=max2-273;
    document.getElementById("max_temp_3").innerHTML=b2.toPrecision(2);
    const min2=averageMinimumTemprature(day3);
    const a_m_t2=min2-273;
   document.getElementById("min_temp_3").innerHTML= a_m_t2.toPrecision(3);
    const max3=averageMaximumTemprature(day4);
    const b3=max3-273;
    document.getElementById("max_temp_4").innerHTML=b3.toPrecision(2);
    const min3=averageMinimumTemprature(day4);
    const a_m_t3=min3-273;
   document.getElementById("min_temp_4").innerHTML= a_m_t3.toPrecision(3);
    const max4=averageMaximumTemprature(day5);
    const b4=max4-273;
    document.getElementById("max_temp_5").innerHTML=b4.toPrecision(2);
    const min4=averageMinimumTemprature(day5);
    const a_m_t4=min3-273;
   document.getElementById("min_temp_5").innerHTML= a_m_t4.toPrecision(2);
}
function displayWeather(lati,longi) {

    const iconElement=document.getElementById("icon");
    const Http = new XMLHttpRequest();
const url='https://api.openweathermap.org/data/2.5/weather?lat='+lati+'&lon='+longi+'&APPID=080af8d486d22f981dcd80047bb9e359';
            Http.open("GET", url,true);
           Http.send();
           Http.onreadystatechange = function() {
               if (this.readyState == 4 && this.status == 200) {
                   let result =JSON.parse(Http.responseText);
                  weatherIcon=result.weather[0].icon;
                 iconElement.innerHTML=`<img src='icons/${weatherIcon}.png'/>`;
                   document.getElementById("highest_temp").innerHTML=(result.main.temp_max-273.15).toPrecision(2);
                   document.getElementById("lowest_temp").innerHTML=(result.main.temp_min-273.15).toPrecision(2);
                   }
           };
           const weeks_api = new XMLHttpRequest();
           const forecast_url='https://api.openweathermap.org/data/2.5/forecast?lat='+lati+'&lon='+longi+'&APPID=080af8d486d22f981dcd80047bb9e359';
           weeks_api.open("GET", forecast_url,true);
           weeks_api.send();
           weeks_api.onreadystatechange = function() {
               if (this.readyState == 4 && this.status == 200) {
                   let result =JSON.parse(weeks_api.responseText);
                  let api_date=result.list[0].dt_txt;
                   let api_date_object= new Date(api_date);
                   let day1_date=calculateDate(api_date_object);
                   var day=currentDay(api_date);
                   document.getElementById("week_day").innerHTML = day;
                   document.getElementById("city_name").innerHTML=result.city.name;
                   let fiveDay_Hourly_Data=result.list.map(curr=> curr);
                    let  filtered_days = fiveDay_Hourly_Data.filter(item => {
                    let test=new Date(item.dt_txt);
                    let date = calculateDate(test);
                    return date!=day1_date;
                      });

        let test_date1=new Date(filtered_days[0].dt_txt);
        let greet_date= new Date(fiveDay_Hourly_Data[0].dt_txt);
       let greet= greet_date.toLocaleTimeString('it-IT');
       let time= greet.substring(0,2);
       console.log(time);
if(time<12){
document.getElementById("greet_user").innerHTML="Good Morning";
document.getElementById("city_name_container").style.backgroundImage= "url('./images/cloud.gif')";
document.getElementById("city_name_container").style.backgroundSize='cover';
}
else if (time>=12 || time<=17) {
   document.getElementById("greet_user").innerHTML="Good Afternoon"; 
}
else {
   document.getElementById("greet_user").innerHTML="Good Evening"; 
}

var day1=currentDay(test_date1);
       document.getElementById("day1").innerHTML = day1;
       let day2_date=calculateDate(test_date1);
       let test_date2=new Date(filtered_days[8].dt_txt);
       var d2=currentDay(test_date2);
       document.getElementById("day2").innerHTML = d2;
       let day3_date=calculateDate(test_date2);
       let test_date3=new Date(filtered_days[16].dt_txt);
       var d3=currentDay(test_date3);
       document.getElementById("day3").innerHTML = d3;
       let day4_date=calculateDate(test_date3)
       let test_date4=new Date(filtered_days[24].dt_txt);
       var d4=currentDay(test_date4);
       document.getElementById("day4").innerHTML = d4;
       let day5_date=calculateDate(test_date4)
       let test_date5=new Date(filtered_days[filtered_days.length-1].dt_txt);
        var d5=currentDay(test_date5);
     let day6_date=calculateDate(test_date5);
     const day2=  filterForeCastData(filtered_days,day2_date);
const day3=  filterForeCastData(filtered_days,day3_date);
const day4=  filterForeCastData(filtered_days,day4_date);
const day5=  filterForeCastData(filtered_days,day5_date);
display(day2,day3,day4,day5);
}    
   };
}

