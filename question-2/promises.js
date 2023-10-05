const resolvedPromise = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let success = { message: 'delayed success!' };
        resolve(success);
      }, 500);
    });
  };
  
  const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          throw new Error('error: delayed exception!');
        } catch (e) {
          reject(e);
        }
      }, 500);
    });
  };
  
module.exports = { resolvedPromise, rejectedPromise };