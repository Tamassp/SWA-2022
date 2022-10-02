//WEATHER FACTORY
function weatherFactory(type, value, time, place, unit) {
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

    const getUnit = () => unit;
    const setUnit = (_unit) => {
        unit = _unit;
    }

    return {
        getType,
        setType,
        getValue,
        setValue,
        getTime,
        setTime,
        getPlace,
        setPlace,
        getUnit,
        setUnit
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
        ...weather,
        getPrecipitationType,
        setPrecipitationType

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
        ...weather,
        getDirection,
        setDirection
    }
}

const sendTemperatureXML = () => {

    const temperatureObject = weatherFactory(
        "temperature",
        document.getElementById("value-temperature"),
        document.getElementById("time-temperature"),
        document.querySelector('input[name="place"]:checked').value,
        "C"
    )
    const parseJson = JSON.parse(temperatureObject);
    const jsonString = JSON.stringify(parseJson);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", `http://localhost:8080/data`);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = () => {
        console.log(xhr.responseText);
    };
    xhr.onerror = () => {
        console.log("Error...");
    };
    xhr.send(jsonString);
};