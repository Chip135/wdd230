const url = 'https://api.openweathermap.org/data/2.5/weather?q=Provo&units=imperial&appid=af40749284b7fade126cfcdbb04ad077'
const currentTemp = document.querySelector(".temp");
const windSpeed = document.querySelector(".windspeed");
const weatherIcon = document.querySelector('.weatherimg');
const captionDesc = document.querySelector('.weatherdesc');
const windChill = document.querySelector('.windchill');

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

function windchill(speed, temp){
    if (temp <= 50 && speed > 3){
    const feeltemp = document.querySelector(".windchill");
        
    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    console.log(temp);

    wc = Math.floor(wc);

    wc = (wc > temp) ? temp : wc;

    console.log(wc);
    return wc

    
}else{
    const feeltemp = document.querySelector(".windchill");
    feeltemp.innerHTML = 'N/A';
}}

function capitalizeFirstLetter(str){
    var new_strings = str.split(' ');
    var new_string = [];
    for (var i=0; i<new_strings.length; i++){
        new_strings[i] = new_strings[i].charAt(0).toUpperCase() + new_strings[i].substring(1);
    };
    new_string = new_strings.join(' ');
    return new_string;
}

function displayResults(weatherdata){
    currentTemp.innerHTML = `${weatherdata.main.temp.toFixed(0)}&#x00B0; F`;
    windSpeed.innerHTML = `Wind Speed: ${weatherdata.wind.speed}`;
    windChill.innerHTML = `Wind Chill: ${windchill(weatherdata.wind.speed,weatherdata.main.temp.toFixed(0))}`;


    const iconsrc = `https://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`;
    const desc = weatherdata.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = capitalizeFirstLetter(desc);
}