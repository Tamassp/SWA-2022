
// Weather data model with prototypes
export const weatherPrototype = {
    getTemperature() {
        return this.temperature;
    },
    setTemperature(temperature) {
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

export const cities = [
    { name: "Horsens", __proto__: weatherPrototype },
    { name: "Aarhus", __proto__: weatherPrototype },
    { name: "Copenhagen", __proto__: weatherPrototype },
];

