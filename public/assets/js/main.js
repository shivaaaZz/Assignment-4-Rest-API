console.log("Shiva is here");

// As a default show something on the page 
document.addEventListener('DOMContentLoaded', () => {
    const ChoosenCity = document.getElementById('city').value;
    getData(ChoosenCity);
});

// When choose the city and click the button show the results
document.getElementById('resultBtn').addEventListener('click', () => {
    const ChoosenCity = document.getElementById('city').value;
    getData(ChoosenCity);
});

// getting API 
async function getData(city){
    try{
        // getting API
        const myData = await fetch (`http://api.weatherapi.com/v1/current.json?key=cbf6a677d97540fd96a180350241202&q=${city}&aqi=no`);

        // convert the data to json
        const weatherData = await myData.json();
        console.log(weatherData);

        /////// Location
        console.log(weatherData.location.country);
        let Location = document.getElementById("Location");
        Location.innerHTML= `${weatherData.location.country}`;

        /////// weather Condition
        console.log(weatherData.current.condition.text);
        let weatherCondition = document.getElementById("weatherCondition");
        weatherCondition.innerHTML= `<img src="${weatherData.current.condition.icon}"/> <h1> ${weatherData.current.condition.text} </h1>` ;

        /////// Temperature
        console.log(weatherData.current.temp_c);
        let Temperature = document.getElementById("Temperature");
        Temperature.innerHTML = `${weatherData.current.temp_c} &deg C`;

        /////// Feels like
        // call the data that I want . Always start with "weatherData"
        console.log(weatherData.current.feelslike_c);
        let FeelsLike = document.getElementById("FeelsLike");
        // Add data directly to HTML
        FeelsLike.innerHTML = `${weatherData.current.feelslike_c} &deg C`;

        ///////// Humidity
        console.log(weatherData.current.humidity);
        let Humidity = document.getElementById("Humidity");
        Humidity.innerHTML = `${weatherData.current.humidity}`;
        
        ///////// Local Time
        console.log(weatherData.location.localtime);
        let localTime = document.getElementById("localTime");
        localTime.innerHTML = `${weatherData.location.localtime}`;


    }catch (error){
        // console.warn("nope:" + error);
        console.warn(`Nope: ${error}`)

    }
}


