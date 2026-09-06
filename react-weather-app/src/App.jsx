import { useState } from "react";
import "./App.css";

function App() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const getWeather = async () => {
        if (!city) {
            setError("Please enter a city name.");
            return;
        }

        setLoading(true);
        setError("");
        setWeather(null);

        try {
            // Find city coordinates
            const locationResponse = await fetch(
                `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
            );

            const locationData = await locationResponse.json();

            if (!locationData.results) {
                throw new Error("City not found.");
            }

            const { latitude, longitude, name, country } =
                locationData.results[0];

            // Get weather data
            const weatherResponse = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`
            );

            const weatherData = await weatherResponse.json();

            setWeather({
                city: name,
                country: country,
                temperature: weatherData.current.temperature_2m,
                humidity: weatherData.current.relative_humidity_2m,
                wind: weatherData.current.wind_speed_10m
            });

        } catch (err) {
            setError(err.message);
        }

        setLoading(false);
    };

    return (
        <div className="app">

            <h1>Weather App</h1>

            <p>Check the current weather of any city.</p>

            <div className="search">
                <input
                    type="text"
                    placeholder="Enter city name"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />

                <button onClick={getWeather}>
                    Get Weather
                </button>
            </div>

            {loading && <p>Loading weather data...</p>}

            {error && <p className="error">{error}</p>}

            {weather && (
                <div className="weather-card">

                    <h2>
                        {weather.city}, {weather.country}
                    </h2>

                    <h3>{weather.temperature}°C</h3>

                    <p>
                        Humidity: {weather.humidity}%
                    </p>

                    <p>
                        Wind Speed: {weather.wind} km/h
                    </p>

                </div>
            )}

        </div>
    );
}

export default App;