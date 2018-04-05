//Create an algorithm that will prove true if the elements of the array contain the same letter.

function mutation(arr) {
	//Break arr into two strings, stringOne and string Two
	var stringOne = arr.slice(0, 1).toString().toLowerCase();
	var stringTwo = arr.slice(1, 2).toString().toLowerCase();
	// set variables that can be changed in the loop as it checks each letter from stringTwo
	var index = 0;
	var indexEnd = 1;
	// Loops through stringTwo and searches each letter,
	// if at any point the letter is not found,
	// the loop will return false, if all letters
	// are found the fucntion will return true.
	for (var i = 0; i < stringTwo.length; i++) {

		var singleString = stringTwo.slice(index, indexEnd);
		// checks the index of stringOne for the
		// letter provided in singleString
		// if it exists, keeps checking.
		if (stringOne.indexOf(singleString) !== -1) {
			index++;
			indexEnd++;
		}
		// if at any point during the check the letter is
		// not found in stringOne, mutation function returns false
		else if (stringOne.indexOf(singleString) == -1) {
			return false;
		}
	}
	return true;
}

mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
