const apiKey = "800590c2d9b3065b123e329d3f17f457";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q="


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


const image1 = document.createElement("clouds");
image1.src = "images/clouds.png";
const image2 = document.createElement("clear");
image2.src = "images/clear.png";
const image3 = document.createElement("rain");
image3.src = "images/rain.png";
const image4 = document.createElement("drizzle");
image4.src = "images/drizzle.png";
const image5 = document.createElement("mist");
image5.src = "images/mist.png";

async function checkWeather(city){
  const response = await fetch(apiURL + city + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);


document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°f";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + " mph";

if(data.weather[0].main == "Clouds"){
  weatherIcon.src = "./assets/images/clouds.png";
}
else if(data.weather[0].main == "Clear"){
  weatherIcon.src = "./assets/images/clear.png";
}
else if(data.weather[0].main == "Rain"){
  weatherIcon.src = "image3";
}
else if(data.weather[0].main == "Drizzle"){
  weatherIcon.src = "image4";
}
else if(data.weather[0].main == "Mist"){
  weatherIcon.src = "./assets/images/mist.png";
}
else if(data.weather[0].main == "Snow"){
  weatherIcon.src = "./assets/images/snow.png";
}
}

searchBtn.addEventListener("click", ()=>{
  checkWeather(searchBox.value);
});


