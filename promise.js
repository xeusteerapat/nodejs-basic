const getBeer = () => {
  fetch('https://api.punkapi.com/v2/beers')
    .then(res => res.json())
    .then(beers => console.log(beers))
    .catch(err => console.log(err));
};

getBeer();
