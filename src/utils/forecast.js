const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=1435183c8593da1ee337bbb1462d4364&query=" +
    longitude +
    "," +
    latitude +
    "&units=f";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location!", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          " Its currently " +
          body.current.temperature +
          " degrees, but it feels like " +
          body.current.feelslike +
          " degrees out! " +
          " and the humidity is " +
          body.current.humidity + "%"
      );
    }
  });
};

module.exports = forecast;
