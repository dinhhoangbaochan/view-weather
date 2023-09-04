import { defineStore } from 'pinia'

export const useWeatherStore = defineStore('searchedWeather', {
  state: () => {
    return {
      cityName: '',
      latitude: 0,
      longtitude: 0,
      country: '',
      weatherType: '',
      weatherTypeDesc: '',
      temp: 0,
      feelsLike: 0,
      tempMin: 0,
      tempMax: 0,
      visibility: 0,
      windSpeed: 0,
      cloud: 0,
      sunrise: 0,
      sunset: 0,
      humidity: 0,
      pressure: 0,
      forecast: []
    }
  },

  actions: {
    setWeatherInformation (_weatherInfo) {
      this.cityName = _weatherInfo.cityName;
      this.latitude = _weatherInfo.lat;
      this.longtitude = _weatherInfo.long;
      this.country = _weatherInfo.country;

      this.weatherType = _weatherInfo.weatherType;
      this.weatherTypeDesc = _weatherInfo.weatherTypeDesc;
      this.temp = _weatherInfo.temp;
      this.feelsLike = _weatherInfo.feelsLike;
      this.tempMin = _weatherInfo.tempMin;
      this.tempMax = _weatherInfo.tempMax;

      this.visibility = _weatherInfo.visibility;
      this.windSpeed = _weatherInfo.windSpeed;
      this.cloud = _weatherInfo.cloud;
      this.sunrise = _weatherInfo.sunrise;
      this.sunset = _weatherInfo.sunset;
      this.humidity = _weatherInfo.humidity;
      this.pressure = _weatherInfo.pressure;
      this.forecast = _weatherInfo.forecast;
    }
  },
  
  getters: {
    getIconURL() {
      return `https://openweathermap.org/img/wn/${this.icon}@2x.png`;
    },

    getForecastList() {
      return this.forecast;
    }
  }
})