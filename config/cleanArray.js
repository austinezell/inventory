"use strict";
function cleanArray(arr){
  let returnArr = [];
  for(let element of arr){
    if (returnArr.indexOf(element)===-1 && element){
      returnArr.push(element);
    }
  }
  return returnArr;
}

module.exports = cleanArray;
