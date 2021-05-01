function repeatStringNumTimes(str, num) {
  let repeatedStr = "";
  // let repeatedArr = [];
if(num <= 0){
  return "";
}
  while(num){
    repeatedStr = repeatedStr.concat(str);
    num--;
  }
  console.log(repeatedStr);
  return repeatedStr
}

repeatStringNumTimes("abc", 3);