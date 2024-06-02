async function checkWeather() {
    const city = document.getElementById('name').value;
    const apiKey = '8c281da125c9d9fe055316207ccc112e';
    
    if (!city) {
        alert('Please enter city name');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;


    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Weather data not found');
        }
        const data = await response.json();
        console.log(data);
        displayWeather(data);
    } catch (error) {
        document.getElementById('result').innerHTML = `<p style="color:red">Error: ${error.message}</p>`;
    }
}

function displayWeather(data) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p class = "first">${data.name} weather</p>
        <p class = "big"> ${(data.main.temp - 273.15).toFixed(2)}C</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p class = "last"><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
    `;
}
