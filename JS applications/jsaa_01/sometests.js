
import fetch from 'node-fetch';
// const https = require('https');

// let data = https.get('https://api.github.com/users/martin7n/repos', (res) =>
//    console.log("res")
// )

// console.log(data)





const url = 'https://api.github.com/users/martin7n/repos';


fetch(url)
  .then(response => response.json())  // Parse the JSON response
  .then(data => {
    data.forEach(repo => {
        console.log(repo.name);   
      });
  })
  .catch(error => {
    console.error(`Error: ${error.message}`);
  })


  const localServerUrl = 'http://localhost:3030/data/'

  fetch(localServerUrl)
  .then(response => response.json())  // Parse the JSON response
  .then(data => {
    data.forEach(repo => {
        console.log(repo);   
      });
  })
  .catch(error => {
    console.error(`Error: ${error.message}`);
  })
