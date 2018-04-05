function repeatStringNumTimes(str, num) {
  var array = [];
  // copies the number of str by num into array
  for (var i = 0; i < num; i++){
    array.push(str);
  }
  // prints the array as a string and replaces the , with nothing globally
  var newStr = array.toString().replace(/,/g, '');
  return newStr;
}

repeatStringNumTimes("abc", 3);
