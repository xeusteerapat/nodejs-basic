function add(a, b, cb) {
  cb(a + b);
}

add(4, 5, function(result) {
  console.log(result);
});

function mul(x, y, callback) {
  callback(x * y);
}

mul(6, 7, result => {
  console.log(result);
});

function max(x, y, callback) {
  if (x > y) {
    callback(x);
  } else {
    callback(y);
  }
}

max(68, 7, result => console.log(result));
