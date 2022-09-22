  const img = document.getElementById("weather")
  fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=da1930529ec57737f704dd6eadc374ed', {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      console.log(repsonse)
    });
