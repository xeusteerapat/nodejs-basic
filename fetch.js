fetch('homework.json')
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => console.log(err));
