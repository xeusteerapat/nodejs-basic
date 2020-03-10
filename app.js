// const fs = require('fs');
// // fs.writeFileSync('note.txt', 'Hello, world from Node.js\n');
// // fs.appendFileSync('note.txt', 'Another Brick On The Wall');

// const message = fs.readFileSync('note.txt', { encoding: 'utf8', flag: 'r' });
// console.log(message);
const fetch = require('node-fetch');

fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(result => console.log(result))
  .catch(err => console.log(err));
