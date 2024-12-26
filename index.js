let input = document.querySelector("input");
let button = document.querySelector("button");
let details = document.querySelector(".details");
let temparature = document.querySelector(".temparature");
let extra = document.querySelector(".extra");
let api = `https://api.weatherstack.com/current?access_key=a505c3427bb7030732a9c2029047bf75&query=`;

button.addEventListener("click", (e) => {
  e.preventDefault();
  let city = input.value.trim();
  let locationEle = details.querySelector("h3");
  let dateAndTime = details.querySelector("h6");
  let temp = temparature.querySelector("h1");
  let img = temparature.querySelector("img");
  let wind = extra.querySelector(".wind h6");
  let humidity = extra.querySelector(".humidity h6");
  fetch(api + city)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      locationEle.innerText = data.location.name;
      dateAndTime.innerText = data.location.localtime;
      temp.innerText = data.current.temperature;
      img.setAttribute("src", data.current.weather_icons);
      wind.innerText = data.current.wind_speed;
      humidity.innerText = data.current.humidity;
    })
    .catch((err) => {
      console.log(err);
    });
});
