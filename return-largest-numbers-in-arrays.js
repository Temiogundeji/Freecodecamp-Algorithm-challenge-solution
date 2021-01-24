function largestOfFour(arr) {
  let maxArr = [];
  for(let i=0; i < arr.length; i++){
    let innerArr = arr[i];
    let maxElement = Math.max(...innerArr);
    maxArr.push(maxElement);
  }
  return maxArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);