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

//TEMPERATURE FACTORY
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




