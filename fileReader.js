"use strict";
const walk = require('walk');
const fs = require('fs');
function fileWalker() {
  var files = [];
  var walker = walk.walk('./src/js', {followLinks: false});

  walker.on("file", (root, stat, next)=>{
    if(stat.name !== "index.js"){
      let name = `import "${root}/${stat.name}";`;
      name = name.replace("/src/js", "");
      files.push(name);
    }
    next();
  })

  walker.on('end', ()=>{
    let str = files.join("\n")
    fs.writeFile('./src/js/index.js', str, (err)=>{
      if(err) throw err;
    })
  })
};
module.exports = fileWalker;
