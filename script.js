
async function fetchWeatherData(latitude, longitude) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log(data);
    console.log(data.elevation);
    console.log(data.current_weather);
    console.log(data.current_weather.temperature);
    console.log(data.current_weather.windspeed);
    return data.current_weather;
}
// fetchWeatherData(25.666815, -100.28233);
async function handleFetchClick(){
    console.log('Boton fetch clickeado');
    const button = document.getElementById("fetch-btn");
    const latitude = document.getElementById("latitude-input").value;
    const longitude = document.getElementById("longitude-input").value;
    const curretTemperature = document.getElementById("temp-display");
    const currentWind = document.getElementById("wind-display");
    const currentHumidity = document.getElementById("humidity-display");

    const currentWeather = await fetchWeatherData(latitude, longitude);
    curretTemperature.textContent = currentWeather.temperature;
    currentWind.textContent = currentWeather.windspeed;

 button.disabled = true;
    button.innerHTML = '<span class="loading"></span> Loading...';
    
    try {
        const currentWeather = await fetchWeatherData(latitude, longitude);
        
        // Actualizar la interfaz
        currentTemperature.textContent = Math.round(currentWeather.temperature);
        currentWind.textContent = `${currentWeather.windspeed} km/h`;
        
        // Calcular "feels like" (simulación simple)
        const feelsLikeTemp = Math.round(currentWeather.temperature - (currentWeather.windspeed * 0.1));
        feelsLike.textContent = `${feelsLikeTemp} °C`;
        
        // Actualizar apariencia según temperatura
        updateWeatherAppearance(currentWeather.temperature);
        
        // Mostrar resultados
        weatherResult.classList.remove("hidden");
        
    }  finally {
        button.disabled = false;
        button.innerHTML = '<i class="fas fa-search"></i> Get Weather';
    }
}

if (currentTemperature <= 16){
    backgro
}