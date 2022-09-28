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

const forecasts = [
    {
    "time": 456,
    'temperature': 45,
    'precipitation': 44,
    'wind_speed': 11,
    'cloud_coverage': 22
    },
    {
    "time": 111,
    'temperature': 11,
    'precipitation': 213,
    'wind_speed': 121,
    'cloud_coverage': 123
    }
]

// const forecasts2 = [{"type": "temperature",
//   "time": "2019-07-31T10:07:00.000Z",
//   "place": "Aarhus",
//   "from": 19,
//   "to": 22,
//   "unit": "C"},
//  {"type": "precipitation",
//   "time": "2019-07-31T10:07:00.000Z",
//   "place": "Aarhus",
//   "from": 0.0,
//   "to": 0.5,
//   "unit": "mm",
//   "precipitation_types": ["rain"]},
//  {"type": "wind speed",
//   "time": "2019-07-31T10:07:00.000Z",
//   "place": "Aarhus",
//   "from": 4,
//   "to":6,
//   "unit": "m/s",
//   "directions": ["South", "Southwest"]},
// {"type": "cloud coverage",
//   "time": "2019-07-31T10:07:00.000Z",
//   "place": "Aarhus",
//   "from": 75,
//   "to":100,
//   "unit": "%"}]

// The function below will accept a single forecast item and its index
const appendForecasts = (singleForecast, city) => {
    const forecastTable = document.querySelector('.forecastTable') // Find the table we created
    let forecastTableBodyRow = document.createElement('tr') // Create the current table row
    forecastTableBodyRow.className = 'forecastTableBodyRow'
    console.log(city)
    //We need to check if
    //create the 5 column cells that will be appended to the current table row
    let time = document.createElement('td')
    time.innerText = singleForecast.time

    let temperature = document.createElement('td')
    temperature.innerText = singleForecast.temperature
    
    let precipitation = document.createElement('td')
    precipitation.innerText = singleForecast.precipitation
    
    let windSpeed = document.createElement('td')
    windSpeed.innerText = singleForecast.wind_speed

    let cloudCoverage = document.createElement('td')
    cloudCoverage.innerText = singleForecast.cloud_coverage
    

    forecastTableBodyRow.append(time, temperature, precipitation, windSpeed, cloudCoverage) // Append all 5 cells to the table row
    forecastTable.append(forecastTableBodyRow) // Append the current row to the scoreboard table body
}

createForecastTable();
appendForecasts(forecasts[0], 'Horsens')
appendForecasts(forecasts[1], 'Aarhus')
appendForecasts(forecasts[1], 'Aarhus')

