const address = document.getElementById('address');
const weather = document.getElementById('weather');
const temp = document.getElementById('temp');
const humid = document.getElementById('humid');

navigator.geolocation.getCurrentPosition(function(position) {
  console.log(position.coords.latitude, position.coords.longitude);
  address.innerText = `${position.coords.latitude} ${position.coords.longitude}`;
  const myAdd = address.innerText.split(' ');
  fetch(`https://cors-anywhere.herokuapp.com/
https://api.darksky.net/forecast/5b0669fa2b50528e6e0cd5f1c8d81d45/${myAdd[0]},${myAdd[1]}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const temperature = Math.round(
        ((data.currently.temperature - 32) * 5) / 9
      );
      temp.innerText = `Temperature is ${temperature}C`;
      humid.innerText = `Humidity is ${data.currently.humidity * 100}%`;
    });
});
