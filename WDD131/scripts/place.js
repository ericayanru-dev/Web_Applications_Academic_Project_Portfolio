// Fetch Country Data from REST Countries API


const country = "Canada";

async function getCountryData(country) {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
        const data = await response.json();
  
        const c = data[0];
        document.getElementById("area").textContent = c.area + " km²";
        document.getElementById("population").textContent = c.population.toLocaleString();
        document.getElementById("capital").textContent = c.capital[0];
        document.getElementById("languages").textContent = Object.values(c.languages).join(", ");
        document.getElementById("currency").textContent = Object.values(c.currencies)[0].name;
        document.getElementById("timezone").textContent = c.timezones[0];
        document.getElementById("callingcode").textContent = "+" + c.idd.root + c.idd.suffixes[0];
        document.getElementById("tld").textContent = c.tld[0];
    }
    catch (error) {
        console.error("Error fetching country data:", error);
    }}

getCountryData(country);

const temperature = document.getElementById("temperature");
const conditions = document.getElementById("conditions").textContent = "clear sky";
const wind = document.getElementById("wind");
const windchill = document.getElementById("windchill");

const tempC = 10;
const wind1 = 4;
temperature.textContent = tempC + "°C";
wind.textContent = wind1 + "m/s";

function calculateWindChill(tempC, wind1)
{
    const tempF = (tempC * (9 / 5)) + 32;
    const windSpeedMph = (wind1 * 2.237);

    let windchillC;
    if (tempF <= 50 && windSpeedMph > 3)
    {
        const windchill = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(windSpeedMph, 0.16) + 0.4275 * tempF * Math.pow(windSpeedMph, 0.16);
        windchillC = ((windchill - 32) * (5 / 9)).toFixed(1) + "°C";
    }
    else
    {
        windchillC = "N/A"
    }
    return windchillC;
}

windchill.textContent = calculateWindChill(tempC, wind1) ;


const year = document.querySelector("#date");
const lastModified = document.querySelector("#lastmodification");
const currentyear = new Date();

year.textContent = currentyear.getFullYear();
lastModified.textContent = document.lastModified;