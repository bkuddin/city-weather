const API_KEY = `f67392268f15442ecb42ccfb79425b64`;

const searchTemperature = () => {
  const cityInput = document.getElementById("city-input").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};

// Display
const setInnerText = (id, text) => {
  document.getElementById(id).innerText = text;
};

const displayTemperature = (temperature) => {
  setInnerText("city-name", temperature.name);
  setInnerText("temperature", temperature.main.temp);
  setInnerText("weather-condition", temperature.weather[0].main);
  //   set weather icons
  const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;

  const imgIcon = document.getElementById("weather-icon");
  imgIcon.setAttribute("src", url);
};
