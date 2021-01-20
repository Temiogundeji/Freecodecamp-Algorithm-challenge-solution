function findLongestWordLength(str) {
  const strArr = str.split(' ');
  let max = 0;
  for(let i=0; i < strArr.length; i++){
    let currentElem = strArr[i].length;
    /**
     * if the current element is greater than max (0)
     * then update the value of max to the current value
     * till the last value is reached. 
     * It keeps comparing the value of max to that of
     * current value till the last element is reached.
     *  */ 
    if(currentElem > max){
      max = currentElem;
      // console.log(max)
    }
  }
  console.log(max);
  return max;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");