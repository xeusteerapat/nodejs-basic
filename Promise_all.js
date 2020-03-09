// var p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('one'), 1000);
// });
// var p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('two'), 2000);
// });
// var p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('three'), 3000);
// });
// var p4 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('four'), 4000);
// });
// // var p5 = new Promise((resolve, reject) => {
// //   reject(new Error('reject'));
// // });

// // Using .catch:
// Promise.all([p1, p2, p3, p4])
//   .then(values => {
//     console.log(values);
//   })
//   .catch(error => {
//     console.error(error.message);
//   });

const setTimeoutAndLog = async input => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(input);
      resolve();
    }, 1000);
  });
};

let a = setTimeoutAndLog('a');
let b = setTimeoutAndLog('b');
let c = setTimeoutAndLog('c');
let d = setTimeoutAndLog('d');

Promise.all([a, b, c, d]).then(values => {
  console.log(values);
});
