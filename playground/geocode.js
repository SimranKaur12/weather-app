const request=require('request');
var geocodeAddress=(address) =>{
    return new Promise((resolve,reject) =>{
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
      reject('Unable to connect to google servers');
      }
      else if(body.status==='ZERO_RESULTS')
      {
        reject('Unable to find the address entered.');
      }
      else if(body.status==='OK')
      {
        resolve({
        address: body.results[0].formatted_address,
        latitude:body.results[0].geometry.location.lat,
        longitude:body.results[0].geometry.location.lng
      });
    }
      });

      console.log(url);
    });
};

geocodeAddress('411020').then((location) => {
  console.log(JSON.stringify(location,undefined,2));
}, (errorMessage) =>{
  console.log('Error:'+errorMessage);
});
