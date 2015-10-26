var canvas;
var base_url = "http://api.openweathermap.org/data/2.5/forecast";
var city_url = "?q=Miami";
var app_id = "&appid=bd82977b86bf27fb59a04b61b657fb6f";
var units = "&units=imperial";
var temp = [];
var temp_min = [];
var temp_max = [];
var xCursor;
var yCursor;
var cityName;
var paddingAmount;

function setup() {
  canvas = createCanvas(500, 500);
  canvas.parent('middle_panel');
  cityName = createInput();
  paddingAmount = createInput();
  var searchButton = createButton('Search');
  cityName.parent('left_panel');
  paddingAmount.parent('left_panel');
  searchButton.parent('left_panel');
  searchButton.mousePressed(weatherLookup);
  // Request the data from openweathermap
}

function weatherLookup() {
  city_url = "?q=" + cityName.value();
  var url = base_url + city_url + app_id + units;
  loadJSON(url, gotWeather);

}

function draw() {
  xCursor = Number(paddingAmount.value());
  yCursor = Number(paddingAmount.value());
  background(0);
  for (var i = 0; i < temp.length; i++) {
    noStroke();
    fill(255,0,0);
    ellipse(xCursor,yCursor,temp_max[i],temp_max[i]);
    fill(0,0,255);
    ellipse(xCursor,yCursor,temp_min[i],temp_min[i]);
    fill(255);
    textSize(20);
    textAlign(CENTER, CENTER);
    if (temp[i]) {
     text(temp[i],xCursor,yCursor);
    }
    //add the maximum temperature plus 20 padding
    xCursor += temp_max[i] + 20;
    //reset the cursor if we go past the width of the canvas
    //move the y cursor down
    if (xCursor > width) {
      xCursor = Number(paddingAmount.value());
      yCursor += temp_max[i] + 20;
    }

  }
}

function gotWeather(weather) {
  //Position 0 is the first item in the list
  temp = [];
  temp_min = [];
  temp_max = [];
  //each one is 3 hours apart
  for (var i = 0; i < weather.list.length; i++) {
    temp.push(weather.list[i].main.temp);
    temp_min.push(weather.list[i].main.temp_min);
    temp_max.push(weather.list[i].main.temp_max);
  }

}