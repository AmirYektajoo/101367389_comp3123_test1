// lowerCaseWords.js

const lowerCaseWords = (mixedArray) => {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)) {
            reject(new Error('Input is not an array'));
        } else {
            const filteredAndLowercased = mixedArray.filter((item) => {
                return typeof item === 'string';
            }).map((item) => {
                return item.toLowerCase();
            });
          
            resolve(filteredAndLowercased);
        }
    });
};

module.exports = lowerCaseWords; 