// app.js

const { resolvedPromise, rejectedPromise } = require('./promises'); 
resolvedPromise()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });

rejectedPromise()
    .then((result) => {
      
    })
    .catch((error) => {
        console.error(error.message); 
    });
