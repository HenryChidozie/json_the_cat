
const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
      
    const data = JSON.parse(body);
    if (data.length < 1) {
      return callback('Breed not found', null);

    }
    if (error || response.statusCode !== 200) {
      return callback(error || 'ERROR', null);
    } else {
      return callback(null, data[0].description);
      
    }
  });
};

module.exports = { fetchBreedDescription };