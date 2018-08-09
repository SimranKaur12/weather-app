var asyncAdd = (a,b) => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      if(typeof a === 'number' && typeof b === 'number')
      {
        resolve(a+b);
      }
      else {
        reject('Both the arguments must be numbers.');
      }
    },1000);
  });
 };

// var somePromise = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     // resolve('It is working...');
//     reject('Unable to fulfill the request.');
//   },2000);
// });
//
// somePromise.then((message) => {
//   console.log('Success: '+message);
// }, (errorMessage) => {
//   console.log('Error:'+errorMessage);
// });

asyncAdd(5,'7').then((message) => {
  console.log('Success:'+message);
  return asyncAdd(message,43);
}
// , (errorMessage) =>{
//   console.log('Error:'+errorMessage);}
).then((result) => {
  console.log('Result:'+result);
// }, (errorMessage) => {
//   console.log('Error:'+errorMessage);
}).catch((errorMessage) => {
  console.log('Error:'+errorMessage);
});
