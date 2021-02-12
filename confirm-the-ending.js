function confirmEnding(str, target) {
  //Get the position (index) of the target in the given string (str)
  let targetPosOnString = str.lastIndexOf(target);
  //Extract a substring of the given starting from the given index (targetPosOnString)
  let extractedString = str.substring(targetPosOnString);
  //Check if the extracted string is the same as the target
  if(extractedString === target){
    return true;
  }
  return false;
}

confirmEnding("mountain", "tain");  