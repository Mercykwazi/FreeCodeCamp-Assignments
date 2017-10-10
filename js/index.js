if (navigator.geolocation) {   
navigator.geolocation.getCurrentPosition(function(position) {
var long =position.coords.longitude;
   var lat =position.coords.latitude; 
  
  $.getJSON( "https://fcc-weather-api.glitch.me/api/current?lat=" + lat +" &lon=" + long,
   function (data){
  console.log(data)
 $("#weatherInfor").html("Location :" + data.name);
    var icon = '<img src='+ data.weather[0].icon+'>';
     $("#temp").html("Temperature :" + data.main.temp + "°C " +icon + "</br>"  + "Humidity :" + data.main.humidity + "%" )
      $("#presh").html( "Pressure :" + data.main.pressure + "Pa" + "</br>"  + "Wind :" + data.wind.speed)
   
  d = new Date();
  hour = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours();
  ampm = d.getHours() >= 12 ? 'pm' : 'am';
  days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  $('#time').html(days[d.getDay()]+', '+hour%12+' '+ampm.toUpperCase())
    
    function celsiusToFahrenheit(celsius) {
           var Fahrenheit = (celsius * 9 / 5 + 32);
           return `${Fahrenheit}°F`;
          }

          $("#changeTemp").on("click", function () {
          $("#Fahrenheit").html(celsiusToFahrenheit(data.main.temp));
            $("#inputCelsius").html(data.main.temp + "°C ")
         });    
})
});
}