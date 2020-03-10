// jQuery approach
navigator.geolocation.getCurrentPosition(function(position) {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  $('#address').text(`Location: ${lat}, ${long}`);

  fetch(`https://cors-anywhere.herokuapp.com/
https://api.darksky.net/forecast/5b0669fa2b50528e6e0cd5f1c8d81d45/${lat},${long}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      const temperature = `Temperature is ${data.currently.temperature}`;
      const humidity = `Humidity is ${data.currently.humidity}`;
      $('#temp').text(temperature);
      $('#humid').text(humidity);
    });
});
