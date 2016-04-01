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

ArrayFunctions.purgeInvenLogs = function(arr){
  let ch1 = arr.filter(elem=>elem.location==="CH1");
  let ch2 = arr.filter(elem=>elem.location==="CH2");
  if (ch1.length > 10) ch1.shift();
  if (ch2.length > 10) ch2.shift();

  return ch1.concat(ch2);
}
module.exports = ArrayFunctions;
