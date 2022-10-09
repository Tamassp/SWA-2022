//CREATING THE FORECAST TABLE TO SHOW THE FORECAST DATA
console.log("SCript");
const forecastDiv = document.querySelector("div.forecastTableDiv") //Find the Forecast Table in our html

let forecastTableHeaders = ['Time', 'Temperature', 'Precipitation', 'Wind Speed', 'Cloud Coverage']

const createForecastTable = () => {
    console.log("SCript2");
    while (forecastDiv.firstChild) forecastDiv.removeChild(forecastDiv.firstChild) //Remove all children from forecast div (if any)

    let forecastTable = document.createElement('table') //Creates the table itself
    forecastTable.className = 'forecastTable'

    let forecastTableHead = document.createElement('thead') //Creates the table header
    forecastTableHead.className = 'forecastTableHead'

    let forecastTableHeaderRow = document.createElement('tr') //Creates the row for the headers
    forecastTableHeaderRow.className = 'forecastTableHeaderRow'

    //Table header setup
    forecastTableHeaders.forEach(header => {
        let forecastHeader = document.createElement('th') //Current header cell
        forecastHeader.innerText = header
        forecastTableHeaderRow.append(forecastHeader) //Appends the currend header cell to the header row
    })
    
    forecastTableHead.append(forecastTableHeaderRow) // Appends the header row to the table header group element
    forecastTable.append(forecastTableHead)

    let forecastTableBody = document.createElement('tbody') // Creates the body of the table
    forecastTableBody.className = 'forecastTableBody'
    forecastTable.append(forecastTableBody) //Append the table body to the table

    forecastDiv.append(forecastTable) // Appends the table to the forecast div

}

const getForecast = (city) => {
    fetch(`http://localhost:8080/forecast/${city}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => (response.ok ? response : Promise.reject(response)))
    .then((res) => res.json())
    .then((data) => {
        for(let i = 0; i < 96; i+=4) {
            appendForecasts(data[i], data[i+1], data[i+2], data[i+3]);
        }
        //let textArea = document.getElementById("forecastTextArea");
        //let structuredData = JSON.stringify(data, null, 3);
        //console.log("STRUCTURED DATA: " + structuredData);
        //textArea.value = structuredData;
    })
    .catch((error) => {
      console.log("error");
    });
    
}


// The function below will accept a single forecast item and its index
const appendForecasts = (singleForecast, singleForecast2, singleForecast3, singleForecast4) => {
    const forecastTable = document.querySelector('.forecastTable') // Find the table we created
    let forecastTableBodyRow = document.createElement('tr') // Create the current table row
    forecastTableBodyRow.className = 'forecastTableBodyRow'
    // console.log(city)
    //We need to check if
    //create the 5 column cells that will be appended to the current table row
    //console.log("TIME: " + singleForecast.time);
    let time = document.createElement('td')
    time.innerText = singleForecast.time

    let temperature = document.createElement('td')
    temperature.innerText = singleForecast.from + '...' + singleForecast.to
    
    let precipitation = document.createElement('td')
    precipitation.innerText = singleForecast2.from + '...' + singleForecast2.to + '(' + singleForecast2.precipitation_types + ')'
    
    let windSpeed = document.createElement('td')
    windSpeed.innerText = singleForecast3.from +'...' + singleForecast3.to + '(' + singleForecast3.directions + ')'

    let cloudCoverage = document.createElement('td')
    cloudCoverage.innerText = singleForecast4.from + '...' + singleForecast4.to
    

    forecastTableBodyRow.append(time, temperature, precipitation, windSpeed, cloudCoverage) // Append all 5 cells to the table row
    forecastTable.append(forecastTableBodyRow) // Append the current row to the scoreboard table body
}

createForecastTable();