"use strict";
const walk = require('walk');
const fs = require('fs');
module.exports = function() {
  let isDone = false;
  var files = [];

  var walker = walk.walk('./src/js', {followLinks: false});

  walker.on("file", function(root, stat, next){
    if(stat.name !== "index.js"){
      let name = `import "${root}/${stat.name}";`;
      name = name.replace("/src/js", "");
      files.push(name);
    }
    next();
  })

  walker.on('end', function(){
    let test = files.join("\n")
    fs.writeFile('./src/js/index.js', test, (err)=>{
      if(err) throw err;
    })
  })
};
