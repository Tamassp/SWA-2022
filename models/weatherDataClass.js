class WeatherData {
    constructor(temperature, precipitation, windSpeed, cloudCoverage) {
        this.temperature = temperature;
        this.precipitation = precipitation;
        this.windSpeed = windSpeed;
        this.cloudCoverage = cloudCoverage;
    }

    getTemperature() {
        return this.temperature;
    }
    setTemperature(temperature) {
        this.temperature = temperature;
    }
    getPrecipitation() {
        return this.precipitation;
    }
    setPrecipitation(precipitation) {
        this.precipitation = precipitation;
    }
    getWindSpeed() {
        return this.windSpeed;
    }
    setWindSpeed(windSpeed) {
        this.windSpeed = windSpeed;
    }
    getCloudCoverage() {
        return this.cloudCoverage;
    }
    setCloudCoverage(cloudCoverage) {
        this.cloudCoverage = cloudCoverage;
    }
} 

class City extends WeatherData{
    constructor(name, temperature, precipitation, windSpeed, cloudCoverage) {
        super(temperature, precipitation, windSpeed, cloudCoverage)
        this.name = name;
    }
}

const cities = [
    new City("Horsens", 1, 2, 3, 4),
    new City("Aarhus", 1, 2, 3, 4),
    new City("Copenhagen" , 1, 2, 3, 4),
];

console.log(cities);
/*
[
  City {
    temperature: 1,
    precipitation: 2,
    windSpeed: 3,
    cloudCoverage: 4,
    name: 'Horsens'
  },
  City {
    temperature: 1,
    precipitation: 2,
    windSpeed: 3,
    cloudCoverage: 4,
    name: 'Aarhus'
  },
  City {
    temperature: 1,
    precipitation: 2,
    windSpeed: 3,
    cloudCoverage: 4,
    name: 'Copenhagen'
  }
]
*/

class HistoricalData {
    constructor(cityName, temperature, precipitation, windSpeed, cloudCoverage) {
        this.cityName = cityName;
        this.temperature = temperature;
        this.precipitation = precipitation;
        this.windSpeed = windSpeed;
        this.cloudCoverage = cloudCoverage;
    }
    getTemperature() {
        return this.temperature;
    }
    setTemperature(temperature) {
        this.temperature = temperature;
    }
    getPrecipitation() {
        return this.precipitation;
    }
    setPrecipitation(precipitation) {
        this.precipitation = precipitation;
    }
    getWindSpeed() {
        return this.windSpeed;
    }
    setWindSpeed(windSpeed) {
        this.windSpeed = windSpeed;
    }
    getCloudCoverage() {
        return this.cloudCoverage;
    }
    setCloudCoverage(cloudCoverage) {
        this.cloudCoverage = cloudCoverage;
    }
}

const cities2 = [
    new HistoricalData("Horsens", 1, 2, 3, 4),
    new HistoricalData("Aarhus", 1, 2, 3, 4),
    new HistoricalData("Copenhagen" , 1, 2, 3, 4),
];

console.log(cities2);
/*
[
  HistoricalData {
    cityName: 'Horsens',
    temperature: 1,
    precipitation: 2,
    windSpeed: 3,
    cloudCoverage: 4
  },
  HistoricalData {
    cityName: 'Aarhus',
    temperature: 1,
    precipitation: 2,
    windSpeed: 3,
    cloudCoverage: 4
  },
  HistoricalData {
    cityName: 'Copenhagen',
    temperature: 1,
    precipitation: 2,
    windSpeed: 3,
    cloudCoverage: 4
  }
]
*/