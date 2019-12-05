const intCodeProgram = prgArray => {
  let currentIndex = 0;
  while (prgArray[currentIndex] != 99) {
    let code = prgArray[currentIndex];
    let value1 = prgArray[currentIndex + 1];
    let value2 = prgArray[currentIndex + 2];
    let write = prgArray[currentIndex + 3];
    switch (code) {
      case 1:
        prgArray[write] = prgArray[value1] + prgArray[value2];
        currentIndex += 4;
        break;
      case 2:
        prgArray[write] = prgArray[value1] * prgArray[value2];
        currentIndex += 4;
        break;
    }
  }
  return prgArray;
};

exports.intCodeProgram = intCodeProgram;
