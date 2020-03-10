const fs = require('fs');

// Asynchronous
// const myFetch = path => {
//   fs.readFile(path, 'utf8', (err, data) => {
//     return new Promise((resolve, reject) => {
//       resolve(data);
//       console.log(data);
//     });
//   });
// };

// Synchronous
const myFetch = path => {
  return new Promise((resolve, reject) => {
    let data = {
      obj: fs.readFileSync(path, 'utf8'),
      toJSON() {
        return new Promise((resolve, reject) => {
          resolve(JSON.parse(this.obj));
        });
      }
    };
    resolve(data);
  });
};

myFetch('homework.json')
  .then(data => {
    return data.toJSON();
  })
  .then(result => {
    console.log(result);
  });
// console.log(myFetch('homework.json'));
