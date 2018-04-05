// create an algorithm that will remove all falsy values from arr
// then return all truthy values
function bouncer(arr) {
  // global arrays for use in loop
  var trueVal = [];
  var falseVal = [];
  var i = 0;

  // loop through arr elements
  for (var x = 0; x < arr.length; x++){
	// set the current index of arr to a variable
    var value = arr[i];
	// if value has a truthy value, then push it
	// to trueVal array
    if (value){
      trueVal.push(value);
      i++;
	// if it not a value at all (falsey) then push
	// it to falseVal array
    } else {
      falseVal.push(value);
      i++;

    }
  }
  // return the trueVal array
  return trueVal;

}

bouncer([1, null, NaN, 2, undefined]);
