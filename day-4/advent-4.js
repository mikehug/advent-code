const passwordCheck = (lowerBound, upperBound) => {
  let validPasswordCount = 0;
  let previousDigit = null;
  let currentDigit = null;
  let numberArray = null;
  let adjSame = false;
  let valid = false;
  let previousAdjSame = false;
  //Iterate through the range of numbers
  for (let number = lowerBound; number <= upperBound; number++) {
    //Create an with int digits array for the number
    numberArray = Array.from(number.toString(), x => parseInt(x));
    //Initialise variables to defaults
    previousDigit = numberArray[0];
    adjSame = false;
    valid = false;
    previousAdjSame = false;
    //Iterate over digits starting at second one - setting it to current as previous is set to first
    for (let i = 1; i < numberArray.length; i++) {
      currentDigit = numberArray[i];
      let prepreDigit = numberArray[i - 2];
      let postDigit = numberArray[i + 1];
      //check if it is decreasing and break
      if (currentDigit < previousDigit) {
        valid = false;
        break;
      }
      if (
        currentDigit === previousDigit &&
        currentDigit != prepreDigit &&
        currentDigit != postDigit
      ) {
        valid = true;
      }
      previousDigit = currentDigit;
    }
    if (valid) validPasswordCount++;
  }
  console.log(validPasswordCount);
  return validPasswordCount;
};

const lowerBound = 284639;
const upperBound = 748759;
passwordCheck(lowerBound, upperBound);

exports.passwordCheck = passwordCheck;
