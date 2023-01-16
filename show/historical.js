// //WEATHER FACTORY
//  weatherFactory(type, value, time, place) {
//     const getType = () => type;
//     const setType = (_type) => {
//         type = _type;
//     }


//     const getValue = () => value;
//     const setValue = (_value) => {
//         value = _value;
//     }

//     const getTime = () => time;
//     const setTime = (_time) => {
//         time = _time;
//     }

//     const getPlace = () => place;
//     const setPlace = (_place) => {
//         place = _place;
//     }

//     return {
//         getType,
//         setType,
//         getValue,
//         setValue,
//         getTime,
//         setTime,
//         getPlace,
//         setPlace
//     }
// }

// //TEMPERATURE FACTORY
// function precipitationFactory(type, value, time, place, precipitation_type) {
//     const weather = weatherFactory(type, value, time, place);
//     const getPrecipitationType = () => precipitation_type;
//     const setPrecipitationType = (_precipitation_type) => {
//         precipitation_type = _precipitation_type;
//     }

//     return {
//         ...weather, getPrecipitationType, setPrecipitationType
        
//     }
// }

// //WIND SPEED FACTORY
// function windSpeedFactory(type, value, time, place, direction) {
//     const weather = weatherFactory(type, value, time, place);
//     const getDirection = () => direction;
//     const setDirection = (_direction) => {
//         direction = _direction;
//     }

//     return {
//         ...weather, getDirection, setDirection
//     }
// }


//With Oject.create
// const weatherPrototype = {
//     getTemperature() {
//         return this.temperature;

//import {cities} from "./weatherDataProto.js";


// Weather data model with prototypes
const weatherPrototype = {
    getTemperature() {
        console.log("THIS: " + this)
        return this.temperature;
    },
    setTemperature(temperature) {
        console.log("THIS2: " + this)
        this.temperature = temperature;
    },
    getPrecipitation() {
        return this.precipitation;
    },
    setPrecipitation(precipitation) {
        this.precipitation = precipitation;
    },
    getWindSpeed() {
        return this.windSpeed;
    },
    setWindSpeed(windSpeed) {
        this.windSpeed = windSpeed;
    },
    getCloudCoverage() {
        return this.cloudCoverage;
    },
    setCloudCoverage(cloudCoverage) {
        this.cloudCoverage = cloudCoverage;
    }
}

const cities = [
    //__proto__: weatherPrototype is used to set the prototype of the object
    { name: "Horsens",  __proto__: weatherPrototype },
    { name: "Aarhus", __proto__: weatherPrototype },
    { name: "Copenhagen", __proto__: weatherPrototype },
];

// With Object.create
const cities2 = [
    Object.create(weatherPrototype, {name: {value: "Horsens"}}),
    Object.create(weatherPrototype, {name: {value: "Aarhus"}}),
    Object.create(weatherPrototype, {name: {value: "Copenhagen"}})
];

//A BETTER SOLUTION WITH CONSTRUCTOR FUNCTIONS IS IN WEATHERDATACLASS.JS



function update(city) {
    // console.log("CITY" + city);
    getLastMeasurement(city);
    getHistoricalData(city);
    getForecast(city);
    createForecastTable();
}

const getLastMeasurement = (city) => {
    const request = new XMLHttpRequest();
    //preperation for the request (not opens anything yet)
    request.open('GET', `http://localhost:8080/data/${city}`);
    
    //Optionally
    //request.responseType = 'json';

    request.onload = () => {
        const data = JSON.parse(request.responseText);
        const length = data.length - 1;
        for(let i = 0; i < 4; i++) {
            switch(data[length - i].type) {
                case "temperature":
                    cities2.find(x => x.name === `${city}`).setTemperature(data[length - i].value);
                    //document.getElementById("temperature").innerHTML = `${data[length - i].value} °C`;
                    break;
                case "precipitation":
                    cities.find(x => x.name === `${city}`).setPrecipitation(data[length - i].value);
                    //document.getElementById("precipitation").innerHTML = `${data[length - i].value} mm`;
                    break;
                case "wind speed":
                    cities.find(x => x.name === `${city}`).setWindSpeed(data[length - i].value);
                    //document.getElementById("windSpeed").innerHTML = `${data[length - i].value} m/s`;
                    break;
                case 'cloud coverage':
                    cities.find(x => x.name === `${city}`).setCloudCoverage(data[length - i].value);
                    //document.getElementById("cloudCoverage").innerHTML = `${data[length - i].value} %`;
                    break;
            }
        }
        console.log(cities);
        console.log(cities2);
        updateUI(city);
    }
    request.onerror = () => {
        console.log("error");
    };
    //Initiates the request
    request.send();
};

const getHistoricalData = (city) => {
    const request = new XMLHttpRequest();
    request.open('GET', `http://localhost:8080/data/${city}`);
    request.onload = () => {
        const data = JSON.parse(request.responseText);
        let minTemp = data[0].value;
        let maxTemp = data[0].value;
        let totalPrecipitation = 0;
        let averageWindSpeed = 0;
        //LATEST DAY 96 LENGHT
        for (let i = 0; i < 96; i++) {
            if (data[i].type === "temperature") {
                if (data[i].value < minTemp) {
                    minTemp = data[i].value;
                }
                if (data[i].value > maxTemp) {
                    maxTemp = data[i].value;
                }
            }
            if (data[i].type === "precipitation") {
                totalPrecipitation += data[i].value;
            }
            if (data[i].type === "wind speed") {
                averageWindSpeed += data[i].value;
            }
        }

        document.getElementById("minTemp").innerHTML = `${minTemp} °C`;
        document.getElementById("maxTemp").innerHTML = `${maxTemp} °C`;
        document.getElementById("totalPrecipitation").innerHTML = `${totalPrecipitation.toFixed(4)} mm`;
        document.getElementById("averageWindSpeed").innerHTML = `${(averageWindSpeed / data.length).toFixed(4)} m/s`;
    };
    //checks if the request failed
    request.onerror = () => {
        console.log("error");
    };
    request.send();



    //optimalization for error handling could be
    /*
    request.onload = () => {
        if (request.status >= 400) {
            reject(request.response);
        } else {
            resolve(request.response);
        }
    }
    */
};


const updateUI = (city) => {
    document.getElementById("temperature").innerHTML = `${cities2.find(x => x.name === `${city}`).getTemperature()} °C`;
    document.getElementById("precipitation").innerHTML = `${cities.find(x => x.name === `${city}`).getPrecipitation()} °C`;
    document.getElementById("windSpeed").innerHTML = `${cities.find(x => x.name === `${city}`).getWindSpeed()} °C`;
    document.getElementById("cloudCoverage").innerHTML = `${cities.find(x => x.name === `${city}`).getCloudCoverage()} °C`;
}
    


//Sets up the data for Horsens by default
getLastMeasurement('Horsens');
getHistoricalData('Horsens');
getForecast('Horsens');




