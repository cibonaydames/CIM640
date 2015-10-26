var canvas;
var base_url = "http://api.openweathermap.org/data/2.5/forecast";
var city_url = "?q=Miami";
var app_id = "&appid=bd82977b86bf27fb59a04b61b657fb6f";
var units = "&units=imperial";
var temp;
var temp_min;
var temp_max;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  // Request the data from openweathermap
  var url = base_url + city_url + app_id + units;
  loadJSON(url, gotWeather);
}

function draw() {
  background(0);
  noStroke();
  fill(255,0,0);
  ellipse(width/2,height/2,temp_max*5,temp_max*5);
//  fill(0,255,0);
//  ellipse(width/2,height/2,temp*5,temp*5);
  fill(0,0,255);
  ellipse(width/2,height/2,temp_min*5,temp_min*5);
  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);
  if (temp) {
   text(temp,width/2,height/2);
  }
}

function gotWeather(weather) {
  //Position 0 is the first item in the list
  //each one is 3 hours apart
  temp = weather.list[0].main.temp;
  temp_min = weather.list[0].main.temp_min;
  temp_max = weather.list[0].main.temp_max;

}
/*var canvas;
var base_url = "http://api.openweathermap.org/data/2.5/forecast";
var city_url = "?q=Miami";
var app_id = "&appid=bd82977b86bf27fb59a04b61b657fb6f";
var units = "&units=imperial";
var temp;
var temp_min;
var temp_max;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  // Request the data from openweathermap
  var url = base_url + city_url + app_id + units;
  loadJSON(url, gotWeather);
}

function draw() {
  background(0);
  noStroke();
  fill(255,0,0);
  ellipse(width/2,height/2,temp_max*5,temp_max*5);
//  fill(0,255,0);
//  ellipse(width/2,height/2,temp*5,temp*5);
  fill(0,0,255);
  ellipse(width/2,height/2,temp_min*5,temp_min*5);
  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);
  if (temp) {
   text(temp,width/2,height/2);
  }
}

function gotWeather(weather) {
  //Position 0 is the first item in the list
  //each one is 3 hours apart
  temp = weather.list[0].main.temp;
  temp_min = weather.list[0].main.temp_min;
  temp_max = weather.list[0].main.temp_max;
  }
*/