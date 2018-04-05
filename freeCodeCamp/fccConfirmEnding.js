function confirmEnding(str, target) {
    // Creates arrays for strings
	var array = str.split("");
	var tarArray = target.split("");
    // position setting for loop
	var number = tarArray.length;
    // public var for result of loop
	var end = [];

	for (var i = 0; i < tarArray.length; i++) {
        // iterates through str starting at target length creating end Array
		end.push(array[array.length - number]);
		number--;
	}
    // puts arrays back into strings and compares them
	if (end.toString() == tarArray.toString()) {
		return true;
	} else {
		return false;
	}
}

confirmEnding("He was a liar", "liar");
