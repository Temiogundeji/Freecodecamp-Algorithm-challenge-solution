function truncateString(str, num) {
  let strLength = str.length;
  let slicedStr = "";
  if(strLength > num){
    slicedStr = str.substring(0, num);
    slicedStr = slicedStr+'...';
  }
  else{
    slicedStr = str;
  }
  return slicedStr;
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);