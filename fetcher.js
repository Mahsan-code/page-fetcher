const request = require('request');
const fs = require('fs');


let urlPath = process.argv.slice(2);

let url = urlPath[0];
let mypath = urlPath[1];


request(url, (error, response, body) => {
    fs.writeFile(mypath, body,'utf8', function (err) {
        if (err) throw err;
        fs.stat(mypath, (err, stats)=>{
            if (err) throw err;
            let size = stats.size
            console.log(`Downloaded and saved ${size} bytes to ${mypath}`)
        })
        
      });
});