const intCodeProgram = (memory, noun, verb) => {
	let currentAddress = 0;
	memory[1] = noun;
	memory[2] = verb;
	while (memory[currentAddress] != 99) {
		let instruction = memory[currentAddress];
		let parameter1 = memory[currentAddress + 1];
		let parameter2 = memory[currentAddress + 2];
		let parameter3 = memory[currentAddress + 3];
		switch (instruction) {
		case 1:
			memory[parameter3] = memory[parameter1] + memory[parameter2];
			currentAddress += 4;
			break;
		case 2:
			memory[parameter3] = memory[parameter1] * memory[parameter2];
			currentAddress += 4;
			break;
		default:
			break;
		}
	}

	return memory;
};

exports.intCodeProgram = intCodeProgram;