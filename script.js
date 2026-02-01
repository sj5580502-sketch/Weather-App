const apiKey = "d1677f1af2a1c1ca98981e8da3ec7a11"; // replace with your API key

function getWeather() {
    const city = document.getElementById("city").value;

    if (city === "") {
        alert("Please enter city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("location").innerText =
                data.name + ", " + data.sys.country;

            document.getElementById("temperature").innerText =
                "🌡 Temperature: " + data.main.temp + " °C";

            document.getElementById("description").innerText =
                "☁ Weather: " + data.weather[0].description;

            document.getElementById("humidity").innerText =
                "💧 Humidity: " + data.main.humidity + "%";
        })
        .catch(() => {
            alert("City not found");
        });
}