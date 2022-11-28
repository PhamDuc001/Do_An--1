const inputElement = document.querySelector('.input-city')
const weatherElement = document.querySelector(".weather")
const numbElement = document.querySelector(".numb")
const imgElement = document.querySelector(".img-weather")
let api
inputElement.addEventListener("keyup", e => {
    if (e.key == "Enter" && inputElement.value != "") {
        getData(inputElement.value);
    }
});
var getData = (input) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=8368c3dab3e546d410c85b6826c8496d`)
    // fetch(`https://api.weatherapi.com/v1/current.json?key=011cf2bbd9ae4c00b8c84226222611&q=${input}`)
        .then((response) => response.json())
        .then((data) => {
            handleData(data)
        });
        
}
var handleData = (data) => {
    numbElement.innerHTML = data.main.temp
    weatherElement.innerHTML = data.weather[0].main
    var id = data.weather[0].id
   
    if(id == 800){
        imgElement.src = "icon_weather/clear.svg";
    }else if(id >= 200 && id <= 232){
        imgElement.src = "icon_weather/storm.svg";
    }else if(id >= 600 && id <= 622){
        imgElement.src = "icon_weather/snow.svg";
    }else if(id >= 701 && id <= 781){
        imgElement.src = "icon_weather/haze.svg";
    }else if(id >= 801 && id <= 804){
        imgElement.src = "icon_weather/cloud.svg";
    }else if((id >= 500 && id <= 531) || (id >= 300 && id <= 321)){
        imgElement.src = "icon_weather/rain.svg";
    }
}

