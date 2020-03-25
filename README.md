# axios-info
Grab info from Axios request and response

##  Usage
```js
const axios = require('axios');
const ai = require('axios-info');


axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(ai.status(response));      //  200
    console.log(ai.statusText(response));  //  'OK'
    console.log(ai.config(response));      //  axios config object
    console.log(ai.method(response));      //  'GET'
    console.log(ai.url(response));         //  '/user?ID=12345'
    console.log(ai.urlFull(response));     //  'https://example.com/user?ID=12345'
  })
  //                                              //  or if error..
  .catch(function (error) {
    console.log(ai.status(error));         //  404
    console.log(ai.statusText(error));     //  'Not Found'
    console.log(ai.config(error));         //  axios config object
    console.log(ai.method(error));         //  'GET'
    console.log(ai.url(error));            //  '/user?ID=12345'
    console.log(ai.urlFull(error));        //  'https://example.com/user?ID=12345'
  });
```
