function findElement(arr, func) {
  let resultArr = [];
  let num = 0;
  for(let i=0; i < arr.length; i++){
    num = arr[i];
    let isElement = func(num);
    if(isElement){
      // console.log(num);
      resultArr.push(num)
    }
    
  }
  console.log(resultArr[0]);
  return resultArr[0];
}

findElement([1, 2, 3, 4], num => num % 2 === 0);