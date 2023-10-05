// app.js

const lowerCaseWords = require('./lowercase-words.js');

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error.message);
    });
