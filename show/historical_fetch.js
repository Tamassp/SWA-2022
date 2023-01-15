//WEATHER FACTORY
function weatherFactory(type, value, time, place) {
    const getType = () => type;
    const setType = (_type) => {
        type = _type;
    }

    const getValue = () => value;
    const setValue = (_value) => {
        value = _value;
    }

    const getTime = () => time;
    const setTime = (_time) => {
        time = _time;
    }

    const getPlace = () => place;
    const setPlace = (_place) => {
        place = _place;
    }

    return {
        getType,
        setType,
        getValue,
        setValue,
        getTime,
        setTime,
        getPlace,
        setPlace
    }
}

//PRECIPITATION FACTORY
function precipitationFactory(type, value, time, place, precipitation_type) {
    const weather = weatherFactory(type, value, time, place);
    const getPrecipitationType = () => precipitation_type;
    const setPrecipitationType = (_precipitation_type) => {
        precipitation_type = _precipitation_type;
    }

    return {
        ...weather, getPrecipitationType, setPrecipitationType
        
    }
}

//WIND SPEED FACTORY
function windSpeedFactory(type, value, time, place, direction) {
    const weather = weatherFactory(type, value, time, place);
    const getDirection = () => direction;
    const setDirection = (_direction) => {
        direction = _direction;
    }

    return {
        ...weather, getDirection, setDirection
    }
}


function update(city) {
    // console.log("CITY" + city);
    getLastMeasurement(city);
    getHistoricalData(city);
    getForecast(city);
    createForecastTable();
}

function getLastMeasurement(city) {
    fetch(`http://localhost:8080/data/${city}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => (response.ok ? response : Promise.reject(response)))
    .then((res) => res.json())
    .then((data) => {
        const length = data.length - 1;
        for(let i = 0; i < 4; i++) {
            switch(data[length - i].type) {
                case "temperature":
                    document.getElementById("temperature").innerHTML = `${data[length - i].value} °C`;
                    break;
                case "precipitation":
                    document.getElementById("precipitation").innerHTML = `${data[length - i].value} mm`;
                    break;
                case "wind speed":
                    document.getElementById("windSpeed").innerHTML = `${data[length - i].value} m/s`;
                    break;
                case 'cloud coverage':
                    document.getElementById("cloudCoverage").innerHTML = `${data[length - i].value} %`;
                    break;
            }
        }
    })
    .catch((error) => console.log(`Error: ${error}`));
};

const getHistoricalData = (city) => {
   const promise = fetch(`http://localhost:8080/data/${city}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
  promise
    .then((response) => (response.ok ? response : Promise.reject(response)))
    //converting to json
    .then((res) => res.json())
    .then((userData) => {
        let minTemp = userData[0].value;
        let maxTemp = userData[0].value;
        let totalPrecipitation = 0;
        let averageWindSpeed = 0;
        //LATEST DAY 96 LENGHT
        for (let i = 0; i < 96; i++) {
            if (userData[i].type === "temperature") {
                if (userData[i].value < minTemp) {
                    minTemp = userData[i].value;
                }
                if (userData[i].value > maxTemp) {
                    maxTemp = userData[i].value;
                }
            }
            if (userData[i].type === "precipitation") {
                totalPrecipitation += userData[i].value;
            }
            if (userData[i].type === "wind speed") {
                averageWindSpeed += userData[i].value;
            }
        }

        document.getElementById("minTemp").innerHTML = `${minTemp} °C`;
        document.getElementById("maxTemp").innerHTML = `${maxTemp} °C`;
        document.getElementById("totalPrecipitation").innerHTML = `${totalPrecipitation.toFixed(4)} mm`;
        document.getElementById("averageWindSpeed").innerHTML = `${(averageWindSpeed / userData.length).toFixed(4)} m/s`;
    })
    .catch((error) => console.log(`Error: ${error}`));
};

//Sets up the data for Horsens by default
getLastMeasurement('Horsens');
getHistoricalData('Horsens');
getForecast('Horsens');