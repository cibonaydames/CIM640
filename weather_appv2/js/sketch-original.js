//ADD STATE NEXT TO CITY

var units = "&units=imperial";

var Geo={};
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success,error);
    }
  else {
    alert('Geolocation is not supported');
  }

function error() {
  alert("Hmm, We couldn't find you!");
  Geo.lat = 40;
  Geo.lon = 20;
  }

function success(position) {
  console.log(position);
    Geo.lat = position.coords.latitude;
    Geo.lon = position.coords.longitude;
}

/*function success(position) {
      Geo.lat = position.coords.latitude;
      Geo.lng = position.coords.longitude;
    }*/


function setup() {
var key = "29dff24ee000600798e8e0e5c83167a0";
var Weather = "http://api.openweathermap.org/data/2.5/weather?lat=" + Geo.lat + "&lon=" + Geo.lon + "&appid=" + key + "&units=imperial";

console.log(Weather);
  loadJSON(Weather, gotWeather);
}
/*
$.ajax({
  url : Weather,
  dataType : "jsonp",
  success : function(data) {

// get all the information
  }
});

*/

function gotWeather(data) {
  console.log(data);
  var location = data.name;
  var temp = data.main.temp;
  var img = data.weather[0].icon;
  var desc = data.weather[0].description;

  var weather_id = data.weather[0].id;

  if (weather_id >= 200 && weather_id <= 250) {
//    alert("overcast clouds");
      $('#desc').html("Safe");
      $('#image').addClass("wi wi-thunderstorm");
  } 

  else if (weather_id >= 300 && weather_id <= 350) {
      $('#desc').html("Dry");
      $('#image').addClass("wi wi-showers");

  }

  else if (weather_id >= 500 && weather_id <= 550) {
      $('#desc').html("Dry");
      $('#image').addClass("wi wi-rain");

  }

  else if (weather_id >= 600 && weather_id <= 650) {
      $('#desc').html("Warm");
      $('#image').addClass("wi wi-snow");

  }

  else if (weather_id == 701) {
      //mist
      $('#desc').html("Dry");
      $('#image').addClass("wi wi-raindrops");

  } 

  else if (weather_id == 711) {
      //smoke
      $('#desc').html("Clear");
      $('#image').addClass("wi wi-smoke");

  } 

  else if (weather_id == 721) {
      //haze
      $('#desc').html("Clear");
      $('#image').addClass("wi wi-day-haze");

  } 

  else if (weather_id == 731) {
      //dust/sand
      $('#desc').html("Inside");
      $('#image').addClass("wi wi-sandstorm");

  } 

  else if (weather_id == 741) {
      //fog
      $('#desc').html("Clear");
      $('#image').addClass("wi wi-day-fog");

  } 

  else if (weather_id == 751) {
      //sand
      $('#desc').html("Inside");
      $('#image').addClass("wi wi-sandstorm");

  } 

  else if (weather_id == 761) {
      //dust
      $('#desc').html("Clean");
      $('#image').addClass("wi wi-dust");

  } 

  else if (weather_id == 762) {
      //volcanic ash
      $('#desc').html("Alert");
      $('#image').addClass("wi wi-volcano");

  } 

  else if (weather_id == 762) {
      //squalls
      $('#desc').html("Safe");
      $('#image').addClass("wi wi-night-sleet-storm");

  } 

  else if (weather_id == 762 && weather_id == 900) {
      //tornado
      $('#desc').html("Inside");
      $('#image').addClass("wi wi-tornado");

  } 

 else if (weather_id == 800) {
      //sky is clear
      $('#desc').html("Beautiful");
      $('#image').addClass("wi wi-day-sunny");

  } 

  else if (weather_id >= 800 && weather_id <= 805) {
      //few clouds
      $('#desc').html("Beautiful");
      $('#image').addClass("wi wi-cloudy");

  } 

  else if (weather_id == 901) {
      //tropical storm
      $('#desc').html("Inside");
      $('#image').addClass("wi wi-storm-warning");

  }  
   
  else if (weather_id == 902) {
      //hurricane
      $('#desc').html("Inside");
      $('#image').addClass("wi wi-hurricane-warning");

  } 

  else if (weather_id == 903) {
      //cold
      $('#desc').html("Warm");
      $('#image').addClass("wi wi-snowflake-cold");

  } 

  else if (weather_id == 904) {
      //hot
      $('#desc').html("????");
      $('#image').addClass("wi ??????????");

  } 

  else if (weather_id == 905) {
      //windy
      $('#desc').html("????");
      $('#image').addClass("wi ??????????");

  } 

  else if (weather_id == 906) {
      //hail
      $('#desc').html("????");
      $('#image').addClass("wi ??????????");

  } 

  else {
      //no data
      $('#desc').html("????");
      $('#image').addClass("wi ??????????");
  }


//var wind = data['current_observation']['wind_string'];

//setting the spans to the correct parameters
  $('#location').html(location);
  $('#temp').html(temp);
//$('#wind').html(wind);
//filling the image src attribute with the image url
  $('#img').attr('src', "http://openweathermap.org/img/w/" + img + ".png");  
}
