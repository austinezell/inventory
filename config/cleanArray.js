"use strict";
let ArrayFunctions = {};
ArrayFunctions.cleanArray =function (arr){
  let returnArr = [];
  for(let element of arr){
    if (returnArr.indexOf(element)===-1 && element){
      returnArr.push(element);
    }
  }
  return returnArr;
}

ArrayFunctions.sortObjects = function(a,b){
  if (a.title < b.title) return -1;
  else return 1;
}

module.exports = ArrayFunctions;
