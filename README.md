# axios-info
Grab info from Axios request and response

##  Usage
```js
const axios = require('axios');
const axiosInfo = require('axios-info');


axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(axiosInfo.status(response));      //  200
    console.log(axiosInfo.statusText(response));  //  'OK'
    console.log(axiosInfo.config(response));      //  axios config object
    console.log(axiosInfo.method(response));      //  'GET'
    console.log(axiosInfo.url(response));         //  '/user?ID=12345'
    console.log(axiosInfo.urlFull(response));     //  'https://example.com/user?ID=12345'
  })
  //                                              //  or if error..
  .catch(function (error) {
    console.log(axiosInfo.status(error));         //  404
    console.log(axiosInfo.statusText(error));     //  'Not Found'
    console.log(axiosInfo.config(error));         //  axios config object
    console.log(axiosInfo.method(error));         //  'GET'
    console.log(axiosInfo.url(error));            //  '/user?ID=12345'
    console.log(axiosInfo.urlFull(error));        //  'https://example.com/user?ID=12345'
  });
```