let fuelSum = 0;

const fuelCalculator = mass => {
  let fuel = Math.floor(mass / 3) - 2;
  if (fuel <= 0) {
    let result = fuelSum;
    fuelSum = 0;
    return result;
  } else {
    fuelSum += fuel;
    return fuelCalculator(fuel);
  }
};


const fuelCounterUpper = moduleMassArray => {
  const fuelReducer = (accumulator, currentVal) =>
    accumulator + fuelCalculator(currentVal);
  let fuelTotal = moduleMassArray.reduce(fuelReducer, 0);
  console.log(fuelTotal);
  return fuelTotal;
};

exports.fuelCalculator = fuelCalculator;
exports.fuelCounterUpper = fuelCounterUpper;
