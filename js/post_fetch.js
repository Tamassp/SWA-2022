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

const sendTemperatureFetch = () => {

    const temperatureObject = weatherFactory
    const parseJson = JSON.parse(temperatureObject);
    const jsonString = JSON.stringify(parseJson);
  
    fetch("http://localhost:8080/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonString,
    })
      .then((res) => (res.ok ? res : Promise.reject(res)))
      .catch((e) => console.log(e));
  };