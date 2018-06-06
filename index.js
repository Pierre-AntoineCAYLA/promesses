var fs=require("fs-extra");
var Promise = require('es6-promise').Promise;

fs.emptyDir("./temp").then(()=>
        fs.readJson("mocks/pubs.json").then((contenu)=>
            fs.writeJSON("./temp/pubs.json",contenu)      
            )
        )
    .catch(err =>{
        throw err;
    }
);

fs.watchFile('temp/pubs.json', (curr, prev) => {
    console.log(`the current mtime is: ${curr.mtime}`);
    console.log(`the previous mtime was: ${prev.mtime}`);
    fs.readFile("./temp/pubs.json",'utf8',function(err,data){
        if(err){
           return console.log(err);
        }
        console.log(data);}
    )
  }
);