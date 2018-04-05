function slasher(arr, howMany) {
	// starting at index 0, add to newArr the amnount of int in howMany
	var newArr = arr.splice(0, howMany);
	//   console.log(arr);
	return arr;
}

slasher([1, 2, 3], 2);
