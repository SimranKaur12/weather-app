const request=require('request');

var geocodeAddress= (address,callback) => {
var encodedAddress=encodeURIComponent(address);
// AIzaSyBlcEq1mNAWJTBJLplNb4J3Dsa8Jj3vbbU
var apikey='AIzaSyB541HKc21JZEe9jBOdKg0KiB0oxNYfV3k';
var url=`https://maps.googleapis.com/maps/api/geocode/json?address=`+encodedAddress
request({
  url:url,
  json: true
}, (error, response, body) => {
  if(error)
  {
  callback('Unable to connect to google servers');
  }
  else if(body.status==='ZERO_RESULTS')
  {
    callback('Unable to find the address entered.');
  }
  else if(body.status==='OK')
  {
    callback(undefined, {
    address: body.results[0].formatted_address,
    latitude:body.results[0].geometry.location.lat,
    longitude:body.results[0].geometry.location.lng
  });
}
  });

  console.log(url);
};

module.exports.geocodeAddress=geocodeAddress;
