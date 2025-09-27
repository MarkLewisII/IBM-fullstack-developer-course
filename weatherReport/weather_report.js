function showweatherDetails(event) {
    event.preventDefault();

    fetch(apiUrl)
.then(response => response.json())
.then(data => {
  const weatherInfo = document.getElementById('weatherInfo');
  weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                          <p>Temperature: ${data.main.temp} &#8451;</p>
                          <p>Weather: ${data.weather[0].description}</p>`;
})
}

const city = document.getElementById('city').value;
const apiKey = '8e765ba157f98f75c0590ca110c13434'; // Replace 'YOUR_API_KEY' with your actual API key
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;



document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );