
const request = require('request');
const args = process.argv.slice(2);

const searchCats = (args) => {
  const [breed] = args;
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
      console.log(error);
    } else {
      let data = JSON.parse(body);
      //console.log(typeof data);
      if (data.length === 0) {
        console.log('Breed not Found');
      } else {
        console.log('body:', data); // this will print the HTML page for the google homepage
      }
    }

  });
};

searchCats(args);