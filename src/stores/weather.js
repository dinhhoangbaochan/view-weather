import { defineStore } from 'pinia'

export const useWeatherStore = defineStore('searchedWeather', {
  state: () => {
    return {
      infoStatus: 'init', // searching, responded

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
    setInfoStatus(_status) {
      this.infoStatus = _status;
    },

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
    },

    async handleWeatherInfo(cityName, countryCode, lat, long, apiKey) {
      const weatherEndPoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`;
      const weatherForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&cnt=5&appid=${apiKey}`;

      const req = await fetch(weatherEndPoint, {method: 'GET'});
      const res = await req.json();
    
      const reqForecast = await fetch(weatherForecast, {method: 'GET'});
      const resForecast = await reqForecast.json();

      const weatherInfo = {
        cityName: cityName,
        lat: lat,
        long: long,
        country: countryCode,
    
        weatherType: res.weather[0].main,
        weatherTypeDesc: res.weather[0].description,
        temp: res.main.temp,
        feelsLike: res.main.feels_like,
        tempMin: res.main.temp_min,
        tempMax: res.main.temp_max,
    
        visibility: res.visibility,
        windSpeed: res.wind.speed,
        cloud: res.clouds.all,
        sunrise: res.sys.sunrise,
        sunset: res.sys.sunset,
        humidity: res.main.humidity,
        pressure: res.main.pressure,
        forecast: resForecast.list
      }

      this.setWeatherInformation(weatherInfo);
    }
  },
  
  getters: {
    getIconURL() {
      return `https://openweathermap.org/img/wn/${this.icon}@2x.png`;
    },

    getForecastList() {
      return this.forecast;
    },
  }
})