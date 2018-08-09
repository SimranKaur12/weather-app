// const request=require('request');
const yargs=require('yargs');
const geocode=require('./geocode/geocode');
const weather=require('./weather/weather');

var lat,lng;
const argv=yargs
.options({
  a:{
    demand:true,
    alias:'address',
    describe:'address of a place',
    string:true
  }
})
.help()
.alias('help','h')
.argv;
geocode.geocodeAddress(argv.address, (errorMessage,results) => {
  if(errorMessage)
  {
    console.log(errorMessage);
  }
  else {
    // console.log(JSON.stringify(results, undefined, 2));
    console.log('Address:'+results.address);
    weather.getWeather(results.latitude,results.longitude, (errorMessage,weatherResults) => {
      if(errorMessage)
      {
        console.log(errorMessage);
      }
      else {
        // console.log(JSON.stringify(weatherResults, undefined, 2));
        console.log('Temperature:'+weatherResults.temperature);
        console.log('Apparent Temperature:'+weatherResults.apparentTemperature);
      }
    });
  }
});

// 7ad734c023927c55bf4ba9e35a50bb40
