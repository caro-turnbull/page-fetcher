// expected input:
//take in two args (url, local file path)
// > node fetcher.js http://www.example.edu/ ./index.html
const fs = require('fs')

const url = process.argv[2]
const localPath = process.argv[3]
//console.log(url, localPath)

//make an http request and wait for response
const nodeRequest = function(url, localPath){
    const request = require('request');
    request(url, (error, response, body) =>{
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    fs.writeFile(localPath, body,(error) => { 
      if(error){
      console.log("Erorr")
      } else {
        console.log(`Downloaded and saved ${body.length} to ${localPath}`)
      }
    })
  });
}

nodeRequest(url, localPath)

//then take data rcvd and write ro local file

//log when complete
