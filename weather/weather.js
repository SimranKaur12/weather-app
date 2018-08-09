const request=require('request');

var getWeather = (latitude,longitude,callback) => {
  request({
    url:'https://api.darksky.net/forecast/7ad734c023927c55bf4ba9e35a50bb40/'+latitude+','+longitude,
    json:true
  }, (error,response,body) => {
    if(error)
    {
    callback('Unable to connect to google servers');
    }
   else if(response.statusCode === 200)
   {
     callback(undefined, {
       temperature:body.currently.temperature,
       apparentTemperature: body.currently.apparentTemperature
   });
   }

    else
    {
      callback('Unable to find the address entered.');
    }
  });
};

module.exports.getWeather=getWeather;
