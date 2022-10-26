const fs = require('fs');
const request = require('request');
let url = process.argv[2];
let path = process.argv[3];
let fetcher = function(uri, localPath) {
  request(uri, ((error, response, body) => {
    if (error) {
      console.log("error:", error);
      return;
    }
    fs.writeFile(localPath, body, (error) => {
      console.log(body.length);
      if (error) {
        console.log("error:", error);
      }
      else {
        console.log(`Downloaded and saved ${body.length}bytes to ${localPath}`);
      }
    });
  }));
};
fetcher(url, path);

