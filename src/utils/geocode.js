const request = require("request");

const geoCode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?access_token=pk.eyJ1IjoiZW1pbGJvYiIsImEiOiJja3lhaTZrY20wNWZjMnZxbGNhZTBtNGs0In0.Wyen-tRJ73-_b26Mep3Pvw";

  request({ url, json: true }, (error, {body}) => {
    if (error) {
      callback("unable to conect to location services", undefined);
    } else if (body.features.length === 0) {
      callback("unable to find location, try another search", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[0],
        longitude: body.features[0].center[1],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geoCode;
