// setTimeout(() => {
//   console.log('a');
//   setTimeout(() => {
//     console.log('b');
//     setTimeout(() => {
//       console.log('c');
//       setTimeout(() => {
//         console.log('d');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// Promise based
// const setTimeoutAndLog = input => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(input);
//       resolve();
//     }, 1000);
//   });
// };

// setTimeoutAndLog('a')
//   .then(() => {
//     return setTimeoutAndLog('b');
//   })
//   .then(() => {
//     return setTimeoutAndLog('c');
//   })
//   .then(() => {
//     return setTimeoutAndLog('d');
//   });

// Async/Await
const setTimeoutAndLog = async input => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (input === 'c') {
        // reject('C is Error');
      } else {
        console.log(input);
        resolve();
      }
    }, 1000);
  });
};

const runTimer = async () => {
  try {
    await setTimeoutAndLog('a');
    await setTimeoutAndLog('b');
    await setTimeoutAndLog('c');
  } catch (error) {
    console.log(error);
  }
};
runTimer();
