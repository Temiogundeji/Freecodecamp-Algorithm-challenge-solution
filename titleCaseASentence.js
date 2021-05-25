function titleCase(str) {
    let strArr = str.split(" ");
    let elem = "";
    let newArr = [];
    let newElem = "";
    for(let i =0; i < strArr.length; i++){
      elem = strArr[i];
      elem = elem.toLowerCase();
      newElem = elem[0].toUpperCase() + elem.slice(1);
      newArr.push(newElem);
    }
    let newString = newArr.join(" ");
    return newString;
    
  }
  
  titleCase("I'm a little tea pot");